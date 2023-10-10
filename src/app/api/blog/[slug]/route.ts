import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(slug),
      },
    });
    console.log(post);
    return new NextResponse(JSON.stringify({ post, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
