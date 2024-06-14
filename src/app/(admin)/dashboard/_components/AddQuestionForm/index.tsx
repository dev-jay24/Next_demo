"use client";

import { RenderTextInput } from "@/app/_components/RenderInput";
import { fetchWrapper } from "@/app/_utils/fetchWrapper";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  anser: string;
};

export default function AddQuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const optionArr = [data.option1, data.option2, data.option3, data.option4];
    const payload = {
      question: data.question,
      options: optionArr,
      answer: optionArr[data.anser as unknown as number],
    };
    console.log("data: ", payload);

    const res = fetchWrapper("question/add-question", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log("res: ", res);
  };

  return (
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" font-bold text-3xl">Add Question</h1>
        <RenderTextInput
          register={register}
          name="question"
          label={"Question"}
          errors={errors}
        />
        <div className=" flex">
          <RenderTextInput
            register={register}
            name="option1"
            label={"Option1"}
            errors={errors}
            type="text"
          />
          <div className="pt-6 pl-5 flex">
            <input {...register("anser")} type="radio" value="0" />
          </div>
        </div>
        <div className=" flex">
          <RenderTextInput
            register={register}
            name="option2"
            label={"Option2"}
            errors={errors}
            type="text"
          />
          <div className="pt-6 pl-5 flex">
            <input {...register("anser")} type="radio" value="1" />
          </div>
        </div>
        <div className=" flex">
          <RenderTextInput
            register={register}
            name="option3"
            label={"Option3"}
            errors={errors}
            type="text"
          />
          <div className="pt-6 pl-5 flex">
            <input {...register("anser")} type="radio" value="2" />
          </div>
        </div>
        <div className=" flex">
          <RenderTextInput
            register={register}
            name="option4"
            label={"Option4"}
            errors={errors}
            type="text"
          />
          <div className="pt-6 pl-5 flex ">
            <input {...register("anser")} type="radio" value="3" />
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
