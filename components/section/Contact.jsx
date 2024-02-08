"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import ContactButton from "../ContactButton";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-dark py-10">
      <div className="flex items-center pt-10 lg:pt-20 lg:mb-20 mb-10">
        <div className="h-2 w-full bg-orange"></div>
        <h2 className="head_text px-5">
          <span className="text-orange">Contacts</span>
        </h2>
        <div className="h-2 w-full bg-orange"></div>
      </div>
      {/* Body */}
      <div className="wrap text-center ">
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
        <div className="h-2 w-full bg-orange"></div>
        <div className="w-5/12 flex md:gap-5 gap-1 px-5">
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
        <div className="h-2 w-full bg-orange"></div>
      </div>
    </div>
  );
};

export default Contact;
