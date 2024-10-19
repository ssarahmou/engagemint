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
      <div className="w-[400px] h-full flex flex-col border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12">
        <div className="font-semibold text-2xl mb-12">Engagemint</div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>
        <div className="font-semibold text-black mt-5 text-2xl bg-[#FAF7FC] p-6 rounded-xl border-[2px] border-slate border-opacity-95">Dashboard</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-slate border-opacity-100">Collection</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-slate border-opacity-100">Proposals</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-slate border-opacity-100 mb-20">Notifications</div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-opacity-100">Dashboard</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-slate border-opacity-100">Profile</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl p-5 rounded-xl border-slate border-opacity-100">Settings</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
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
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
            
        </div>
        <div className="pt-8 ml-16 w-11/12">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
