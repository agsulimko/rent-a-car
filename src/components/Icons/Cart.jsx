import React from "react";
import "./Cart.css";
export const Cart = ({ className }) => {
  //   const [isFocused, setIsFocused] = useState(false);
  //   const handleFocus = () => {
  //     setIsFocused(true);
  //   };
  //   const handleBlur = () => {
  //     setIsFocused(false);
  //   };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   aria-hidden="true"
      //   position="absolute"
      //   overflow="hidden"
      viewBox=" 0 0 36 36"
      className="cart"
    >
      <g fill="none">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.667"
          d="M12 29.333a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667zM26.667 29.333a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.4"
          d="M1.333 1.333h5.333l3.573 17.853a2.671 2.671 0 0 0 2.666 2.147h12.96a2.667 2.667 0 0 0 2.666-2.147l2.133-11.187H7.997"
        />
      </g>
    </svg>
  );
};
