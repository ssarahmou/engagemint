"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row h-screen font-inter-tight">
      {/* Clickable White Bar */}
      <div 
        ref={buttonRef}
        className={`w-[108px] h-full border-r-[2px] p-6 border-slate cursor-pointer transition-all duration-300 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}
        onClick={toggleSidebar}
      >
        <img src="https://i.imgur.com/y6hR1Cf.png" alt="Logo" />
      </div>

      {/* Sidebar */}
    
      <div 
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[400px] border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="font-semibold text-2xl mb-12">
          <Link href="/" className="text-2xl font-bold">
            Engagemint
          </Link>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>
        <Link href="/dashboard">
          <div className="font-semibold mt-5 text-2xl hover:bg-[#FAF7FC] p-6 text-gray-500 rounded-xl border-slate border-opacity-95">
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </Link>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] p-6 rounded-xl border-slate border-opacity-100">
          <Link href="/proposals" className="font-semibold">
            Proposals
          </Link>
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] p-6 rounded-xl border-slate border-opacity-100 mb-20">Notifications</div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        <Link href="/">
          <div className="font-semibold mt-5 text-2xl bg-[#FAF7FC] text-black hover:bg-[#FAF7FC] p-6 rounded-xl border-slate border-opacity-100">Profile</div>
        </Link>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] p-6 rounded-xl border-slate border-opacity-100">Settings</div>
      </div>

     
      {/* Main Content */}
      <div className={`w-screen flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-[400px]' : 'ml-0'}`}>
        <div className={`w-full h-1/6 bg-gradient-to-l from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 font-semibold text-5xl justify-center flex flex-col transition-opacity duration-300`}>
          Engagemint
        </div>
        <div className="ml-12 mt-12 mb-5 underline text-gray-400 flex-col">
         
        </div>
        <div className="ml-12 text-6xl font-semibold flex flex-row text-black">
          <Link href="/">Profile</Link>
          
        </div>

        <div className="flex flex-row">
          <div className="flex-col flex"> 
            <div className="ml-20 mt-10 w-full flex-col flex mb-3">Achievement Progress</div>
            <div className="ml-16 transition-shadow duration-100 ease-in-out">
              <img 
                className="hover:shadow-xl rounded-3xl"
                src="https://i.imgur.com/d5bLLei.png" 
                alt="Achievement Progress" 
              />
            </div>
          </div>
          <div className="flex-col flex">
            <div className="ml-16 mt-10 mb-3">Collection</div>
            <div className="ml-16 hover:shadow-xl transition-shadow duration-100 w-auto ease-in-out">
              <img src="https://i.imgur.com/WLzjIbV.png" alt="Collection" />
            </div>
          </div>
        </div>
      </div>
    </div>
      )
  
}
