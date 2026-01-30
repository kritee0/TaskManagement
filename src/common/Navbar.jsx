import React from "react";
import Tmm from "../assets/Tmm.png";
import { CgProfile } from "react-icons/cg";
import Search from "../features/navbar/Search";
const Navbar = () => {
  return (
    <>
      <header className="  h-16 w-full sticky top-0 inset-0  bg-slate-50  flex justify-between  gap-4 px-3   items-center z-50   ">
        <nav className="flex w-full  items-center align-center ">
          <img
            src={Tmm}
            alt="tms"
            className=" w-16 h-16 rounded-full  object-cover"
          />
          <div className=" flex  gap-4  ml-auto  w-90  justify-end items-center ">
            <Search/>

          
          <div className="flex flex-col">
            <div className="bg-gray-300 rounded-full w-7 h-7  items-center  flex justify-center ">
              <CgProfile />
            </div>
            <span className="text-xs">KriteeKoirala</span>
          </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
