"use client";

import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <nav
      className={`w-full fixed z-20 transition-all  shadow-orange-hover  ${
        changeBg
          ? "bg-dark-gray py-5 border-b-[1px] border-orange-hover shadow-md"
          : "py-3 shadow-sm"
      }`}
    >
      <div className="wrap relative flex justify-between items-center px-5 ">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
        >
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
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-orange text-sm font-semibold"
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-orange text-sm font-semibold"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-orange text-sm font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="md:flex gap-12 hidden">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
          >
            <div className="absolute w-0 transition-all group-hover:w-full h-full bg-orange -z-10 "></div>
            About
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
          >
            <div className="absolute w-0 transition-all group-hover:w-full h-full bg-orange -z-10 "></div>
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="w-fit group text-orange relative font-semibold transition-all bg-transparent hover:text-white "
          >
            <div className="absolute w-0 transition-all group-hover:w-full h-full bg-orange -z-10 "></div>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
