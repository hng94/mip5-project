import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type IAuth = {
  email?: string;
  password?: string;
};
const Login = () => {
  const auth: IAuth = {};
  const { register, handleSubmit, watch, errors } = useForm<IAuth>();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <p className="text-3xl text-center font-semibold">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="email address"
              ref={register}
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={register}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded text-white
                    font-medium bg-red-400 uppercase
                    focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <a href="forgot-password" className="flex-2 underline">
            Forgot password?
          </a>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>
          <Link href="/auth/register">
            <a className="flex-2 underline">Create an Account</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
