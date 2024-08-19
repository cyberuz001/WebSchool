import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-gray-700 bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Bog'lanish
  </button>
);

export default Button;
