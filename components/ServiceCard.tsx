import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, text, image }) => {
  return <div className="rounded-lg shadow-sm planet-background-1 cursor-pointer p-6">
<div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md">
<Image src={image} alt="image" className="w-[60%] brightness-0 invert" />
</div>
  </div>;
};

export default ServiceCard;
