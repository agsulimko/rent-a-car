import React from "react";
import "./Burger.css";
export const Burger = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   aria-hidden="true"
      //   position="absolute"
      //   overflow="hidden"
      viewBox=" 0 0 32 32"
      className="burger"
    >
      <g fill="none">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M28 13.333H4M28 8H4M28 18.667H4M28 24H4"
        />
      </g>
    </svg>
  );
};
