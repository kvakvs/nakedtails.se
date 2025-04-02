"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import donsphynx from "./images/donsphynx.jpg";
import canadian from "./images/canadian.jpg";
import peterbold from "./images/peterbold.jpg";
import levkoy from "./images/levkoy.jpg";
import elf from "./images/elf.jpg";
import bambino from "./images/bambino.jpg";

// Build a table row for the FIFE Race Standard with 3 columns.
// A row contains a bold title, an italic second title, and a description of the standard.
export const TableHeadSkinTypes = ({}) => {
  return (
    <div className="flex w-full">
      <div className="flex-1 border-gray-400 border-t"></div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Don Sphynx
        <Image src={donsphynx} alt="Don Sphynx" className="max-w-24" />
      </div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Canadian Sphynx (Sphynx)
        <Image src={canadian} alt="Canadian Sphynx" className="max-w-24" />
      </div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Peterbold
        <Image src={peterbold} alt="Peterbold" className="max-w-24" />
      </div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Ukrainian Levkoy
        <Image src={levkoy} alt="Ukrainian Levkoy" className="max-w-24" />
      </div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Elf cat
        <Image src={elf} alt="Elf cat" className="max-w-24" />
      </div>
      <div className="flex-2 p-2 border-gray-400 border-t">
        Bambino
        <Image src={bambino} alt="Bambino" className="max-w-24" />
      </div>
    </div>
  );
};
