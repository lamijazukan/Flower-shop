"use client";
import Link from "next/link";
import { useState } from "react";

//icons import
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

//logo font
import { DM_Serif_Display } from "next/font/google";
const serifdisplay = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   const handleSearchClick = () => {
     setIsSearchOpen(!isSearchOpen);
   };
  return (
    <main>
      {isSearchOpen && (
        <div className="fixed h-[15%] w-full top-0 left-0 bg-gray-100 shadow-md z-10">
          <div className="text-center mt-3">
            <button
              className="text-2xl pr-4 float-right cursor-pointer"
              onClick={handleSearchClick}
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="py-3 px-4 text-lg font-rubik border-none border-b-2 w-5/6 bg-transparent outline-none"
            />
            <button className="py-3 px-4 text-lg font-rubik border-none border-b-2 cursor-pointer">
              <IoSearch className="" />
            </button>
          </div>
        </div>
      )}
      <div className="mt-9 ml-14 mr-14">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href={"/"} className={serifdisplay.className}>
              <h1 className="text-3xl text-[#F72F32] opacity-[0.85]">
                Flowers<span className="text-[#2C2929]">&Co.</span>
              </h1>
            </Link>
          </div>
          <div className="nav-links">
            <ul className="flex ">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/">SHOP</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/">ABOUT</Link>
              </li>
              <li>
                <Link href="/">ACCOUNT</Link>
              </li>
              <li>
                <Link href="/">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <button onClick={handleSearchClick}>
              <IoSearch className="text-lg pl-0" />
            </button>
            <button>
              <MdOutlineShoppingBag className="text-lg" />
            </button>
            <button>
              <FaRegUserCircle className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
