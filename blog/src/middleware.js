import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

// This will not interupt our api calls or static calls
export const config = {
    matcher : ['/((?!api|static|.*\\..*|_next).*)'],
}