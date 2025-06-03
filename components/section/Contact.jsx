"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import ContactButton from "../ContactButton";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-dark py-10 relative">
      <div className="absolute top-0 w-full bg-gradient-to-b h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="flex items-center pt-10 lg:pt-20 lg:mb-20 mb-10">
        <div
          className="md:h-2 h-1 w-full bg-orange"
          data-aos="fade-right"
        ></div>
        <h2 className="head_text px-5">
          <span className="text-orange" data-aos="zoom-in">
            Contacts
          </span>
        </h2>
        <div
          className="md:h-2 h-1  w-full bg-orange"
          data-aos="fade-left"
        ></div>
      </div>
      {/* Body */}
      <div className="wrap text-center">
        <div className="flex flex-wrap gap-5 justify-center">
          <ContactButton
            title="faisalabubakar92@gmail.com"
            logo="gmail"
            to="mailto:faisalabubakar92@gmail.com"
          />
          <ContactButton
            title="+62-822-1638-6576"
            logo="whatsapp"
            to="https://wa.me/6282216386576"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center pt-10 lg:pt-20">
        <div
          className="md:h-2 h-1  w-full bg-orange"
          data-aos="fade-right"
        ></div>
        <div
          className="w-5/12 flex md:gap-5 xl:gap-7 gap-1 px-5 justify-center"
          data-aos="fade-down"
        >
          <Link href="https://www.linkedin.com/in/faisal-abu-bakar-riza-0271b2223/">
            <FaLinkedin
              size={40}
              className="cursor-pointer text-white hover:text-blue-500 transition delay-300"
            />
          </Link>
          <Link href="https://github.com/FaisalABR">
            <FaGithub
              size={40}
              className="cursor-pointer text-white hover:text-violet-500 transition delay-300"
            />
          </Link>
          <Link href="https://www.instagram.com/faisalabubakarriza/">
            <FaInstagramSquare
              size={40}
              className="cursor-pointer text-white hover:text-pink-500 transition delay-300"
            />
          </Link>
        </div>
        <div
          className="md:h-2 h-1  w-full bg-orange"
          data-aos="fade-left"
        ></div>
      </div>
    </div>
  );
};

export default Contact;
