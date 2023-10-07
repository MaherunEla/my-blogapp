"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { NavbarData } from "./NavbarData";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className=" flex items-center justify-between py-5">
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
          className="py-4 px-8 text-white bg-blue-600 text-lg font-normal rounded-lg"
        >
          Create
        </Link>
        <button className="py-4 px-8 text-white bg-blue-600 text-lg font-normal rounded-lg">
          Logout
        </button>

        <button className="text-blue " onClick={toggle}>
          <BiSolidMoon size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;