import Link from 'next/link';

export default function Home() {
  return (
    // Profile
    <div className="flex flex-row h-screen font-inter-tight">
      <div className="w-[108px] h-full border-r-[2px] border-slate"></div>
        <div className="w-screen flex flex-col">
          <div className="w-full h-1/6 bg-gradient-to-l from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 font-semibold text-5xl justify-center flex flex-col">
            Engagemint
          </div>
          <div className="ml-12 mt-12 mb-5 underline text-gray-400 flex-col stroke-[D9D9D9]">
          <Link href="/proposals"> 
          Proposals</Link>
          <Link href="/dashboard">
              Dashboard
            </Link>
          </div>
          <div className="ml-12 text-6xl font-semibold flex flex-row ">
          <Link href="/">
              Profile
            </Link>
            
            <div className="ml-20 text-gray-400">
            <Link href="/creator-profile">
              Creator Profile
            </Link>
            </div>
          </div>

          <div className="flex flex-row">
            <div className = "flex-col flex"> 
          <div className="ml-20 mt-10 w-full flex-col flex mb-3">Achievement Progress</div>
            <div className="ml-16 transition-shadow duration-100 ease-in-out">
              <img 
              className="hover:shadow-xl rounded-3xl"
              src="https://i.imgur.com/d5bLLei.png" alt="Image description" />
            </div>
            
            
          </div>
          <div className="flex-col flex">
            <div className="ml-16 mt-10 mb-3"> Collection</div>
            <div className="ml-16 hover:shadow-xl transition-shadow duration-100 w-auto ease-in-out">
              <img src="https://i.imgur.com/3PgJzpL.png" alt="Img" />
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
      
  )
}
