"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { NavbarData } from "./NavbarData";
import { ThemeContext } from "@/context/ThemeContext";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { GlboalContext } from "@/context";
const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { data: session } = useSession();
  const { setSearchQuery, setSearchResult } = useContext(GlboalContext);

  const pathName = usePathname();

  useEffect(() => {
    setSearchResult([]);
    setSearchQuery("");
  }, [pathName]);
  return (
    <div className=" flex items-center justify-between py-5">
      <div className="flex gap-20 items-center">
        <h1 className="font-extrabold text-3xl text-[var(--textColor)] ">
          NextBlog
        </h1>
        <div className="flex gap-10">
          {NavbarData.map((item, index) => (
            <Link href={item.href} key={index}>
              <h3 className="text-[var(--textColor)] text-lg font-semibold">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        {session !== null ? (
          <Link
            href="/create"
            onClick={() => router.push("/create")}
            className="py-4 px-8 text-white bg-blue-600 text-lg font-normal rounded-lg"
          >
            Create
          </Link>
        ) : null}

        <button
          className="py-4 px-8 text-white bg-blue-600 text-lg font-normal rounded-lg"
          onClick={session === null ? () => signIn() : () => signOut()}
        >
          {session === null ? "Log In " : "Log Out"}
        </button>

        {theme === "dark" ? (
          <button className="text-[var(--textColor)] " onClick={toggle}>
            <BsSunFill size={30} />
          </button>
        ) : (
          <button className="text-[var(--textColor)] " onClick={toggle}>
            <BiSolidMoon size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
