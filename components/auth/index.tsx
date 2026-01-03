import Button from "@/ui/button";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={450}
          height={450}
          className="justify-self-end"
        />

        <div className="flex flex-col justify-between h-[70vh]">
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-[60%]">
            <h2 className="text-bold text-3xl mb-4">Joing today.</h2>
            <div className="flex flex-col space-y-2">
              <Button label={
                <div className="flex gap-2 items-center justify-center">
                  <FcGoogle />
                  Sign up with Google
                </div>
              } fullwidth secondary />
              <Button label="Sign up with Github" fullwidth secondary />
              <p>or</p>
              <button>Create account</button>
            </div>
          </div>
          <div className="w-[60%]">
            <h3 className="font-medium text-xl mb-4">
              Already have an account?
            </h3>
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}
