import React, { useContext } from "react";
import { GlboalContext } from "@/context";
const Page = () => {
  const { searchQuery, setSearchQuery, searchResult, setSearchResult } =
    useContext(GlboalContext);

  async function getsearchpost(query: string) {}
  async function handleSearch() {
    getsearchpost(searchQuery);
  }

  return (
    <div>
      <div>
        <h1>Search any blog post</h1>
        <form>
          <input
            type="text"
            id="title"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="New"
          />
        </form>
        <button onClick={handleSearch}></button>
      </div>
    </div>
  );
};

export default Page;
