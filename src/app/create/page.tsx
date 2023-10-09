"use client";
import { uploadImages } from "@/utils/UploadImage";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[var(--softbg)] py-10 px-10 my-10">
      <h1 className="py-5 text-[var(--textColor)] text-4xl font-bold">
        Create Your Own Blog Post
      </h1>
      <form className="flex flex-col gap-5">
        <label className="text-[var(--textColor)] text-lg font-normal">
          Upload Blog Image
        </label>
        <input
          type="file"
          id="image"
          className="outline-none bg-[var(--ibg)] p-5 rounded-[10px]"
          onChange={async (e: any) => {
            const file = e.target.files[0];
            const { url } = await uploadImages(file, () => {});
            console.log(url);
          }}
        />

        <label className="text-[var(--textColor)] text-lg font-normal">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="py-3 border border-[--softbg] bg-[var(--ibg)] rounded-[10px] outline-[] px-5"
          placeholder="Enter Blog Title"
        />

        <label className="text-[var(--textColor)] text-lg font-normal">
          Description
        </label>
        <textarea
          className="p-5 border border-[--softbg] bg-[var(--ibg)] rounded-[10px] outline-none "
          id="description"
          rows={6}
          cols={50}
          placeholder="Enter Blog Description"
        />

        <label className="text-[var(--textColor)] text-lg font-normal ">
          Category
        </label>
        <select className="py-3  border border-[var(--softbg)] bg-[var(--ibg)] rounded-[10px] outline-none  px-5">
          <option selected value="0">
            Category
          </option>
          <option value="1">hellow</option>
        </select>

        <div>
          <button className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-normal">
            Create New Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
