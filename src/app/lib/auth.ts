import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { AuthOptions, Session } from "next-auth";
import { sendVerificationRequest } from "./sendEmail";
import { prisma } from ".";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Email({
        server: {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        },
        from: process.env.EMAIL_FROM,
        sendVerificationRequest,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        //@ts-expect-error id error
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    // signIn: '/signin',
  }
};
