"use client";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the search logic here, e.g., fetch results based on searchTerm
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full space-x-2 ml-auto "
    >
      <div className="flex-grow "></div>
      <Input
        type="text"
        placeholder="Search for a Reward..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-xl flex-grow py-12 rounded-full px-24 bg-gray-100" // Makes the input take available space and increases its thickness
      />
      <img src="https://i.imgur.com/XaJCpJN.png" className="absolute px-12 py-9"></img>
      <Button type="submit" className="absolute right-40 mt-4 py-8 px-16 rounded-full">Search</Button>
    </form>
  );
}

export default function Home() {
  const [position, setPosition] = useState("top");

  return (
    <div className="flex min-h-screen">
      <div className="w-[400px] h-screen flex flex-col border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 overflow-y-auto sticky top-0">
        <div className="font-semibold text-2xl mb-12">
          <Link href="/profile" className="text-2xl font-bold">
            Engagemint
          </Link>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>

        <div className="flex-row"> 
            <img src="https://i.imgur.com/sJHPQq6.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">
            <Link href="/dashboard" className="font-semibold">
                Dashboard
            </Link>
            </div>
        </div>
        
        <div className="flex-row"> 
            <img src="https://i.imgur.com/3Xxvo5v.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/proposals" className="font-semibold">
                Proposals
            </Link>
            </div>
        </div>

        <div className="flex-row">
            <img src="https://i.imgur.com/nEDdgaB.png" className="py-11 px-6 absolute"></img>
            <div className="font-semibold text-black mt-5 px-16 text-2xl bg-[#FAF7FC]  p-6 rounded-xl border-slate border-opacity-100 mb-20">
            <Link href="/redeem" className="font-semibold">
                Redeem
            </Link>
            </div>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        
        <div className="flex-row"> 
            <img src="https://i.imgur.com/hmuO9gS.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/profile" className="font-semibold">
                Profile
            </Link>
            </div>
        </div>

        <div className="flex-row"> 
            <img src="https://i.imgur.com/KrBuSA9.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/profile" className="font-semibold">
                Settings
            </Link>
            </div>
        </div>
      </div>

      <div className="flex-grow p-12 overflow-y-auto">
        <div className="font-semibold p-16 text-2xl w-full flex flex-row items-center">
          <div>Welcome, Kelly!</div>
          <Button variant = "outline" className="ml-auto pt-3 pl-8 pr-8 pb-3 rounded-full">
            1506 Em
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="pt-2 pl-16 mt-30 text-5xl font-semibold">
            Redeem
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="pl-16 mt-3 ml-2">
                <Button variant="outline" className="mr-4 text-lg">Filter
                  <img src="https://i.imgur.com/iSSFH8t.png" className="ml-2"></img>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort and Filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="Popular">
                  Popular
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Hot">Hot</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="New">New</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="pt-8 ml-16 w-11/12">
          <SearchInput />

            <div className="font-bold tracking-widest text-gray-400 mt-12">POPULAR</div>

          {/* ESPN */}
          <div className="flex pl-2 pt-6 space-x-8 mr-auto rounded-2xl">
            {/* Card 1 */}
            <div className="grid grid-cols-3 gap-4">
              <img src="https://i.imgur.com/Lg8JLlo.png" className="hover:shadow-md transition-shadow"></img>
              <img src="https://i.imgur.com/8IIsvp5.png" className="hover:shadow-md transition-shadow"></img>
              <img src="https://i.imgur.com/qp8493y.png" className="hover:shadow-md transition-shadow"></img>
              <img src="https://i.imgur.com/3VzHvav.png" className="hover:shadow-md transition-shadow"></img>
              <img src="https://i.imgur.com/qp8493y.png" className="hover:shadow-md transition-shadow"></img>
              <img src="https://i.imgur.com/Lg8JLlo.png" className="hover:shadow-md transition-shadow"></img>
            </div>
            <div>
              <Button variant="outline" className=" bg-[#B5E3FA] text-xl absolute py-[27px] px-[178px] left-[540px] top-[695px] rounded-full">
                Redeem
              </Button>
              <Button variant="outline" className=" bg-[#F5DDA6] text-xl absolute py-[27px] px-[178px] left-[1022px] top-[695px] rounded-full">
                Redeem
              </Button>
              <Button variant="outline" className=" bg-[#EED2E8] text-xl absolute py-[27px] px-[178px] left-[1504px] top-[695px] rounded-full">
                Redeem
              </Button>

              <Button variant="outline" className=" bg-[#C4E0E0] text-xl absolute py-[27px] px-[178px] left-[540px] top-[985px] rounded-full">
                Redeem
              </Button>
              <Button variant="outline" className=" bg-[#EED2E8] text-xl absolute py-[27px] px-[178px] left-[1022px] top-[985px] rounded-full">
                Redeem
              </Button>
              <Button variant="outline" className=" bg-[#B5E3FA] text-xl absolute py-[27px] px-[178px] left-[1504px] top-[985px] rounded-full">
                Redeem
              </Button>
            </div>
            </div>

            </div>
            </div>
            </div>


  )
}