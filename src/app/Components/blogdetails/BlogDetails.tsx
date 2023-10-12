"use client";
import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import parser from "html-react-parser";
const BlogDetails = ({ blogData }: { blogData: Blog }) => {
  var parse = require("html-react-parser");
  const [comment, setComment] = useState<string>("");
  const router = useRouter();
  console.log(comment);
  const { data: session } = useSession();

  async function handleComment() {
    let extractComments = [...blogData.comments];
    extractComments.push(`${comment}|${session?.user?.name}`);

    console.log({ extractComments });
    const blogcomment = await fetch(`http://localhost:3000/api/blog`, {
      method: "PUT",
      body: JSON.stringify({
        id: blogData.id,
        comments: extractComments,
      }),
    });
    const data = await blogcomment.json();
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
        <Image src={blogData.image} alt="" fill />
      </div>
      <h4 className="py-20 font-semibold text-[var(--textColor)]">
        {parse(blogData.description)}
      </h4>
      <form className="w-11/12 flex gap-5">
        {session !== null ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Add comment here"
              className="border border-blue-800 px-10 py-5 w-full rounded-lg "
              id="comment"
            />
            <button
              onClick={handleComment}
              className="px-5 py-3 text-white bg-blue-500 rounded-lg"
            >
              Add
            </button>
          </>
        ) : null}
      </form>
      <div className="py-10">
        <div>
          <h2 className="font-bold text-lg text-[var(--textColor)] py-5">
            Discussion ({blogData?.comments.length})
          </h2>
        </div>

        {blogData && blogData.comments && blogData.comments.length > 0
          ? blogData.comments.map((comment, index) => (
              <div className="flex flex-col gap-5 py-5" key={index}>
                <h4 className="text-[var(--textColor)] font-bold">
                  {comment.split("|")[1] === blogData?.userid
                    ? `${comment.split("|")[1].split("_")[0]}(Author)`
                    : comment.split("|")[1].split("_")[0]}
                </h4>

                <p className="text-[var(--textColor)] font-medium">
                  {comment.split("|")[0]}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default BlogDetails;
