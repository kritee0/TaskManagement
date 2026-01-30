import React, { useState } from 'react'
import useProject from '../../hook/useProject'
import TaskButton from '../../components/Button';
import TaskPopup from '../model/TaskPopup';
import DatePicker from '@/components/DatePicker';


const ProjectForm = () => {
  const[startDate,setStartDate]=useState(null)
  const{ addProject,projectName,setProjectName}=useProject();
  return (
    <>
    <TaskPopup className='bg-white border border-gray-300 max-w-xl w-full max-h-[90%] p-6 rounded-lg flex flex-col space-y-4  overflow-y-auto
 '>
      <div className='text-center  mb-4 text-2xl font-roboto '>
     <h2 className=' font-bold'>ProjectForm</h2>
     </div>
     {/* <div className='flex justify-end-safe'>
        <button className='bg-gray-200 font-roboto px-3 py-1 rounded-xs'>Status</button>
     </div>
  */}
     <div className=' text-md font-roboto'>
       <label className=''>AddProject:</label>
             <input type="text" placeholder='addProject' value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}}   className='outline-2 outline-gray-400 p-2 rounded-md w-full ' />  
             </div> 
            <div className=' flex justify-between '>
               <DatePicker date={startDate} setDate={setStartDate}/>
                <DatePicker date={startDate} setDate={setStartDate}/>
             
            </div>
            <span>Assign Team Member</span>
             <input type="text" placeholder='addProject' value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}}   className='outline-2 outline-gray-400 p-2 rounded-md w-full ' />
              <span>Project Task</span>
             <input type="text" placeholder='addProject' value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}}   className='outline-2 outline-gray-400 p-2 rounded-md w-full ' />

            <span>Attachment Link</span>
               <input type="text" placeholder='addProject' value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}}   className='outline-2 outline-gray-400 p-2 rounded-md w-full ' />


        <TaskButton   text="Add" onClick={addProject}/>
      
        </TaskPopup>

   
    </>
  )
}

export default ProjectForm
