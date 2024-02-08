import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const renderLogo = (logo) => {
  switch (logo) {
    case "gmail":
      return <SiGmail />;
    case "whatsapp":
      return <FaWhatsapp />;
  }
};

const ContactButton = ({ title, logo, to }) => {
  return (
    <Link href={to}>
      <button className="px-2 py-1  bg-dark-gray rounded-md text-orange shadow-sm flex items-center gap-2 cursor-pointer">
        {renderLogo(logo)}
        {title}
      </button>
    </Link>
  );
};

export default ContactButton;
