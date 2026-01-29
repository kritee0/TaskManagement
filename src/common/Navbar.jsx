import React from 'react'
import Tm from "../assets/Tm.png"

const Navbar = () => {
  return (
   
      <nav className=' max-w-full h-16 w-full sticky top-0 inset-0 shadow-md bg-gray-200  flex    items-center z-50'>
       <div className="  w-16 h-10 items-center px-3  font-bold  rounded-full text-xl  ">
       <img src={Tm} alt="tms" className="rounded-full w-full object-cover"/>
      </div>
      </nav>

      

  )
}

export default Navbar
