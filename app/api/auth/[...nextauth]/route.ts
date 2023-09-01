import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";

// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
