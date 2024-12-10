import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

export const { GET, POST } = NextAuth(authOptions);
