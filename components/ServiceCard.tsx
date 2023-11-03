import Image from "next/image";
import React from "react";
import { Interface } from "readline";

interface Object {
  title: "string";
  text: "string";
  image: "string";
  event: "string";
}

const ServiceCard = ({ title, text, image }: Object) => {
  const handleMouseMove = (event): Object => {
    const planetBackground = event.currentTarget;
    const { left, top, width, height } =
      planetBackground.getBoundingClientRect();
    const { clientX, clientY } = event;
    const mouseX = (clientX - left) / width;
    const mouseY = (clientY - top) / height;

    const backgroundPosX = mouseX * 50;
    const backgroundPosY = mouseY * 50;

    planetBackground.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosY}%`;
  };
  return (
    <div
      className="rounded-lg shadow-sm planet-background-1 cursor-pointer p-6"
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md">
        <Image
          src={image}
          alt="image"
          className="w-[60%] brightness-0 invert"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{text}</p>
    </div>
  );
};

export default ServiceCard;
