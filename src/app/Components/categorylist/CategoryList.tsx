import { Blog } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parser from "html-react-parser";

const CategoryList = ({ list }: { list: any }) => {
  let parse = require("html-react-parser");

  const maxid = Math.max(...list.map((item: any) => item.id));
  console.log(maxid);

  const currentCategory =
    list && list.length ? list.find((item: any) => item.id === maxid) : null;
  const relatedBlog =
    list && list.length ? list.filter((item: any) => item.id !== maxid) : [];
  return (
    <div className="py-10">
      <div className="flex items-center justify-between gap-10">
        <div className="flex-1 flex flex-col">
          {currentCategory === null ? (
            <div className="flex flex-col gap-10">
              <h1 className="text-4xl font-bold text-[var(--textColor)]">
                No Blog Available for thie category! please create one
              </h1>
              <Link
                href="/create"
                className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-medium text-center text-lg"
              >
                Create New Blog
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <h1 className="text-[var(--textColor)] font-bold text-3xl">
                {currentCategory.title}
              </h1>
              <div className="w-full h-[450px] relative">
                <Image src={currentCategory.image} fill alt="" />
              </div>
              <h2 className="py-20 font-semibold text-[var(--textColor)]">
                {parse(currentCategory.description)}
              </h2>
            </div>
          )}
        </div>
        <div className="w-[400px] flex flex-col gap-10">
          <div className="bg-[var(--ibg)] h-[250px] p-5 rounded-lg">
            <h2 className="font-bold text-2xl text-[var(--textColor)] pb-10">
              Filter by Category
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {["Application", "Data", "Software", "Technology", "Science"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="px-3 py-3 bg-blue-600 text-center  rounded-[10px]"
                  >
                    <Link href={`/category/${item}`}>
                      <h6 className="text-white">{item}</h6>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="bg-[var(--ibg)] h-[250px] p-5 rounded-lg">
            <h1 className="font-bold text-2xl text-[var(--textColor)] pb-10">
              Related Blogs
            </h1>
            {relatedBlog && relatedBlog.length ? (
              <div className="gird grid-cols-1">
                {relatedBlog.map((item: any, index: number) => (
                  <div className="flex items-center gap-5" key={index}>
                    <div className="w-[100px] h-[100px] relative">
                      <Image
                        className="rounded-lg"
                        src={item.image}
                        fill
                        alt=""
                      />
                    </div>
                    <h5 className="text-[var(--textColor)] text-lg font-semibold ">
                      {item.title}
                    </h5>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-[var(--textColor)]">
                  No Related Blog Available
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
