"use client";
import {
  RenderTextInput,
  RenderphoneInput,
} from "@/app/_components/RenderInput";
import { useForm, SubmitHandler } from "react-hook-form";
import RegisterCSS from "./register.module.css";
import { PhoneNumberUtil } from "google-libphonenumber";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const res = await fetch("http://192.168.3.239:3000/auth/signup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone: string) => {
    try {
      const validate = phoneUtil.isValidNumber(
        phoneUtil.parseAndKeepRawInput(phone)
      );
      return validate;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className={RegisterCSS.center}>
      <form onSubmit={handleSubmit(onSubmit)} className={RegisterCSS.form}>
        <h1 className={RegisterCSS.formTitle}>Signup Form</h1>
        <RenderTextInput
          register={register}
          name="firstName"
          validationSchema={{
            required: "this field is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "pls enter charecters only",
            },
          }}
          label={"First Name"}
          errors={errors}
        />
        <RenderTextInput
          register={register}
          name="lastName"
          validationSchema={{
            required: "this field is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "pls enter charecters only",
            },
          }}
          label={"Last Name"}
          errors={errors}
        />{" "}
        <RenderTextInput
          register={register}
          name="email"
          validationSchema={{
            required: "this field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "pls proper email",
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
        <RenderphoneInput
          register={register}
          control={control}
          name="phoneNumber"
          validationSchema={{
            validate: isPhoneValid,
          }}
          label={"Phone Number"}
          errors={errors}
        />
        <input type="submit" className={RegisterCSS.Signup} />
      </form>
    </div>
  );
};

export default Register;
