import React, { useEffect, useState } from 'react'
import TaskButton from '../components/Button'




const TaskForm = ({title,setTaskData,handleAddTask}) => { 
  // const {addTask}=useTask(); here we canot pass hook directly to child we need to pass from parents
  return (
    <div className=' max-w-md  w-full h-40 border-2 border-gray-300 p-4  rounded-2xl  shadow-2xl '>
      <div className=' flex flex-col mb-4'>
        {/* <label className='text-md font-roboto mt-2 mb-3'>AddTask</label> */}
        <input type="text" placeholder="Add your Taks" value={title} onChange={(e)=>setTaskData(prev=>({...prev,title:e.target.value}))} className='rounded-md border-2 outline-none border-gray-200  p-2  hover:border-gray-400 ' />
        </div>   
        <div className='flex justify-between'>
           <TaskButton text="Project" className='    rounded-md'/>
          <TaskButton text="Save" className='bg-blue-500' onClick={handleAddTask}/>        
        </div>
    </div>
  )
}

export default TaskForm
