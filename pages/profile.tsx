import { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
type IUser = {
  firstName: string;
  lastName: string;
  address?: string;
  postcode?: string;
  phone?: string;
  email: string;
  password?: string;
  password2?: string;
  media?: string;
};
export default function Profile() {
  const { register, handleSubmit, watch, errors } = useForm<IUser>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);
  const props: IUser = {
    firstName: "Hoang",
    lastName: "Nguyen",
    email: "nguyenvuhoang1994@gmail.com",
    media: "thumbnail.jpg",
  };
  return (
    <>
      <div className="rounded shadow border-gray-300 bg-white p-6 mt-4">
        <p className="text-3xl mb-6">Profile page</p>
        {/* Avatar */}
        <div className="flex flex-row space-x-2">
          <img
            className="rounded-full w-40"
            src={props.media}
            alt={props.media}
          />
          <div className="w-full flex justify-center p-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="grid grid-cols-2 gap-6 ">
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
                    defaultValue={props.firstName}
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
                    defaultValue={props.lastName}
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
                    className="form-input mt-1 block w-full rounded border-gray-300"
                    ref={register({ required: true })}
                    defaultValue={props.email}
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
                    defaultValue={props.address}
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
                    defaultValue={props.postcode}
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
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    ref={register({ required: true })}
                    defaultValue={props.phone}
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 mr-4 px-3 py-2 rounded text-white font-medium bg-red-400 uppercase focus:outline-none hover:bg-red-500 hover:shadow-lg"
          >
            Save change
          </button>
          <Link href="/change-password">
            <a className="text-sm cursor-pointer bg-white rounded-md font-medium text-gray-500 hover:text-red-400">
              Change password
            </a>
          </Link>
        </form>
      </div>
    </>
  );
}
