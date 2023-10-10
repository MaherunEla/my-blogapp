import BlogDetails from "@/app/Components/blogdetails/BlogDetails";
import Image from "next/image";
import React, { useState } from "react";

interface Param {
  slug: any;
}

async function getdata(slug: any) {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}
const Detailspage = async ({ params }: { params: Param }) => {
  const { slug } = params;
  //const blogData = await getdata(slug);

  const { post } = await getdata(slug);

  return (
    <div>
      <BlogDetails blogData={post} />
    </div>
  );
};

export default Detailspage;
