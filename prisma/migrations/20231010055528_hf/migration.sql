/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `commentId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userid` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userimage` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_commentauthorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_commentId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "commentId",
ADD COLUMN     "comments" TEXT[],
ADD COLUMN     "userid" TEXT NOT NULL,
ADD COLUMN     "userimage" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "User";
