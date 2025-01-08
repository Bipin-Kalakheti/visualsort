import { SelectOptionsType } from "@/lib/types";
import React from "react";

export const Select = ({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
  className = '',
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        className="block appearance-none w-full bg-system-purple20 border-system-purple30 border 
        px-4 py-2 pr-8 rounded-lg text-gray-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:border-system-purple40 transition-colors
        focus:outline-none focus:border-system-purple50 focus:ring-1 focus:ring-system-purple50"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-system-purple10"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
