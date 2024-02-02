import React from "react";
import "./Close.css";
import { G } from "./Close.styled";
export const Close = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   aria-hidden="true"
      //   position="absolute"
      //   overflow="hidden"
      viewBox=" 0 0 32 32"
      className="close"
    >
      <G fill="none" stroke="none">
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.733"
          d="M24 8 8 24M8 8l16 16"
        />
      </G>
    </svg>
  );
};
