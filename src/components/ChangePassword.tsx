import React, { useRef } from "react";
import { useForm } from "react-hook-form";

type IChangePassword = {
  password: string;
  newPassword: string;
  newPassword2: string;
};
const ChangePassword = () => {
  const { register, handleSubmit, watch, errors } = useForm<IChangePassword>();
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <p className="text-3xl mb-4">Change password</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password"
            >
              Current password
              <span className="text-red-500">
                {errors.password && errors.password.message}
              </span>
              <input
                type="password"
                name="password"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: " is required" })}
              />
            </label>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="newPassword"
            >
              new password
              <span className="text-red-500">
                {errors.newPassword && errors.newPassword.message}
              </span>
              <input
                type="password"
                name="newPassword"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: " is required" })}
              />
            </label>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="newPassword2"
            >
              Re-type new password
              <span className=" text-red-500">
                {errors.newPassword2 && errors.newPassword2.message}
              </span>
              <input
                type="password"
                name="newPassword2"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({
                  required: " is required",
                  validate: (value) => {
                    if (value != newPassword.current) {
                      return " does not match";
                    } else return true;
                  },
                })}
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded text-white
                    font-medium bg-red-400 uppercase
                    focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Save change
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
