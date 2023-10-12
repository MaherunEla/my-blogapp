import React, { useEffect, useState } from "react";
import SingleBlog from "../Components/singleblog/SingleBlog";
import { Blog } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";

import { useSession } from "next-auth/react";
import BlogList from "../Components/bloglist/BlogList";
import { useRouter } from "next/navigation";
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

const Page = async () => {
  const data = await getData();
  console.log(data);

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
    <div className="py-5 ">
      <BlogList blog={data} />
    </div>
  );
};

export default Page;
