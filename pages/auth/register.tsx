import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type IRegister = {
  firstName: string;
  lastName: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  password: string;
};
const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm<IRegister>();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <p className="text-3xl text-center font-semibold">Register</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="firstName"
            >
              First name
            </label>
            <input type="text" name="firstName" ref={register} />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input type="text" name="lastName" ref={register} />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="email"
            >
              E-mail
            </label>
            <input type="email" name="email" ref={register} />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password"
            >
              Password
            </label>
            <input type="password" name="password" ref={register} />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="address"
            >
              Address
            </label>
            <input type="text" name="address" ref={register} />
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="postcode"
            >
              Postcode
            </label>
            <input type="text" name="postcode" ref={register} />
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={register}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded text-white
                    font-medium bg-red-400 uppercase
                    focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
