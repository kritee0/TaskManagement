import React from "react";
import Tmm from "../assets/Tmm.png";
import { CgProfile } from "react-icons/cg";
import Search from "../features/navbar/Search";
import { PiPlusBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <>
      <header className="  h-16 w-full sticky top-0 inset-0  bg-gray-100  flex justify-between px-3   items-center z-50   ">
        <nav className="flex w-full  items-center align-center   ">
          <div className="mr-auto">
            <img
              src={Tmm}
              alt="tms"
              className=" w-16 h-16 rounded-full  object-cover"
            />
          </div>

          <Search />
         

          <div className=" flex  gap-4  ml-auto  w-60%  justify-end items-center  ">
          
             <PiPlusBold color="orange" size={24}   />
       

            <div className="flex flex-col">
              <div className="bg-orange-700 rounded-full w-7 h-7  items-center  flex justify-center ">
                <CgProfile color="white" />
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
