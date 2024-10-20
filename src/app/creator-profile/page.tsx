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
          <Link href="/dashboard">
              Dashboard
            </Link>
          </div>
          <div className="ml-12 text-6xl font-semibold flex flex-row text-gray-400">
          <Link href="/">
              Profile
            </Link>
            
            <div className="ml-20 text-black ">
            <Link href="/creator-profile">
              Creator Profile
            </Link>
            </div>
          </div>

          <div className="flex flex-row">

            <div className="flex-col flex">
              <div className="ml-16 mt-10 mb-3"> Collection</div>
              <div className="ml-16 transition-shadow duration-100 ease-in-out">
                <img 
                  className="hover:shadow-xl rounded-3xl"
                  src="https://i.imgur.com/8AHPJsi.png" 
                  alt="Img"/>
              </div>
            </div>
            <div className="flex-row flex ml-8 w-full">
              <div className="ml-16 mt-10 mb-3"> Browse other Creators</div>
              <div className="ml-16 transition-shadow duration-100 ease-in-out w-full h-full flex">
                {/* First Image */}
                <div className="relative group">
                  <img 
                  
                    src="https://i.imgur.com/imp7XE1.png" 
                    alt="AI Chat History 1" 
                    className="h-full w-[400px] rounded-3xl border-gray-100 border-[3px] object-cover transition duration-300 ease-in-out group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <span className="text-white text-lg font-semibold">Bronze Bruno Mars Fan</span>
                  </div>
                </div>

                {/* Second Image */}
                <div className="relative group">
                  <img 
                    src="https://i.imgur.com/Q309eMP.png" 
                    alt="AI Chat History 2" 
                    className="h-full w-[400px] rounded-3xl border-gray-100 border-[3px] object-cover transition duration-300 ease-in-out group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <span className="text-white text-lg font-semibold">Platinum Taylor Swift Fan</span>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
            </div>
          </div>

      
      
  )
}
