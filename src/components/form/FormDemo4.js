import React from "react";
import { useForm } from "react-hook-form";

export default function FormDemo4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const MySubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(MySubmitHandler)}>
      <p>
        <input {...register("firstName")} />
      </p>
      <p>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && (
          <span className="text-danger">Last name is required.</span>
        )}
      </p>
      <p>
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && (
          <span className="text-danger">Please enter number for age.</span>
        )}
      </p>
      <input type="submit" />
    </form>
  );
}
