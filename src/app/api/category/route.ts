import prisma from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const postCategory = await prisma.post.findMany({
      where: {
        category: categoryId || "",
      },
    });
    console.log({ postCategory });
    return new NextResponse(JSON.stringify({ postCategory, status: 200 }));
  } catch (e) {
    console.log(e);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong", status: 200 })
    );
  }
}
