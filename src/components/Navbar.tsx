"use client"
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { signOut, useSession } from "next-auth/react";

export default  function Navbar() {
  const { data: session} = useSession();

  if(session) {
    return <div>
      already signed in 
      <button onClick={() => signOut()}>Sign out</button>
      
    </div>
  }
  
  return (
    <div className=" bg-transparent w-full absolute top-0 z-50 pt-4 text-white ">
      <div className="flex justify-between mx-8 items-center border-b border-b-gray-500 pb-4">
        <div>Logo</div>
        <div className="text-[#b3afba] space-x-16">
          <button>
            <Link href={"/"}>Home</Link>
          </button>
          <button>Products</button>
          <button>Resources</button>
          <button>Contact Us</button>
        </div>
        <div className="flex gap-8 text-[#dad9dd] ">
          <button>Log In</button>
          <Button className="border border-gray-600 px-3 py-1 text-sm rounded-full">
            <Link href={"/signin"}>Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
