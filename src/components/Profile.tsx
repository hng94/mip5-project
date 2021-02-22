import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../contexts/AuthContext";
import { UserDTO } from "../DTO/UserDTO";
import DefaultAvatar from "./common/Avatar";
import ErrorHandler from "./common/ErrorHandler";

const GET_PROFILE = gql`
  query GetProfile($email: String!) {
    profile(email: $email) {
      firstName
      lastName
      email
      postcode
      address
      phone
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation UpdateProfile(
    $firstName: String!
    $lastName: String!
    $postcode: String!
    $address: String!
    $phone: String!
  ) {
    updateProfile(
      data: {
        firstName: $firstName
        lastName: $lastName
        postcode: $postcode
        address: $address
        phone: $phone
      }
    ) {
      firstName
      lastName
      email
      postcode
      address
      phone
    }
  }
`;
interface IGetProfileData {
  profile: UserDTO;
}

interface GetProfileInput {
  email: string;
}
export default function Profile() {
  const { state: auth, dispatch } = useAuth();
  const { loading, data: profile, error } = useQuery<
    IGetProfileData,
    GetProfileInput
  >(GET_PROFILE, {
    variables: {
      email: auth.email,
    },
  });
  const [
    updateProfile,
    { loading: loadingUpdate, data: updatedProfile, error: updateError },
  ] = useMutation<IGetProfileData>(UPDATE_PROFILE);

  const { register, handleSubmit, watch, errors } = useForm<UserDTO>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = ({ firstName, lastName, address, postcode, phone }) => {
    updateProfile({
      variables: {
        firstName,
        lastName,
        address,
        postcode,
        phone,
      },
    });
  };
  if (loading) return <pre>Loading</pre>;
  return (
    <>
      <ErrorHandler error={error} />
      <ErrorHandler error={updateError} />
      <div className="max-w-screen-md mx-auto rounded shadow border-gray-300 bg-white p-6 mt-4">
        <p className="text-3xl mb-6">Profile page</p>
        {/* Avatar */}
        <div className="flex flex-row space-x-2">
          <DefaultAvatar />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="grid grid-cols-1 gap-6 ">
            <div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="firstName"
                >
                  <span>First name</span>
                  <span className="text-red-500 ml-1">
                    {errors.firstName && "is required"}
                  </span>
                  <input
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    type="text"
                    name="firstName"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.firstName}
                  />
                </label>
              </div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="lastName"
                >
                  Last name
                  <span className="text-red-500 ml-1">
                    {errors.lastName && "is required"}
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.lastName}
                  />
                </label>
              </div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="email"
                >
                  E-mail
                  <span className="text-red-500 ml-1">
                    {errors.email && "is required"}
                  </span>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    disabled
                    className="disabled:opacity-50 form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.email}
                  />
                </label>
              </div>
            </div>
            <div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="address"
                >
                  Address
                  <span className="text-red-500 ml-1">
                    {errors.address && "is required"}
                  </span>
                  <input
                    type="text"
                    name="address"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.address}
                  />
                </label>
              </div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="postcode"
                >
                  Postcode
                  <span className="text-red-500 ml-1">
                    {errors.postcode && "is required"}
                  </span>
                  <input
                    type="text"
                    name="postcode"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.postcode}
                  />
                </label>
              </div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-600 uppercase"
                  htmlFor="phone"
                >
                  Phone
                  <span className="text-red-500 ml-1">
                    {errors.phone && "is required"}
                  </span>
                  <input
                    type="text"
                    name="phone"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={profile?.profile.phone}
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            disabled={loadingUpdate}
            type="submit"
            className="mt-6 mr-4 px-3 py-2 rounded text-white font-medium bg-red-400 uppercase focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Save change
          </button>
          {/* <a href="/change-password">
            <a className="text-sm cursor-pointer bg-white rounded-md font-medium text-gray-500 hover:text-red-400">
              Change password
            </a>
          </a> */}
        </form>
      </div>
    </>
  );
}
