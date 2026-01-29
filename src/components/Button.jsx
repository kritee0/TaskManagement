import React from 'react'

const TaskButton = ({ text, onClick, primary,  icon,  count,className = "" }) => {
  return (
   
      <button
        onClick={onClick}
     
        className={`px-4 py-2 rounded-full border border-gray-300 bg-black text-sm min-w-[100] text-gray-800
          ${primary ? " text-gray-800 hover:bg-gray-500" : " hover:bg-gray-500 hover:text-white text-white"} 
          transition-all ${className}`}
      >
        <div className='flex flex-col items-center justify-center'>
        <span>{icon}</span>
        
        {text}
        <span>{count}</span>
        </div>

      </button>

    
  )
}
export default TaskButton