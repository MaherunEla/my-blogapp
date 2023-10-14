"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Blog } from "@/utils/types";
import Link from "next/link";
import parser from "html-react-parser";
import { useSession } from "next-auth/react";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
const SingleBlog = ({
  blogItem,
  handleDelete,
}: {
  blogItem: Blog;
  handleDelete: (id: number) => {};
}) => {
  const {
    id,
    image,
    title,
    description,
    category,
    userid,
    userimage,
    comments,
  } = blogItem;
  const { data: session } = useSession();
  var parse = require("html-react-parser");
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div>
      <div className="flex flex-col flex-1 gap-5 px-3">
        <Link href={`/blogs/${id}`}>
          <div className="block w-[400px] h-[300px] relative">
            <h4 className="absolute text-white font-medium top-6 right-6 z-20 bg-blue-500 w-fit px-2 py-3 rounded-[10px] ">
              {category}
            </h4>
            <Image
              className="rounded-[10px]"
              src={image}
              fill
              alt="BlogImage"
            />
          </div>
        </Link>
        <h1 className="font-bold text-[var(--textColor)]">{parse(title)}</h1>
        <h6 className="text-[var(--textColor)]">{parse(description)}</h6>
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] relative">
              <Image
                className="rounded-full"
                src={userimage}
                fill
                alt="userimage"
              />
            </div>
            <div>
              <p className="text-[var(--textColor)]">By</p>
              <h3 className="text-[var(--textColor)]">{userid}</h3>
            </div>
          </div>
          <div className="text-[var(--textColor)] cursor-pointer">
            {session !== null && session?.user?.name === userid ? (
              <AiFillDelete onClick={() => handleDelete(id)} size={30} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
