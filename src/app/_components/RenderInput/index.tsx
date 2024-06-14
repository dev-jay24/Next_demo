import { Controller, UseFormRegister } from "react-hook-form";
import ReanderInput from "./ReanderInput.module.css";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

type Props = {
  label: string;
  register: UseFormRegister<any>;
  errors: any;
  validationSchema?: any;
  name: string;
  type?: string;
  control?: any;
};

export const RenderTextInput = ({
  name,
  label,
  register,
  errors,
  type,
  validationSchema,
}: Props) => {
  return (
    <div className={ReanderInput.formControlInput}>
      <label htmlFor={name} className={ReanderInput.label}>
        {label}
        {validationSchema?.required && "*"}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, validationSchema)}
        className={ReanderInput.input}
      />
      {errors[name] && (
        <span className={ReanderInput.error}>{errors[name]?.message}</span>
      )}
    </div>
  );
};

export const RenderphoneInput = ({
  name,
  label,
  register,
  errors,
  type,
  validationSchema,
  control,
}: Props) => {
  return (
    <div className={ReanderInput.formControlInput}>
      <label htmlFor={name} className={ReanderInput.label}>
        {label}
        {validationSchema?.required && "*"}
      </label>
      <Controller
        control={control}
        name={name}
        rules={validationSchema}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            className={ReanderInput.PhoneInput}
            value={value}
            onChange={onChange}
            defaultCountry="us"
            placeholder="Enter phone number"
          />
        )}
      />
      {errors[name] && (
        <span className={ReanderInput.error}>
          {errors[name]?.message || "Invalid Phone Number "}
        </span>
      )}
    </div>
  );
};
