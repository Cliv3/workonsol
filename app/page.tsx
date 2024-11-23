// "use client"
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Navbar from './Navbar';
// import VideoCarousel from './VideoCarousel';
// import { useScrollAnimation } from './ScrollAnimation';

// // Cursor Radiance Component

// export default function Home() {
//   useScrollAnimation();
//   const [copied, setCopied] = useState(false);
//   const contractAddress = 'FMWRBWhr49k3JtPBhYT5mGXayvXJkpsuTaodzjTRpump';

//   const videoList = [
//     '/work1.mp4',
//     '/work2.mp4',
//     // Add more videos from your public folder as needed
//   ];

//   const handleCopy = () => {
//     navigator.clipboard.writeText(contractAddress);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };
//   return (
//     <div className="min-h-screen text-gray-800 font-[family-name:var(--font-geist-mono)]">
//       <CursorRadiance />
//       <Navbar />

//       <header id="home" className="container mx-auto px-4 py-12 pt-32">
//         <h1 className="text-6xl font-bold mb-6 text-blue-400 text-center">$WORK</h1>
//         <p className="text-2xl mb-12 text-white text-center">
//           WHILE THE OTHERS ARE TRYING TO GET RICH QUICK, $WORK FOR YOUR BAGS, $WORK FOR YOUR FUTURE.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 mb-12 scroll-animate">
//           <VideoCarousel videos={videoList} />

//           <div className="rounded-lg shadow-lg w-full">
//             <div className="relative w-full h-[410px] pt-[56.25%]">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
//                 src="https://dexscreener.com/solana/9ng9PmgS2LaQjou7SpuzYi21qUMmWCGrnMYmmBEj8wBZ?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
//                 title="DEXScreener Chart"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <div className="flex gap-4">
//             <Link href="https://dexscreener.com/solana/9ng9pmgs2laqjou7spuzyi21qummwcgrnmymmbej8wbz">
//               <button className="bg-blue-400 hover:bg-blue-200 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-110 w-full sm:w-auto">
//                 <p className="text-white">Buy $WORK</p>
//                 <span className="text-xl text-white">→</span>
//               </button>
//             </Link>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex items-center bg-blue-400 h-[52px] px-4 py-3 rounded-lg gap-2 w-full sm:w-">
//               <p className="text-white truncate flex-grow">CA: {contractAddress.slice(0, 7)}...</p>
//               <button
//                 onClick={handleCopy}
//                 className="bg-gray-500 hover:bg-blue-500 text-white px-3 py-1 rounded-md transition-all duration-300"
//               >
//                 {copied ? 'Copied!' : 'Copy'}
//               </button>
//             </div>
//           </div>
          
//           <div className="flex gap-4">
//             <Link href="https://x.com/Work_CTO" className="bg-blue-400 hover:bg-blue-200 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
//               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
//                 <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
//               </svg>
//             </Link>
//             <Link href="https://www.instagram.com/workonsolana/" className="bg-blue-400 hover:bg-blue-200 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
//               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </Link>
//             <Link href="#" className="bg-blue-400 hover:bg-blue-200 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
//               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
//                 <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
//               </svg>
//             </Link>
//             <Link href="https://t.me/HowToMakeMoneyCTOwork" className="bg-blue-400 hover:bg-blue-200 p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
//               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.5 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .21z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <section id="why-work" className="bg-blue-600/10 py-12 scroll-animate">
//         <h2 className="text-4xl text-white font-bold text-center mb-12">Why Choose $WORK?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-blue-400 p-6 rounded-lg text-center backdrop-blur-sm scroll-animate">
//             <div className="flex justify-center mb-4">
//               <span className="text-white text-4xl">🚀</span>
//             </div>
//             <h3 className="text-xl text-white font-bold mb-2">Moon Through Hard Work</h3>
//             <p className="text-white">No shortcuts. Pure grind. Real gains.</p>
//           </div>
//           <div className="bg-blue-400 p-6 rounded-lg text-center backdrop-blur-sm scroll-animate">
//             <div className="flex justify-center mb-4">
//               <span className="text-white text-4xl">⏰</span>
//             </div>
//             <h3 className="text-xl text-white font-bold mb-2">24/7 Grinding</h3>
//             <p className="text-white">While others sleep, we build wealth. Join the community dedicated to hustling in the trenches.</p>
//           </div>
//           <div className="bg-blue-400 p-6 rounded-lg text-center backdrop-blur-sm scroll-animate">
//             <div className="flex justify-center mb-4">
//               <span className="text-white text-4xl">💰</span>
//             </div>
//             <h3 className="text-xl text-white font-bold mb-2">Tokenomics</h3>
//             <p className="text-white">LP Burned, 500+ Holders and Growing</p>
//           </div>
//         </div>
//       </section>

//       {/* Roadmap Section */}
//       <section id="roadmap" className="container mx-auto px-4 py-20 scroll-animate">
//         <h2 className="text-4xl font-bold text-center mb-12 text-white">THE PATH OF PAIN</h2>
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-8">
//             {/* Phase 1 */}
//             <div className="bg-blue-400 p-6 rounded-lg shadow-lg border-l-4 border-blue-600 scroll-animate">
//               <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
//                 <span className="text-2xl">💪</span> Phase 1: Break Your Limitations
//               </h3>
//               <ul className="space-y-2 text-white">
//                 <li>• Launch $WORK with maximum pain</li>
//                 <li>• Build the hardest community</li>
//                 <li>• Initial marketing push (GET AFTER IT)</li>
//                 <li>• First 1,000 holders (NO EXCUSES)</li>
//               </ul>
//             </div>

//             {/* Phase 2 */}
//             <div className="bg-blue-400 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
//               <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
//                 <span className="text-2xl">🏃</span> Phase 2: Callus The Mind
//               </h3>
//               <ul className="space-y-2 text-white">
//                 <li>• Community challenges & competitions</li>
//                 <li>• Workout tracking integration</li>
//                 <li>• Reward system for the grinders</li>
//                 <li>• Partnership with gyms & fitness brands</li>
//               </ul>
//             </div>

//             {/* Phase 3 */}
//             <div className="bg-blue-400 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
//               <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
//                 <span className="text-2xl">🚀</span> Phase 3: Take Souls
//               </h3>
//               <ul className="space-y-2 text-white">
//                 <li>• Expansion to major exchanges</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer with Social Links */}
//       <footer className="container mx-auto px-4 py-8">
//         <div className="flex justify-center gap-6 mb-4">
//           <Link href="https://x.com/Work_CTO" className="text-white hover:text-blue-200">Twitter</Link>
//           <Link href="https://www.instagram.com/workonsolana/" className="text-white hover:text-blue-200">Instagram</Link>
//           <Link href="#" className="text-white hover:text-blue-200">TikTok</Link>
//           <Link href="https://t.me/HowToMakeMoneyCTOwork" className="text-white hover:text-blue-200">Telegram</Link>
//         </div>
//         <p className="text-center text-white font-bold">ARE YOU READY TO $WORK FOR YOUR BAGS? DO YOU HAVE WHAT IT TAKES?</p>
//         <p className="text-center text-white">© 2024 $WORK Token. STAY HARD.</p>
//       </footer>
//     </div>
//   );
// }



"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from './Navbar';
import VideoCarousel from './VideoCarousel';


const CursorRadiance = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseTimeout: NodeJS.Timeout;

    const updatePosition = (e: MouseEvent) => {
      // Add slight delay to smoothen movement
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 5); // Small delay for smoother movement
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mouseTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 mix-blend-screen will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), left 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)'
      }}
    >
      <div className="relative">
        {/* Outermost glow - very subtle and large */}
        <div 
          className="absolute rounded-full opacity-30"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Middle glow layer */}
        <div 
          className="absolute rounded-full opacity-50"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Inner glow - more intense */}
        <div 
          className="absolute rounded-full opacity-70"
          style={{
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)'
          }}
        />

        {/* Core glow */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 1) 0%, rgba(147, 197, 253, 0.5) 50%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(2px)'
          }}
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const contractAddress = 'FMWRBWhr49k3JtPBhYT5mGXayvXJkpsuTaodzjTRpump';
  const sectionsRef = useRef([]);

  const videoList = [
    '/work1.mp4',
    '/work2.mp4',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    {
      id: 'home',
      content: (
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-7xl lg:text-8xl font-bold text-blue-400 animate-fade-in">$WORK</h1>
              <p className="text-xl lg:text-2xl text-white max-w-2xl animate-fade-in-delayed">
                WHILE THE OTHERS ARE TRYING TO GET RICH QUICK, $WORK FOR YOUR BAGS, $WORK FOR YOUR FUTURE.
              </p>
              <div className="flex flex-col gap-4 animate-fade-in-delayed">
                <Link href="https://dexscreener.com/solana/9ng9pmgs2laqjou7spuzyi21qummwcgrnmymmbej8wbz">
                  <button className="bg-blue-400 hover:bg-blue-200 px-12 py-4 rounded-full font-bold text-xl flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-110 w-full sm:w-auto">
                    <p className="text-white">Buy $WORK</p>
                    <span className="text-2xl text-white">→</span>
                  </button>
                </Link>
                <div className="flex items-center justify-between bg-blue-400/50 backdrop-blur-sm px-6 py-3 rounded-lg gap-4 w-full sm:w-auto">
                  <p className="text-white">CA: {contractAddress.slice(0, 24)}...</p>
                  <button
                    onClick={handleCopy}
                    className="bg-blue-500/50 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <VideoCarousel videos={videoList} />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'chart',
      content: (
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-[600px] border-0"
                src="https://dexscreener.com/solana/9ng9PmgS2LaQjou7SpuzYi21qUMmWCGrnMYmmBEj8wBZ?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="DEXScreener Chart"
              ></iframe>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      content: (
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-16">
            <h2 className="text-5xl text-white font-bold mb-16">Why Choose $WORK?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg transform transition-all duration-500 hover:scale-105">
                <span className="text-6xl mb-6 block">🚀</span>
                <h3 className="text-2xl text-white font-bold mb-4">Moon Through Hard Work</h3>
                <p className="text-white text-lg">No shortcuts. Pure grind. Real gains.</p>
              </div>
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg transform transition-all duration-500 hover:scale-105">
                <span className="text-6xl mb-6 block">⏰</span>
                <h3 className="text-2xl text-white font-bold mb-4">24/7 Grinding</h3>
                <p className="text-white text-lg">While others sleep, we build wealth. Join the community dedicated to hustling in the trenches.</p>
              </div>
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg transform transition-all duration-500 hover:scale-105">
                <span className="text-6xl mb-6 block">💰</span>
                <h3 className="text-2xl text-white font-bold mb-4">Tokenomics</h3>
                <p className="text-white text-lg">LP Burned, 500+ Holders and Growing</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'roadmap',
      content: (
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-16">
            <h2 className="text-5xl text-white font-bold mb-16">THE PATH OF PAIN</h2>
            <div className="space-y-8 max-w-4xl">
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg border-l-4 border-blue-400 transform transition-all duration-500 hover:translate-x-4">
                <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">💪</span> Phase 1: Break Your Limitations
                </h3>
                <ul className="space-y-3 text-white text-lg">
                  <li>• Launch $WORK with maximum pain</li>
                  <li>• Build the hardest community</li>
                  <li>• Initial marketing push (GET AFTER IT)</li>
                  <li>• First 1,000 holders (NO EXCUSES)</li>
                </ul>
              </div>
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg border-l-4 border-blue-400 transform transition-all duration-500 hover:translate-x-4">
                <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏃</span> Phase 2: Callus The Mind
                </h3>
                <ul className="space-y-3 text-white text-lg">
                  <li>• Community challenges & competitions</li>
                  <li>• Workout tracking integration</li>
                  <li>• Reward system for the grinders</li>
                  <li>• Partnership with gyms & fitness brands</li>
                </ul>
              </div>
              <div className="bg-blue-400/20 backdrop-blur-md p-8 rounded-lg border-l-4 border-blue-400 transform transition-all duration-500 hover:translate-x-4">
                <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span> Phase 3: Take Souls
                </h3>
                <ul className="space-y-3 text-white text-lg">
                  <li>• Expansion to major exchanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-[family-name:var(--font-geist-mono)]">
      {/* Base background with multiple subtle gradients */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
        
        {/* Subtle blue accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
        
        {/* Additional depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-800/5 to-transparent"></div>
        
        {/* Optional: Very subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]"></div>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Navigation Dots */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-4">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  activeSection === index ? 'bg-blue-400 w-6' : 'bg-white/50 hover:bg-white'
                }`}
                onClick={() => {
                  sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={el => sectionsRef.current[index] = el}
            className="snap-start"
          >
            {section.content}
          </section>
        ))}

        {/* Social Links */}
        <div className="fixed bottom-8 left-8 z-50">
          <div className="flex gap-6">
            <Link href="https://x.com/Work_CTO" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
            </Link>
            <Link href="https://t.me/HowToMakeMoneyCTOwork" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.5 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .21z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}