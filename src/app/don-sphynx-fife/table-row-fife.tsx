"use client";

import { twMerge } from "tailwind-merge";

interface TableRowProps {
  col1: string;
  col2: string;
  col3: string;
}

// Build a table row for the FIFE Race Standard with 3 columns.
// A row contains a bold title, an italic second title, and a description of the standard.
export function TableRowFife({ col1, col2, col3 }: TableRowProps) {
  return (
    <div className="flex">
      <div
        className={twMerge(
          "flex-1",
          "p-2",
          "border-gray-200",
          "font-bold",
          "border-t"
        )}
      >
        {col1}
      </div>
      <div
        className={twMerge(
          "flex-1",
          "p-2",
          "border-gray-200",
          "italic",
          "border-t"
        )}
      >
        {col2}
      </div>
      <div className={twMerge("flex-4", "p-2", "border-gray-200", "border-t")}>
        {col3}
      </div>
    </div>
  );
}
