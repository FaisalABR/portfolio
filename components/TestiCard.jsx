import Image from "next/image";
import React from "react";
import DodiImage from "@/public/image/dodi.jpeg";

const TestiCard = ({ name, img, position, company, testimoni }) => {
  return (
    <div className="flex flex-col px-3 py-5 bg-dark relative border-t-2 border-orange ">
      <Image
        src={img}
        width={150}
        height={150}
        alt="Dodi Photo"
        className="object-cover rounded-full mx-auto -translate-y-12 shadow-lg shadow-orange"
      />
      <p className="text-lg font-semibold text-orange">{name}</p>
      <p className="text-lg font-medium text-white">
        {position} at <span className="text-orange">{company}</span>{" "}
      </p>
      <q className="text-white text-sm mt-4">{testimoni}</q>
    </div>
  );
};

export default TestiCard;
