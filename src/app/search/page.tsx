"use client";
import React, { useContext } from "react";
import { GlboalContext } from "@/context";
import SingleBlog from "../Components/singleblog/SingleBlog";
import { Blog } from "@/utils/types";

const Page = () => {
  const { searchQuery, setSearchQuery, searchResult, setSearchResult } =
    useContext(GlboalContext);
  async function getsearchpost(query: string) {
    const res = await fetch(`/api/search?query=${query}`, {
      method: "GET",
      cache: "no-store",
    });
    const { postlist } = await res.json();
    console.log({ postlist });
    if (res.ok) {
      setSearchResult(postlist);
    }
  }
  async function handleSearch() {
    getsearchpost(searchQuery);
  }
  async function handleDelete(id: number) {
    const post = await fetch(`/api/blog?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    const data = await post.json();
    console.log(data);
  }

  return (
    <div className="container w-full ">
      <div className="bg-[var(--softbg)] p-10 rounded-lg mt-5">
        <h1 className="pb-5 font-bold text-xl text-[var(--textColor)]">
          Search any blog post
        </h1>
        <form className="py-5">
          <input
            type="text"
            id="title"
            className="w-full py-3 border border-[--softbg] bg-[var(--ibg)] rounded-[10px] outline-none px-5"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="New"
          />
        </form>
        <button
          className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-normal"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {searchResult && searchResult.length ? (
        <div className="grid gird-cols-3 gap-5 py-10">
          {searchResult.map((blogItem: Blog) => (
            <div key={blogItem.id}>
              <SingleBlog handleDelete={handleDelete} blogItem={blogItem} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10">
          <p className="text-2xl text-[var(--textColor)] font-semibold">
            No Search Result
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
