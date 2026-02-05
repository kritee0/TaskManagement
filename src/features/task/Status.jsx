import React, { useState } from 'react'

import useTask from '../../hook/useTask'


const Status = () => {   
    const[status,setStatus] =useState("pending")
    const[openStatus,setOpenStatus]=useState(false)
    const[selectedStatus,setSelectedStatus]=useState(null)
    const statusName=[
        {text:"pending"},
           {text:"completed"},
              {text:"onGoing"},
                {text:"skip"}      
    ]
 const {setTaskData}=useTask()
  return (
    <>
    <div className='relative bg-blue-950 rounded-md px-4 py-0.5 cursor-pointer'>
        <div onClick={()=>setOpenStatus(prev=>!prev)} setSelectedStatus={selectedStatus}>
             <span className='text-white'>{selectedStatus??status}</span>
        </div>
       {openStatus &&(
         <div className='absolute mt-2 bg-gray-200 shadow-2xl px-4 rounded-md flex flex-col space-y-2'>
         {statusName.map((name)=>{
           return <span onClick={()=>{setSelectedStatus(name.text) ; setOpenStatus(false); setTaskData(prev=>({...prev, status:name.text})

             )}
          }>{name.text}</span>
         })}

        </div> 

       )
        
       }
          
    </div>
    </>
  )
}

export default Status

