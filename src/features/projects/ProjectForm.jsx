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
     <div className=' text-md font-roboto '>
          <label className='mb-2'>AddProject:</label>
             <input type="text" placeholder='addProject' value={projectName}  onChange={(e)=>{setProjectName(e.target.value)}}   className='outline-2 outline-gray-400 p-2 rounded-md w-full ' />  
             </div> 
            <div className=' flex flex-col'>
              
                   <label className='mb-2'>StartDate</label>
               <DatePicker date={startDate} setDate={setStartDate} />
              
             
                   <label className='mb-2'>DeadlineDate</label>
                <DatePicker date={startDate} setDate={setStartDate}/>
            
              
              
             
            </div>
        
           


        <TaskButton   text="Add" onClick={addProject}/>
      
        </TaskPopup>

   
    </>
  )
}

export default ProjectForm
