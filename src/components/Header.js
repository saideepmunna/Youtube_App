import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlicebar } from "../utils/slideBarSlice";
import useSlideBar from "../Hooks/useSlideBar";

const Header = () => {
  const handleSlideBar = useSlideBar()
  return (
    <div>
      <div className="flex justify-between items-center pl-3 pr-8">
        <div className=" flex items-center ">
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
          <div>
            <div className="flex items-center ml-28">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-5 w-[545px] rounded-s-full border border-black border-opacity-20"
              />
              <div className="px-6 bg-black bg-opacity-5 py-2 rounded-e-full border border-black border-opacity-20 cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className=" bg-black bg-opacity-5 rounded-full w-10 h-10 flex justify-center items-center m-4 ">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="m-7">
            <FontAwesomeIcon icon={faBell} className="text-xl" />
          </div>

          <div className="h-9 w-9  flex justify-center items-center rounded-full bg-purple-400">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
