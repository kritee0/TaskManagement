import useTask from '@/hook/useTask'
import React, { useState } from 'react'

const SubTaskForm = () => {
  const{taskData}=useTask()
  const[subTaskData,setSubTasksData]=useState("")
  return (
    <div>
        <input type="text" placeholder='addSaubTask' value={subTaskData} onChange={(e)=>{setSubTasksData(prev=>({...prev,subTasks:e.target.value}))}} className=' w-full border-b-2 border-black px-3 py-3  bg-white'/>    
    </div>
  )
}

export default SubTaskForm
