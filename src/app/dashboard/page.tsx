"use client"

import Link from 'next/link';
import * as React from "react";
import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the search logic here, e.g., fetch results based on searchTerm
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full items-center space-x-2 ">
      <Input
        type="text"
        placeholder="Search for a Engagemint"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow" // Makes the input take available space
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default function Home() {
  const [position, setPosition] = useState('top');

  return (
    // Profile
    <div className="flex flex-row h-screen font-inter-tight">
      {/* Navbar */}
      <div className="w-[400px] h-full flex flex-col border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 fixed ">
        <div className="font-semibold text-2xl mb-12">Engagemint</div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>
        <div className="font-semibold text-black mt-5 text-2xl bg-[#FAF7FC] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">Dashboard</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Collection</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
          <Link href="/proposals" className="hover:underline font-semibold">
            Proposals
          </Link>
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100 mb-20">Notifications</div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-opacity-100">Dashboard</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Profile</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Settings</div>
      </div>
    
      {/* Main Content */}
      <div className="flex flex-col flex-grow ml-[400px]">
        <div className="font-semibold p-16 text-2xl w-full flex flex-row items-center">    
          <div>Welcome, Kelly!</div>
          <div className="ml-auto bg-[#6585C0] text-white pt-2 pl-8 pr-8 pb-2 rounded-full">15.06 ETH</div>
        </div>
        <div className="flex flex-row">
            <div className="pt-16 pl-16 mt-30 text-6xl font-semibold">Dashboard</div>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="pt-16 pl-16 mt-4">
            <Button variant="ghost" className="">
                <img src="https://i.imgur.com/iSSFH8t.png"></img>
            </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Media Platform</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Spotify">Spotify</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ESPN">ESPN</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Netflix">Netflix</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
            
        </div>
        <div className="pt-8 ml-16 w-11/12">
          <SearchInput />
        </div>
        <div className="pt-16 pl-20 font-bold text-gray-400 tracking-widest" >ESPN</div>
        <div className="pl-16">
            <img src="https://i.imgur.com/y0RLnx9.png"></img>
        </div>
        
        {/* ESPN */}
        <div className="flex pl-16 pt-6 space-x-8 mr-auto">
      {/* Card 1 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 ">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">NBA Frenzy</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 GAMES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 ">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">MLB Marathon</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 GAMES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">NFL Frenzy</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 GAMES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>
      

                  {/* Card 3 */}
                  <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Golf Grand Slam</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 ROUNDS WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

                  {/* Card 3 */}
                  <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>
      </div>
      <div className="pt-16 pl-20 font-bold text-gray-400 tracking-widest" >NETFLIX</div>
        <div className="pl-16 mb-[-10px]">
            <img src="https://i.imgur.com/sw72kwM.png"></img>
        </div>
        
        {/* ESPN */}
        <div className="flex pl-16 pt-6 space-x-8 mr-auto">
      {/* Card 1 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 mb-16">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 mb-16">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 mb-16">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>
      

                  {/* Card 3 */}
                  <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 mb-16">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>

                  {/* Card 3 */}
                  <div className="bg-[#FAF7FC] rounded-lg shadow-md p-4 mb-16">
        <div className="text-right text-[#6A8CCA] font-bold text-xl">+100 pts</div>
        <h2 className="mt-2 text-lg font-semibold">Soccer Showdown</h2>
        <p className="text-sm font-bold tracking-wider text-gray-500">100 MATCHES WATCHED ON ESPN</p>
        <div className="mt-4 bg-gray-200 h-32 rounded-md"></div>
        <button className="mt-4 w-full bg-[#6A8CCA] text-white py-2 rounded-md hover:bg-blue-700">
          Redeem Points
        </button>
      </div>
      
      </div>
        <div className="pl-16 font-semibold text-xl underline">
        Load More
        </div>
        <div className="pt-16 pl-20 font-bold text-gray-400 tracking-widest" > </div>
        <div className="pl-16 mb-12 justify-center item-center">
            
        </div>

      </div>
      
      </div>

)
}