"use client";
import { RenderTextInput } from "@/app/_components/RenderInput";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginCSS from "./Login.module.css";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

type Inputs = {
  email: string;
  password: string;
};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      const response: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("response: ", response);
      if (!response?.error) {
        router.push("/");
      } else {
        setError("pls enter proper email and password or try later");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={LoginCSS.center}>
      <form onSubmit={handleSubmit(onSubmit)} className={LoginCSS.form}>
        <h1 className={LoginCSS.formTitle}>Signin</h1>
        <RenderTextInput
          register={register}
          name="email"
          validationSchema={{
            required: "this field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "pls enter proper email",
            },
          }}
          label={"Email"}
          errors={errors}
        />{" "}
        <RenderTextInput
          register={register}
          name="password"
          validationSchema={{
            required: "this field is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{8,}$/,
              message:
                "Password must contain at least 1 number, 1 special character and 1 upper case alphabet.",
            },
          }}
          label={"Password"}
          errors={errors}
          type="password"
        />{" "}
        <input type="submit" className={LoginCSS.Submit_Btn} />
        {error && <p>{error}</p>}
      </form>

      <button onClick={() => signIn("google")}>With Google</button>
      <button onClick={() => signIn("facebook")}>With Facebook</button>
    </div>
  );
};

export default Login;
