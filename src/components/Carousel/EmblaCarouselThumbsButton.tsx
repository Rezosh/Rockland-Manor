import { classNames } from "@/utils/helperFunctions";
import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, onClick } = props;

  return (
    <div
      className={classNames(
        selected ? " opacity-100" : "",
        "relative min-w-0 flex-shrink-0 flex-grow-0 basis-[28%] pl-3 md:basis-[18%]"
      )}
    >
      <button
        onClick={onClick}
        className={classNames(
          selected ? " opacity-100" : "opacity-[0.2]",
          "m-0 block w-full cursor-pointer touch-manipulation border-0 bg-transparent p-0  transition-opacity duration-200 ease-in-out"
        )}
        type="button"
      >
        <Image
          className="block h-24 w-full object-cover"
          src={imgSrc}
          width={100}
          height={100}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
