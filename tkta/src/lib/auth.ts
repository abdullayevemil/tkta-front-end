import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};
        const response = await axios.get(
          `${process.env.NEXTAUTH_URL}/api/users?email=${email}`
        );
        const user = response.data[0];

        if (user?.password === password) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null;
      },
    }),
    CredentialsProvider({
      id: "sso",
      name: "SSO",
      credentials: { token: { type: "text" } },
      async authorize(credentials) {
        const token = credentials?.token;
        if (!token) return null;

        let payload: { email: string };
        try {
          payload = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any;
        } catch {
          return null;
        }

        const email = payload.email;
        if (!email) return null;

        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/users?email=${email}`
        );
        const user = (await res.json())[0];
        if (!user) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/authentication/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
