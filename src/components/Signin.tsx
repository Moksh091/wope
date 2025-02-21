import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#15151f] flex flex-col justify-center items-center h-screen text-white">
      <div className="bg-[#1b1b24] h-80 w-[25rem] rounded-2xl">
        <div className="flex justify-center text-xl py-4">Login to Wope</div>
        <div
          className="border border-[#2c2c34] rounded-lg mx-8 py-2 flex justify-center items-center cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="size-5 mr-2" /> Continue with google
        </div>
        <div className="mx-8 my-8">
          <div>Email address</div>
          <div className="mt-1">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="eg@mail.com"
              className="outline-hidden pl-4 border border-[#2c2c34] rounded-lg py-2 w-full bg-[#202029]  "
            />
          </div>
        </div>
        <div className="mx-8">
          <Button onClick={() => signIn("email", { email })} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
