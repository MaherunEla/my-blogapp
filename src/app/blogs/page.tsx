import React, { useState } from "react";
import SingleBlog from "../Components/singleblog/SingleBlog";
import { Blog } from "@/utils/types";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const page = async () => {
  const data = await getData();
  console.log(data);

  async function handleDelete(id: number) {
    const post = await fetch("api/blog", {
      method: "DELETE",
      cache: "no-store",
    });
    const data = await post.json();
    console.log(data);
  }

  // const mappedPosts = data.post.map((post: Blog) => {
  //   // You can access individual post properties here as needed
  //   return {
  //     id: post.id,
  //     title: post.title,
  //     description: post.description,
  //     category: post.category,
  //     userid: post.userid,
  //     userimage: post.userimage,
  //     comments: post.comments,
  //   };
  // });

  // console.log({ mappedPosts });

  return (
    <div className="py-5 border border-red-800">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {data.post.map((item: Blog) => (
          <div className="flex flex-col gap-5 px-3" key={item.id}>
            <Link href={`/blogs/${item.id}`}>
              <div className="block w-[400px] h-[300px] relative">
                <h4 className="absolute text-[var(--textColor)] font-medium top-6 right-6 z-20 bg-blue-500 w-fit px-2 py-3 rounded-[10px] ">
                  {item.category}
                </h4>
                <Image
                  className="rounded-[10px]"
                  src={item.userimage}
                  fill
                  alt="BlogImage"
                />
              </div>
            </Link>
            <h1 className="font-bold text-[var(--textColor)]">{item.title}</h1>
            <h6 className="text-[var(--textColor)]">{item.description}</h6>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2">
                <div className="w-[40px] h-[40px] relative">
                  <Image
                    className="rounded-full"
                    src={item.userimage}
                    fill
                    alt="userimage"
                  />
                </div>
                <div>
                  <p className="text-[var(--textColor)]">By</p>
                  <h3 className="text-[var(--textColor)]">{item.userid}</h3>
                </div>
              </div>
              <div className="text-[var(--textColor)]">
                <AiFillDelete size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
