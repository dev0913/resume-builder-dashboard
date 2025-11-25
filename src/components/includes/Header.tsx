
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu, MoveRightIcon, X } from "lucide-react"; // Icons for hamburger menu
import { useUser } from "@clerk/nextjs";

function Header() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for mobile menu toggle

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const { user } = useUser()

  // Add this function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });


      if (isOpen) setIsOpen(false);
    } else {

      window.location.href = `/${targetId === 'home' ? '' : '#' + targetId}`;
    }
  };

  const router = useRouter();



  return (
    <div className="bg-black text-white font-[archivo] px-5 sticky top-0 z-30 opacity-95">
      <div className="flex justify-between items-center w-full m-auto py-4">

        {/* Logo Section */}
        <div className="cursor-pointer">
          <img src="/images/logo.png" alt="Logo" className="w-32 lg:w-44" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center text-sm lg:text-base md:gap-4 lg:gap-6">
            {pathName === "/" ? (
              <>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/templates">Resume Builder</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="#templates" onClick={(e) => handleSmoothScroll(e, 'templates')}>Resume Templates</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  {/* <a href="#FAQ" onClick={(e) => handleSmoothScroll(e, 'FAQ')}>FAQ</a> */}
                  <Link href="/ats-score-checker">ATS Checker</Link>
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/resume">Resume Builder</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/templates">Resume Templates</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="cursor-pointer hover:text-stone-300">
                  <Link href="/ats-score-checker">FAQ</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {

          !user ?
            <Link href='/sign-in'>
              <div className="hidden md:block bg-black w-28 border text-center rounded cursor-pointer hover:shadow-sm hover:shadow-white lg:w-32 lg:text-lg lg:py-3">
                Get Started
              </div>
            </Link>
            :
            <Link href="/dashboard">
              <div className="hidden md:block bg-black w-28 border text-center rounded cursor-pointer hover:shadow-sm hover:shadow-white lg:w-40 lg:text-lg lg:py-3">

                <div className="flex items-center justify-center space-x-3">
                  <p>Dashboard </p>
                  <p><MoveRightIcon /></p>
                </div>

              </div>
            </Link>
        }



        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-5">
          <img src="/images/logo.png" alt="Logo" className="w-28" />
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-5 px-5 mt-10 text-lg">
          <li className="cursor-pointer hover:text-stone-300">
            {pathName === "/" ? (
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
            ) : (
              <Link href="/" onClick={toggleMenu}>Home</Link>
            )}
          </li>
          <li className="cursor-pointer hover:text-stone-300">
            <Link href="/resume" onClick={toggleMenu}>Resume Builder</Link>
          </li>
          <li className="cursor-pointer hover:text-stone-300">
            {pathName === "/" ? (
              <a href="#templates" onClick={(e) => handleSmoothScroll(e, 'templates')}>Resume Templates</a>
            ) : (
              <Link href="/templates" onClick={toggleMenu}>Resume Templates</Link>
            )}
          </li>
          <li className="cursor-pointer hover:text-stone-300">
            <Link href="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-stone-300">
            {pathName === "/" ? (
              <a href="#FAQ" onClick={(e) => handleSmoothScroll(e, 'FAQ')}>FAQ</a>
            ) : (
              <Link href="/#FAQ" onClick={toggleMenu}>FAQ</Link>
            )}
          </li>
        </ul>

        <div className="mt-10 px-5">
          <button className="bg-white text-black w-full py-4 rounded-md hover:bg-gray-300 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
