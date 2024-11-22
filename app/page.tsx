// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 text-gray-800">
    {/* Hero Section - Video and Meme Side by Side */}
    <header className="container mx-auto px-4 py-12">
      <h1 className="text-6xl font-bold mb-6 text-blue-600 text-center">$WORK</h1>
      <p className="text-2xl mb-12 text-amber-800 text-center">STAY HARD. CARRY THE BOAT.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4">
            <p className="font-bold text-amber-800">WHO'S GONNA CARRY THE BOATS?</p>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full w-full p-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full md:w-full md:h-[400px] border-0 rounded-lg"
              src="https://dexscreener.com/solana/9ng9PmgS2LaQjou7SpuzYi21qUMmWCGrnMYmmBEj8wBZ?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              title="DEXScreener Chart"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-purple-900 hover:bg-purple-800 px-8 py-3 rounded-full font-bold flex items-center gap-2">
          Buy $WORK <span className="text-xl">→</span>
        </button>
        <div className="flex gap-4">
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-3 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-3 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-3 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-3 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.5 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .21z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>

    {/* Stats Section */}
    <section className="bg-blue-600/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-amber-50/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-2">0400</h3>
            <p className="text-blue-600">Daily Wake-Up</p>
          </div>
          <div className="text-center bg-amber-50/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-blue-600">Mental Fortitude</p>
          </div>
          <div className="text-center bg-amber-50/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-blue-600">Stay Hard</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">CHART YOUR GRIND</h2>
        <div className="max-w-6xl mx-auto bg-amber-50/80 p-6 rounded-lg shadow-lg">
          <style dangerouslySetInnerHTML={{ __html: `
            #dexscreener-embed{
              position:relative;
              width:100%;
              padding-bottom:125%;
            }
            @media(min-width:1400px){
              #dexscreener-embed{
                padding-bottom:65%;
              }
            }
            #dexscreener-embed iframe{
              position:absolute;
              width:50%;
              height:50%;
              top:0;
              left:0;
              border:0;
              border-radius: 0.5rem;
            }
          `}} />
          <div className="relative w-full pb-[125%] md:pb-[65%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full md:w-[368px] md:h-[420px] border-0 rounded-lg"
              src="https://dexscreener.com/solana/9ng9PmgS2LaQjou7SpuzYi21qUMmWCGrnMYmmBEj8wBZ?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              title="DEXScreener Chart"
            ></iframe>
          </div>
        </div>
        </section>

    {/* Roadmap Section */}
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">THE PATH OF PAIN</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="bg-amber-50/80 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💪</span> Phase 1: Break Your Limitations
            </h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Launch $WORK with maximum pain</li>
              <li>• Build the hardest community</li>
              <li>• Initial marketing push (GET AFTER IT)</li>
              <li>• First 1,000 holders (NO EXCUSES)</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-amber-50/80 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏃</span> Phase 2: Callus The Mind
            </h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Community challenges & competitions</li>
              <li>• Workout tracking integration</li>
              <li>• Reward system for the grinders</li>
              <li>• Partnership with gyms & fitness brands</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-amber-50/80 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span> Phase 3: Take Souls
            </h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Launch $WORK motivation app</li>
              <li>• Global fitness events</li>
              <li>• Charity initiatives (GIVE BACK)</li>
              <li>• Expansion to major exchanges</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Footer with Social Links */}
    <footer className="container mx-auto px-4 py-8">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-purple-400 hover:text-purple-300">Twitter</a>
        <a href="#" className="text-purple-400 hover:text-purple-300">Instagram</a>
        <a href="#" className="text-purple-400 hover:text-purple-300">TikTok</a>
        <a href="#" className="text-purple-400 hover:text-purple-300">Telegram</a>
      </div>
      <p className="text-center text-amber-800 font-bold">WHO'S GONNA CARRY THE BOATS AND THE LOGS?</p>
      <p className="text-center text-amber-800">© 2024 $WORK Token. STAY HARD.</p>
    </footer>
  </div>
  );
}
