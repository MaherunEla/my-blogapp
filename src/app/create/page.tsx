"use client";
import { uploadImages } from "@/utils/UploadImage";
import React, { useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SimpleEditor } from "../Components/tiptap/SimpleEditor";
import { GlboalContext } from "@/context";
const Createpage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { formData, setFormData } = useContext(GlboalContext);

  //console.log(session, "session");
  const handleSubmit = async () => {
    if (session === null) {
      router.push("/");
    }
    const res = await fetch("api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userid: session?.user?.name,
        userimage: session?.user?.image,
        comments: [],
      }),
    });
    console.log({ res });
  };
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
            const res = await uploadImages(file, () => {});
            console.log(res?.url);
            setImage(URL.createObjectURL(file));
            setFormData({
              ...formData,
              image: res?.url!,
            });
          }}
        />

        <label className="text-[var(--textColor)] text-lg font-normal">
          Title
        </label>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
            setFormData({
              ...formData,
              title,
            });
          }}
          className="py-3 border border-[--softbg] bg-[var(--ibg)] rounded-[10px] outline-none px-5"
          placeholder="Enter Blog Title"
        />

        <label className="text-[var(--textColor)] text-lg font-normal">
          Description
        </label>
        <SimpleEditor />
        {/* <textarea
          className="p-5 border border-[--softbg] bg-[var(--ibg)] rounded-[10px] outline-none "
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          cols={50}
          placeholder="Enter Blog Description"
        /> */}

        <label className="text-[var(--textColor)] text-lg font-normal ">
          Category
        </label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
            setFormData({
              ...formData,
              category: e.target.value,
            });
          }}
          className="py-3  border border-[var(--softbg)] bg-[var(--ibg)] rounded-[10px] outline-none  px-5"
        >
          <option selected value="0">
            Category
          </option>
          <option value="Science">Science</option>
          <option value="Application">Application</option>
          <option value="Data">Data</option>
          <option value="Software">Software</option>
          <option value="Technology">Technology</option>
        </select>

        <div>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-normal"
          >
            Create New Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createpage;
