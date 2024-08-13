"use client"
import Link from "next/link";
import ThemeToggleButton from "../DarkMode/DarkMode";

const Navbar = () => {


  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="mx-auto">
              <div>
                <input
                  type="text"
                  className="rounded-md placeholder:text-zinc-600 placeholder:text-md lg:p-2 p-1 border-none"
                  placeholder="Search"
                />
              </div>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Movie Mania
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1">
          <li>
            <div className="border-neutral-950 border bottom-4 rounded-lg">
              <input
                type="text"
                className="input lg:w-96 rounded-md  placeholder:text-zinc-400 placeholder:text-md lg:p-2 p-1  border-none"
                placeholder="Search"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className=" px-1 flex items-center gap-4">
          <li>
            <Link className="hover:text-yellow-500" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" href={"/explore"}>
              Explore
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" href={"/tv_shows"}>
              TV Shows
            </Link>
          </li>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
