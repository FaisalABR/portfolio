"use client";

import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed wrap z-20">
      <div className="w-full  relative flex justify-between items-center px-5 py-5">
        <Link href="/">
          <Image src="/image/logo.png" alt="logo" width={45} height={45} />
        </Link>
        {open ? (
          <RxCross2
            size={30}
            className="text-orange cursor-pointer md:hidden lg:hidden z-10"
            onClick={() => setOpen(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={30}
            className="text-orange cursor-pointer md:hidden lg:hidden z-10"
            onClick={() => setOpen(true)}
          />
        )}

        {/* Mobile Navbar */}
        <div
          className={`w-full absolute transition-all delay-300 px-5 py-3 rounded-b-lg border-x-[1px] border-b-[1px] border-orange ${
            open ? "top-0" : "-top-48"
          } left-0 right-0 bg-dark-gray flex justify-start items-start  md:hidden lg:hidden xl:hidden 2xl:hidden`}
        >
          <div className="flex flex-col gap-5">
            <Link href="/" className="text-orange text-sm font-semibold">
              About
            </Link>
            <Link href="/" className="text-orange text-sm font-semibold">
              Projects
            </Link>
            <Link href="/" className="text-orange text-sm font-semibold">
              Contact
            </Link>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="lg:flex md:flex gap-12 hidden">
          <Link href="/" className="text-orange">
            About
          </Link>
          <Link href="/" className="text-orange">
            Projects
          </Link>
          <Link href="/" className="text-orange">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
