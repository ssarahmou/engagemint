import Image from "next/image";

export default function Home() {
  return (
    // Column on the left
    <div className="flex flex-row h-screen">
      <div className="w-[108px] h-full border-r-[2px] border-slate"></div>
        <div className="w-screen flex flex-col">
          <div className="w-full h-1/6 bg-gradient-to-r from-violet-200 to-pink-200 bg-white p-12 flex flex-col  font-semibold">
            Engagemint
          </div>
          <div className="ml-12 mt-12 mb-5 underline text-gray-400 flex-col stroke-[D9D9D9]">
            Dashboard
          </div>
          <div className="ml-12 text-6xl font-semibold flex flex-row">
            Profile
            <div className="ml-20 text-gray-400">Creator Profile</div>
          </div>
          <div className="ml-20 mt-12 flex-row flex w-full">Achievement Progress
            <div className="ml-96"> Hi</div>
          </div>
          

      </div>
      
      
    </div>

  )
}
