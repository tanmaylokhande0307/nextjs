import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        userName: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "pass" },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "userId1",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST }

