import Link from "next/link";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen flex flex-row">
      <div className="w-1/2 h-screen">
        <div className="flex ml-52 text-5xl flex-col mt-80 mb-4">Welcome back</div>
        <div className="flex ml-52 mt-2 flex-col text-xl mb-12 text-gray-400">Log into your accounts to view your engagemints.</div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ml-52 mt-2">
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input type="email" id="email" placeholder="Email" className="shadow-md text-lg flex-grow p-6 w-full"/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ml-52 mt-8">
          <Label htmlFor="password" className="text-lg">Password</Label>
          <Input type="password" id="password" placeholder="********" className="shadow-md text-lg flex-grow p-6 w-full"/>
          <div className="ml-auto text-gray-400">
          Forgot password?
          </div>
          
        </div>
        <Link href="/dashboard"><div><Button variant="secondary" className="bg-[#CCD7FA] flex ml-52 mt-12 text-xl p-6">Sign in</Button></div></Link>
      </div>
      <div className="w-1/2 h-screen bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white">
        <div className="flex flex-col">
          <div className="ml-64 mt-96 text-6xl">
            Activate the ultimate engagement protocol:
          </div>
          <div className="ml-64 mt-8 text-gray-400 text-2xl">
            Earn, tokenize, and unlock exclusive rewards!
          </div>
        </div>
      </div>
    </div>
  );
}
