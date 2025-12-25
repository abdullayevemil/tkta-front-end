import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";

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

      credentials: {
        email: { type: "email" },
      },

      async authorize(credentials) {
        if (!credentials?.email) return null;

        const response = await axios.get(
          `${process.env.NEXTAUTH_URL}/api/users?email=${credentials.email}`
        );

        let user = response.data[0];

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
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
