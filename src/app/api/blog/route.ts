import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
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

export const POST = async (req: any) => {
  try {
    const body = await req.json();

    const posts = await prisma.post.create({
      data: { ...body },
    });
    console.log(posts);
    return new NextResponse(JSON.stringify({ posts, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong", status: 200 })
    );
  }
};

export const DELETE = async (req: NextResponse) => {
  try {
    const url = new URL(req.url);
    const Deleteblogid = url.searchParams.get("id");

    const deletepost = await prisma.post.delete({
      where: {
        id: Number(Deleteblogid),
      },
    });
    return new NextResponse(JSON.stringify({ deletepost, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong", status: 200 })
    );
  }
};

export const PUT = async (req: NextResponse) => {
  try {
    const extractData = await req.json();
    const updatedBlogPost = await prisma.post.update({
      where: {
        id: Number(extractData.id),
      },
      data: {
        comments: extractData.comments,
      },
    });
    return new NextResponse(JSON.stringify({ updatedBlogPost, status: 200 }));
  } catch (e) {
    console.log(e);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong", status: 200 })
    );
  }
};
