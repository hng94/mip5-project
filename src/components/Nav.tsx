import * as React from "react";
import { FiHeart } from "react-icons/fi";
import { useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import useOnClickOutside from "../hooks/useClickOutside";
import useAuth, { AuthProvider, initialAuth } from "../contexts/AuthContext";
import { AuthActionTypes } from "../reducers/authReducer";
import { Link } from "react-router-dom";

export default function Nav() {
  const { state: auth, dispatch } = useAuth();
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  const [isOpen, setOpen] = useState(false);
  const handleSignOut = () => {
    setOpen(false);
    dispatch({
      type: AuthActionTypes.LOGOUT,
      payload: initialAuth,
    });
  };

  return (
    <AuthProvider>
      <nav
        style={{ height: "58px" }}
        className="m-4 py-2 px-6 bg-white rounded-md shadow-lg flex items-center justify-between border border-white"
      >
        <div className="space-x-2">
          <a href="/">
            <p className="rounded-md py-2 font-medium text-red-400 uppercase">
              <FiHeart className="inline-flex h-5 w-5 mr-2" />
              give
            </p>
          </a>
        </div>
        {!auth?.token ? (
          <div>
            <Link to="/register">
              <a className="rounded-md py-2 px-4 font-medium text-gray-500 hover:text-red-400">
                Register
              </a>
            </Link>
            <Link to="/login">
              <a className="rounded-md py-2 px-4 font-medium text-gray-500 hover:text-red-400">
                Login
              </a>
            </Link>
          </div>
        ) : (
          <div className="relative h-10">
            <Menu>
              <div ref={ref}>
                <Menu.Button className="inline-flex focus:outline-none">
                  <img
                    src="../../thumbnail.jpg"
                    className="w-10 rounded-full"
                    alt=""
                    onClick={() => setOpen(!isOpen)}
                  />
                </Menu.Button>
                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform-gpu  opacity-0 scale-95"
                  enterTo="transform-gpu  opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="trantransform-gpu sform opacity-100 scale-100"
                  leaveTo="transform-gpu  opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                        {auth?.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        <Link to="/profile">
                          <a
                            onClick={() => setOpen(!isOpen)}
                            className="hover:bg-gray-100 hover:text-red-400 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none"
                          >
                            Profile
                          </a>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/projects">
                          <a
                            onClick={() => setOpen(!isOpen)}
                            className="hover:bg-gray-100 hover:text-red-400 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none"
                          >
                            Created projects
                          </a>
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/favorite-project">
                          <a
                            onClick={() => setOpen(!isOpen)}
                            className="hover:bg-gray-100 hover:text-red-400 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none"
                          >
                            Favorite projects
                          </a>
                        </a>
                      </Menu.Item>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={handleSignOut}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </div>
        )}
      </nav>
    </AuthProvider>
  );
}
