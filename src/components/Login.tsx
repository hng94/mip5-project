import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth, { AuthContext } from "../contexts/AuthContext";
import { AuthDTO, AuthInput } from "../DTO/AuthDTO";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import ErrorHandler from "./common/ErrorHandler";
import { useHistory } from "react-router-dom";
import { AuthActionTypes } from "../reducers/authReducer";

interface ILoginData {
  login: AuthDTO;
}

const LOGIN = gql`
  query LoginQuery($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      token
    }
  }
`;
const Login: React.FC = () => {
  let history = useHistory();
  const { state: auth, dispatch } = useAuth();
  const { register, handleSubmit, watch, errors } = useForm<AuthInput>();
  const [
    sendLogin,
    { loading, error, data: loginResult },
  ] = useLazyQuery<ILoginData>(LOGIN, { errorPolicy: "all" });

  const onSubmit = (input: AuthInput) => {
    sendLogin({
      variables: {
        email: input.email,
        password: input.password,
      },
    });
  };

  useEffect(() => {
    console.log(loginResult);
    if (loginResult) {
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: loginResult.login,
      });
    }
  }, [loginResult]);

  return (
    <>
      {loading && <div>Sending query</div>}
      <div className="rounded shadow p-4 bg-white w-full lg:w-5/12 mx-auto">
        <ErrorHandler error={error} />
        <p className="text-3xl mb-6">Login</p>
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
          <div>
            <label
              className="text-xs font-semibold text-gray-600 uppercase"
              htmlFor="password"
            >
              Password
              <input
                type="password"
                name="password"
                id="password"
                className="form-input mt-1 block w-full rounded border-gray-300"
                ref={register({ required: "Password is required" })}
              />
            </label>
            <p className="text-sm text-red-500">
              {errors.password && errors.password.message}
            </p>
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
          <a href="/forgot-password">
            <a className="flex-2 underline">Forgot password?</a>
          </a>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>
          <a href="/register">
            <a className="flex-2 underline">Create an Account</a>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
