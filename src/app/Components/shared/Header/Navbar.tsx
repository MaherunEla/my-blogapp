import Link from "next/link";
import React from "react";
import { BsSunFill } from "react-icons/bs";
import { NavbarData } from "./NavbarData";

const Navbar = () => {
  return (
    <div className="container flex items-center justify-between py-5">
      <div className="flex gap-20 items-center">
        <h1 className="font-extrabold text-3xl text-[var(--textColor)] ">
          NextBlog
        </h1>
        <div className="flex gap-10">
          {NavbarData.map((item, index) => (
            <Link href="/" key={index}>
              <h3 className="text-[var(--textColor)] text-lg font-normal">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        <Link
          href="/create"
          className="py-4 px-8 text-[var(--textColor)] bg-blue-600 text-lg font-normal rounded-lg"
        >
          Create
        </Link>
        <button className="py-4 px-8 text-[var(--textColor)] bg-blue-600 text-lg font-normal rounded-lg">
          Logout
        </button>
        <button className="text-white ">
          <BsSunFill size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
