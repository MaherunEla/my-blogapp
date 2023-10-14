import prisma from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query");
    const postlist = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: { contains: query || "" },
          },
          {
            description: {
              contains: query || "",
            },
          },
        ],
      },
    });
    return new NextResponse(JSON.stringify({ postlist, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing Went wrong", status: 200 })
    );
  }
};
