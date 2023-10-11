"use client";
import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BlogDetails = ({ blogData }: { blogData: Blog }) => {
  const [comment, setComment] = useState<string>("");
  const router = useRouter();
  console.log(comment);
  const { data: session } = useSession();
  async function handleComment() {
    let extractComments = [...blogData.comments];
    console.log({ extractComments });
    const comment = await fetch(`http://localhost:3000/api/blog`, {
      method: "PUT",
      body: JSON.stringify({
        id: blogData.id,
        comments: extractComments,
      }),
    });
    const data = await comment.json();
    console.log(data);
    if (data) {
      setComment("");
      router.refresh();
    }
  }
  return (
    <div className="py-[10px]">
      <h1 className="text-3xl font-bold text-[var(--textColor)] pb-5">
        {blogData.title}
      </h1>
      <div className="flex items-center justify-between pb-10">
        <div className="flex gap-2">
          <div className="w-[20px] h-[20px] relative">
            <Image
              className="rounded-full"
              src={blogData.userimage}
              fill
              alt=""
            />
          </div>
          <p className="text-[var(--textColor)] font-semibold">
            By {blogData.userid}
          </p>
        </div>
        <h5 className="font-semibold text-white bg-blue-600 rounded-lg px-3 py-3">
          {blogData.category}
        </h5>
      </div>
      <div className="w-full h-[500px] relative ">
        <Image src={blogData.userimage} alt="" fill />
      </div>
      <h4 className="py-20 font-semibold text-[var(--textColor)]">
        {blogData.title}
      </h4>
      <form className="w-11/12 flex gap-5">
        <input
          type="text"
          onChange={(e) => {
            handleComment;
            setComment(e.target.value);
          }}
          placeholder="Add comment here"
          className="border border-blue-800 px-10 py-5 w-full rounded-lg "
          id="comment"
        />
        <button className="px-5 py-3 text-white bg-blue-500 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default BlogDetails;
