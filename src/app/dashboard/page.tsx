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
    <form onSubmit={handleSearch} className="flex w-full space-x-2 ml-auto ">
      <div className="flex-grow "></div>
      <Input
        type="text"
        placeholder="Search for a Engagemint..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-xl flex-grow py-12 rounded-full px-24 bg-gray-100" // Makes the input take available space and increases its thickness
      />
      <img
        src="https://i.imgur.com/XaJCpJN.png"
        className="absolute px-12 py-9"
      ></img>
      <Button
        type="submit"
        className="absolute right-40 mt-4 py-8 px-16 rounded-full"
      >
        Search
      </Button>
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
            <img src="https://i.imgur.com/9E8IMIS.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-black px-16 mt-5 text-2xl bg-[#FAF7FC] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">
            Dashboard
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
            <img src="https://i.imgur.com/hNht7Bf.png" className="py-11 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 mt-5 px-16 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100 mb-20">
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
          <Button
            variant="outline"
            className="ml-auto pt-3 pl-8 pr-8 pb-3 rounded-full"
          >
            15.06 ETH
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="pt-16 pl-16 mt-30 text-6xl font-semibold">
            Dashboard
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="pt-16 pl-16 mt-4 ml-2">
                <Button variant="outline" className="mr-4 text-lg">
                  Filter
                  <img
                    src="https://i.imgur.com/iSSFH8t.png"
                    className="ml-2"
                  ></img>
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

          <div className="font-bold tracking-widest text-gray-400 mt-12">
            POPULAR
          </div>

          {/* ESPN */}
          <div className="flex pl-2 pt-6 space-x-8 mr-auto">
            {/* Card 1 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                2B Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Taylor Swift</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                MOST POPULAR ARTIST
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/iXH97hN.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                1.7B Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Olivia Rodrigo</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                MOST POPULAR ARIST
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/PtxmXgS.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                1B Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Bruno Mars</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                MOST POPULAR ARTIST
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/EwK364V.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                927K Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Katy Perry</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                MOST POPULAR ARTIST
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/fmxinXe.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* ESPN */}
          <div className="flex pl-2 pt-6 space-x-8 mr-auto">
            {/* Card 1 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 mb-16 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                862k Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Travis Scott</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                POPULAR RAP
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/QxwUoZ1.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 mb-16 min-w-[300px]">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                512k Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Sabrina Carpenter</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                POPULAR POP
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/KNej5VG.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md p-4 min-w-[300px] mb-16">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                635k Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Drake</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                POPULAR HIP HOP
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/f4vWY2Y.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefdff] rounded-lg shadow-md min-w-[300px] p-4 mb-16">
              <div className="text-right text-[#6A8CCA] font-bold text-xl">
                263k Em
              </div>
              <h2 className="mt-2 text-lg font-semibold">Daft Punk</h2>
              <p className="text-sm font-bold tracking-wider text-gray-500">
                POPULAR HOUSE
              </p>
              <div className="mt-4 bg-gray-200 h-32 rounded-md">
                <img src="https://i.imgur.com/gbE3Em8.png"></img>
              </div>
              <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
          <div className="pl-6 font-semibold text-xl underline">Load More</div>
          <div className="pt-16 pl-20 font-bold text-gray-400 tracking-widest">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
