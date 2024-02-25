import React from "react";
import Logo from "../../assets/png/logo.png";
import Profile from "../../assets/png/placeholder.png";
import { IoIosSearch } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { TbHeadphonesFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="bg-black px-16 py-4 flex justify-between items-center">
      <div className="logo">
        <img src={Logo} alt="logo" className="w-36" />
      </div>
      <div className="search">
        <div className="search-container flex items-center">
          <IoIosSearch className="text-neutral-300 text-2xl" />
          <RxDividerVertical className="text-cyan-600 text-2xl" />
          <div>
            <input
              type="search"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:outline-none  sm:text-sm w-52 placeholder:text-neutral-300 text-neutral-300"
              placeholder="Search Here..."
            />
          </div>
        </div>
      </div>
      <div className="icons flex gap-x-6">
        <div className="flex gap-x-2 items-center">
          <TbHeadphonesFilled className="text-neutral-300 text-2xl" />
          <label className="text-neutral-100 text-sm">Support</label>
        </div>
        <div className="flex gap-x-2 items-center">
          <IoSettingsSharp className="text-neutral-300 text-2xl" />
          <label className="text-neutral-100 text-sm">Settings</label>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src={Profile} className="h-11 w-11" />
          <label className="text-neutral-100 text-sm font-medium">
            <span className="font-light">Hello,</span> Scopex
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Header;
