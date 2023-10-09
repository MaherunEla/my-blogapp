import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const post = await prisma.post.findMany();
    return new NextResponse(JSON.stringify({ post, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong!", status: 500 })
    );
  }
};

export const POST = async ()=> {
    try{
        const post= await prisma.post.create({
            
        })
    }

}