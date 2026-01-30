import React from 'react';
import { MdOutlineClearAll, MdOutlineCallMade } from "react-icons/md";
import { TbCongruentTo } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";

const FilterUi = ({ className }) => {
  const filterName = [
    { name: "Total Project", icon: MdOutlineClearAll, color: "text-red-600", bg: "bg-red-100" ,cardBg:"bg-red-50" },
    { name: "Pending Project", icon: MdOutlineCallMade, color: "text-yellow-600", bg: "bg-yellow-100", cardBg:"bg-yellow-50" },
    { name: "Ongoing Project", icon: TbCongruentTo, color: "text-green-600", bg: "bg-green-100",cardBg:"bg-green-50" },
    { name: "Completed Project", icon: GrCompliance, color: "text-blue-600", bg: "bg-blue-100", cardBg:"bg-blue-50" },
  ];

  return (
    <div className='max-w-full w-full h-auto bg-white p-4 font-roboto'>
      <div className='flex items-center mb-4 gap-4 flex-wrap justify-between'>
        {filterName.map((item, index) => {
          const Icon = item.icon; 
          return (
            <div
              key={index}
              className={`w-44 h-28 bg-gray-50 ${ item.cardBg} shadow-md border-2 border-gray-200 rounded-md transition-transform hover:scale-105 flex flex-col items-center justify-center gap-2 font-roboto ${className}`}
            >
              <div className={`p-3 rounded-full ${item.bg} flex items-center justify-center`}>
                <Icon className={item.color} size={30} />
              </div>
              <span className='text-center font-medium'>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterUi;

