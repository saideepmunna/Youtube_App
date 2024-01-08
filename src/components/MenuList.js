import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import useSlideBar from '../Hooks/useSlideBar';

const MenuList = () => {
  const handleSlideBar = useSlideBar()
  // console.log(handleSlideBar)
  return (
    <div>
      <div className="flex items-center">
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
      
    </div>
  )
}

export default MenuList;