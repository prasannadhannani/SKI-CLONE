import React from 'react';
import Image from 'next/image';

const Topbar = () => {
  return (
    <div className="text-[#6a6a6a] text-sm bg-white py-5 px-3 border-b border-[#2f2f2f]">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left side - Logos */}
        <div className="flex space-x-3 md:space-x-6 items-center h-12 md:h-20">
          <Image
            src="/Trane.png"
            alt="Logo 1"
            width={120}
            height={48}
            className="md:w-[200px] md:h-[80px]"
          />
          <div className="w-[120px] h-[48px] md:w-[200px] md:h-[80px] bg-gray-300 flex items-center justify-center text-xs md:text-sm text-gray-600">
            Logo 2
          </div>
        </div>
        {/* Right side - Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 md:space-x-6 gap-2 sm:gap-0">
          <button className="text-xs md:text-base bg-[#062a60] text-white px-4 md:px-10 py-2 md:py-5 hover:bg-[#ed7100] transition-colors rounded">
            Request an Estimate
          </button>
          <button className="text-xs md:text-base bg-[#ed7100] text-white px-4 md:px-10 py-2 md:py-5 hover:bg-[#062a60] transition-colors rounded">
            Schedule Quick Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
