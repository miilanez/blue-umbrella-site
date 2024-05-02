import Image from "next/image";
import React from "react";

interface CardServiceProps {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
}

const CardService: React.FC<CardServiceProps> = ({
  cardDescription,
  cardImage,
  cardTitle,
}) => {
  return (
    <div className="w-full md:w-1/3 m-2">
      <div className="p-7 bg-blue-100 rounded-3xl">
        <div className="flex flex-col justify-between">
          <div className="w-full">
            <h4 className="mb-2 py-3 text-3xl text-blue-950 font-medium tracking-tight font-heading overflow-hidden">
              {cardTitle}
            </h4>
            <p className="mb-4 h-28 font-medium overflow-hidden">
              {cardDescription}
            </p>
            <div className="w-full flex p-2 h-[250px]">
              <Image
                className="mx-auto"
                src={cardImage}
                alt=""
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;
