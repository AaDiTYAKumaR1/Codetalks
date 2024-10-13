"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  const navRef = useRef(null);
  const btnRef = useRef(null);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className="bg-amber-500 border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="main-container max-w-7xl px-5 mx-auto flex items-center justify-between h-full w-full gap-x-6">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/profile-img.png"
              alt="medium"
              width={96}
              height={48}
              className="cursor-pointer rounded-lg border-2 border-black p-1 "
            />
            <h2 className="text-2xl md:text-4xl font-bold">CodeTalks</h2>
          </Link>
        </div>

        <div className="hidden md:block">
          <LoadingBar
            color="#121212"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/" className="text-xl hover:bg-black hover:text-white p-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-xl hover:bg-black hover:text-white p-4">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-xl hover:bg-black hover:text-white p-4">
                News
              </Link>
            </li>
            <li>
              <Link href="/newBlog" className="text-xl hover:bg-black hover:text-white p-4">
                Write
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <button ref={btnRef} className="text-xl hover:bg-black hover:text-white p-4">
                  Profile
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {!isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-500 text-white">
          <Link href="/" className="block p-4 hover:bg-black hover:text-white">
            Home
          </Link>
          <Link href="/blogs" className="block p-4 hover:bg-black hover:text-white">
            Blog
          </Link>
          <Link href="/news" className="block p-4 hover:bg-black hover:text-white">
            News
          </Link>
          <Link href="/newBlog" className="block p-4 hover:bg-black hover:text-white">
            Write
          </Link>
          <Link href="/profile" className="block p-4 hover:bg-black hover:text-white">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
