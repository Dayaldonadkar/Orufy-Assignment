import React from "react";
import search from "../Assests/Images/Search.png";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import logo from "../Assests/Images/W2Nlogo.svg";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <div className="flex items-center border border-black py-2  rounded-lg px-3 w-3/4">
            <input
              type="text"
              className="w-[99%] outline-none"
              placeholder="Search "
            />
            <img src={search} alt="" />
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <MenuIcon />
            <p>Categories</p>
          </div>

          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
