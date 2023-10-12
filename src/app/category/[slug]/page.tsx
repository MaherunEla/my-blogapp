import CategoryList from "@/app/Components/categorylist/CategoryList";
import React from "react";

async function getCategory(slug: string) {
  const res = await fetch(
    `http://localhost:3000/api/category?categoryId=${slug}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const { postCategory } = await res.json();
  console.log({ postCategory });
  return postCategory;
}
const page = async ({ params }: { params: any }) => {
  const { slug } = params;
  console.log({ slug });
  const getdata = await getCategory(slug);
  console.log({ getdata });
  return <CategoryList list={getdata} />;
};

export default page;
