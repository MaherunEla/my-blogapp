import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProviders from "next-auth/providers/github";
const authOptions: AuthOptions = {
  providers: [
    GithubProviders({
      clientId: "Iv1.c4e3a608069d14bf",
      clientSecret: "fe7d74782b8294945a0c33250be64e1fb40208f1",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);
      session.user.name = `${session?.user?.name}_${token?.sub}`;
      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);
export { nextAuth as GET, nextAuth as POST };
