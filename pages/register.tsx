import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

type IRegister = {
  firstName: string;
  lastName: string;
  // address: string;
  // postcode: string;
  // phone: string;
  email: string;
  password: string;
  password2: string;
  agree: boolean;
};
const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm<IRegister>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <p className="text-3xl mb-6">Register</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase block"
              htmlFor="firstName"
            >
              First name
              <span className="text-red-500">
                {errors.firstName && errors.firstName.message}
              </span>
              <input
                className="form-input mt-1 block w-full rounded border-gray-300"
                type="text"
                name="firstName"
                ref={register({ required: " is required" })}
              />
            </label>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="lastName"
            >
              Last name
              <span className="text-red-500">
                {errors.lastName && errors.lastName.message}
              </span>
              <input
                type="text"
                name="lastName"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: " is required" })}
              />
            </label>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="email"
            >
              E-mail
              <span className="text-red-500">
                {errors.email && errors.email.message}
              </span>
              <input
                type="email"
                name="email"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: " is required" })}
              />
            </label>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password"
            >
              Password
              <span className="text-red-500">
                {errors.password && errors.password.message}
              </span>
            </label>
            <input
              type="password"
              name="password"
              className="form-input mt-1 block w-full rounded border-gray-300"
              ref={register({ required: " is required" })}
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password2"
            >
              Re-type password
              <span className="text-red-500">
                {errors.password2 && errors.password2.message}
              </span>
            </label>
            <input
              type="password"
              name="password2"
              className="form-input mt-1 block w-full rounded border-gray-300"
              ref={register({
                required: " is required",
                validate: (value) => {
                  if (value != password.current) {
                    return " does not match";
                  } else return true;
                },
              })}
            />
          </div>
          {/* <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-input mt-1 block w-full rounded border-gray-300"
              ref={register}
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="postcode"
            >
              Postcode
            </label>
            <input
              type="text"
              name="postcode"
              className="form-input mt-1 block w-full rounded border-gray-300"
              ref={register}
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="phone"
            >
              Telephone
            </label>
            <input
              type="text"
              name="phone"
              className="form-input mt-1 block w-full rounded border-gray-300"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={register}
            />
          </div> */}
          <div>
            <label htmlFor="agree">
              <input
                name="agree"
                type="checkbox"
                className="h-5 w-5 text-blue-500 rounded focus:outline-none border-gray-300"
                // checked={agree}
                ref={register({ required: true })}
                // onChange={() => setAgree(!agree)}
              />
              <span className="ml-2">
                I agree with
                <Link href="/policy">
                  <a className="ml-1 text-gray-700 underline">GIVE's policy.</a>
                </Link>
              </span>
            </label>
            <p className="text-sm text-red-500">
              {errors.agree && "Agree with our policy to register acccount!"}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded text-white font-medium bg-red-400 uppercase focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
