import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useSlideBar from "../Hooks/useSlideBar";

const MenuList = () => {
  const { handleSlideBar, slideBarStatus } = useSlideBar();
  // console.log(handleSlideBar)
  return (
    <div>
      {slideBarStatus && (
        <div className="w-52 ">
          <div className="flex items-center bg-white pt-2">
            <div
              className="rounded-full w-12 h-12 flex justify-center items-center hover:bg-black hover:bg-opacity-5 cursor-pointer"
              onClick={handleSlideBar}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </div>
            <div className="w-32">
              <img
                src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
                alt="YT_logo"
              />
            </div>
          </div>
          <div className=" pt-20 px-7 h-screen fixed border border-r-2 bg-white">
            <div>
              <ul >
                <li className="py-2 font-bold">Home</li>
                <li className="py-2 font-normal">Shorts</li>
                <li className="py-2 font-normal">Subscriptions</li>
                <li className="py-2 font-normal">Youtube Music</li>
              </ul>
              <ul >
                <li className="py-1 font-bold">You</li>
                <li className="py-2 font-normal">Your Channel</li>
                <li className="py-2 font-normal">History</li>
                <li className="py-2 font-normal">Your Videos</li>
                <li className="py-2 font-normal">Watch Later</li>
                <li className="py-2 font-normal">Downloads</li>
              </ul>

              
              <div>
                <p className="mt-4 text-sm text-slate-600">2024 Google LLC</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList;
