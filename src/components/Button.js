import React from "react";

const Button = ({ name }) => {
  return <div className="mx-3 bg-black bg-opacity-5 px-3 py-[6px] cursor-pointer text-sm font-semibold rounded-md whitespace-nowrap">{name}</div>;
};

export default Button;
