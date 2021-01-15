import * as React from "react";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 m-4 py-3 px-6 bg-white rounded-md shadow-lg flex justify-between border border-white">
      <div className="space-x-2">
        <FiHeart className="inline-flex h-6 w-6 text-red-500" />
        <Link href="/">
          <a className="rounded-md py-2 px-4 font-medium text-gray-500 hover:text-red-400">
            Home
          </a>
        </Link>
        <Link href="/project">
          <a className="rounded-md py-2 px-4 font-medium text-gray-500 hover:text-red-400">
            Projects
          </a>
        </Link>
      </div>
      <div>
        <Link href="/auth/login">
          <a className="rounded-md py-2 px-4 font-medium text-gray-500 hover:text-red-400">
            Login
          </a>
        </Link>
      </div>
    </nav>
  );
}
