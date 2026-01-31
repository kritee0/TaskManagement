import React, { useEffect, useState } from 'react'
import TaskButton from '../components/Button'
import { BiCategoryAlt } from "react-icons/bi";

import TaskPopup from './model/TaskPopup';



const TaskForm = ({title,setTaskData,handleAddTask}) => { 

  return (
    <>
    <TaskPopup>
    <div className=' max-w-md  w-full h-40 border-2 border-gray-300 p-4  rounded-2xl  shadow-2xl '>
      <div className=' flex flex-col mb-4'>
        <div className='  flex justify-between   '>
       
        <input type="text" placeholder="Add your Taks" value={title} onChange={(e)=>setTaskData(prev=>({...prev,title:e.target.value}))} className=' w-full rounded-md border-2 outline-none border-gray-200  p-2  hover:border-gray-400 ' />
        
       
          </div> 
         
      
        </div>  
        <div className='flex justify-between'>
            <TaskButton icon={<BiCategoryAlt color='white' size={24} />} className=' rounded-md bg-gray-900' />
           
         
          <TaskButton text="Save" className='bg-blue-500' onClick={handleAddTask}/>        
        </div>
    </div>
    </TaskPopup>
    </>
  )
}

export default TaskForm
