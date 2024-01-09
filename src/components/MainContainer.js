import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="pl-28 -m-3 w-full">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
