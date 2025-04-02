"use client";

import { twMerge } from "tailwind-merge";

interface TableRowProps {
  col1: string;
  donsphynx: string;
  canadian: string;
  peterbold: string;
  levkoy: string;
  elf: string;
  bambino: string;
}

// Build a table row for the FIFE Race Standard with 3 columns.
// A row contains a bold title, an italic second title, and a description of the standard.
export function TableRowSkinTypes(props: TableRowProps) {
  return (
    <div className="flex w-full">
      <div
        className={twMerge(
          "flex-1",
          "p-2",
          "border-gray-400",
          "font-bold",
          "border-t"
        )}
      >
        {props.col1}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.donsphynx}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.canadian}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.peterbold}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.levkoy}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.elf}
      </div>
      <div className={twMerge("flex-2", "p-2", "border-gray-400", "border-t")}>
        {props.bambino}
      </div>
    </div>
  );
}
