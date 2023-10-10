import React from "react";
import Image from "next/image";
import { Blog } from "@/utils/types";
const SingleBlog = ({
  blogItem,
  handleDelete,
}: {
  blogItem: Blog;
  handleDelete: (id: number) => {};
}) => {
  const { image, title, description, category, userid, userimage, comments } =
    blogItem;
  return (
    <div>
      <div className="w-[20px] h-[60px]">
        <Image src={image} fill alt="BlogImage" />
      </div>
      <h1>{title}</h1>
      <h6>{description}</h6>
      <div>
        <div className="w-[50px] h-[70px]">
          <Image src={userimage} fill alt="userimage" />
        </div>
        <div>
          <p>By</p>
          <h3>{userid}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
