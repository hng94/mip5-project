import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Input = {
  email: string;
};
const ForgotPassword = () => {
  const { register, handleSubmit, watch, errors } = useForm<Input>();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <p className="text-3xl mb-6">Recovery password</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="email"
            >
              E-mail
              <input
                type="email"
                name="email"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: "Email is required" })}
              />
            </label>
            <p className="text-sm text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded text-white
                    font-medium bg-red-400 uppercase
                    focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            recovery password
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
