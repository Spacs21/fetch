import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 shadow-lg border-b border-[#cacaca5e]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between text-white h-[70px] items-center">
          <Link href={"/"} className="font-extrabold text-4xl hover:opacity-70 cursor-pointer transition-all duration-300">
            FORTNITE
          </Link>
          <ul className="flex gap-10 text-lg font-medium">
            <li className="group relative">
              <Link
                href="/"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative">
              <Link
                href="skins"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Skins
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative">
              <Link
                href="news"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                News
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative">
              <Link
                href="maps"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Maps
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
