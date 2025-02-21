"use client"
import Signin from "@/components/Signin";
import { useSession } from "next-auth/react";
export default function Login() {
    const {data: session} = useSession()
    if(session) {
        return ("You are already signed in")
    }
    return <Signin/>
}