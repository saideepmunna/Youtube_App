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
  ];

  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {buttonList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
