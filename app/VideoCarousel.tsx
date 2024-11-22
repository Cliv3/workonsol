"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (videos.length === 0) {
    return (
      <div className="bg-blue-400 rounded-lg h-[410px] flex items-center justify-center">
        <p className="text-white">No videos available</p>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative group">
      <div className=" rounded-lg h-auto shadow-lg overflow-hidden">
        <div className="aspect-video relative">
          <video
            controls
            key={videos[currentIndex]}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videos[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {videos.length > 1 && (
        <>
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-2 -translate-y-1/2 
            bg-white/50 p-2 rounded-full 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
          >
            <ChevronLeft className="text-black" />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-2 -translate-y-1/2 
            bg-white/50 p-2 rounded-full 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
          >
            <ChevronRight className="text-black" />
          </button>
        </>
      )}
    </div>
  );
};

export default VideoCarousel;