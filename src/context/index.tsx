"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";
import { Blog, BlogFormData } from "@/utils/types";
import { initialBlogFormData } from "@/utils";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

type ContextType = {
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResult: Blog[];
  setSearchResult: Dispatch<SetStateAction<Blog[]>>;
};

const initialState = {
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResult: [],
  setSearchResult: () => {},
};

export const GlboalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState(initialBlogFormData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Blog[]>([]);
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  if (session === null && pathname === "/create") router.push("/");

  return (
    <GlboalContext.Provider
      value={{
        formData,
        setFormData,
        searchQuery,
        setSearchQuery,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </GlboalContext.Provider>
  );
}
