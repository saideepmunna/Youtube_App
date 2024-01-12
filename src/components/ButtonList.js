import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Pritam Chakraborty",
    "Dramedy",
    "JavaScript",
    "Bollywood Music",
    "News",
    "Gaming",
    "Live",
    "Cricket",
    "Software Engineering",
    "Smart Phones",
    "Trailers",
    "Apple",
    "Watched",
    "New to you"
  ];

  return (
    <div className="flex overflow-x-scroll no-scrollbar fixed w-screen bg-white -mt-12 pb-3 z-20">
      {buttonList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
