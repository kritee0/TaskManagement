import React ,{useState,useEffect}from 'react' // this is parent page i ahev made i am passing props from aprent to child now
import AddTask from '../features/TaskForm';
import TaskButton from '../components/ui/reuse/Button';
import useTask from '../hook/useTask';
import TaskListUI from '../features/TaskListUI.JSX';
import FilterUi from '@/features/projects/FilterUi';


const Taskpage = () => {
  const {addTask,tasks,taskData,setTaskData}=useTask()//here tasks is list of all the array or database we can called
  const[showTaskBtn,setShowTaskBtn]=useState(false)
  

const resetForm = () => {// we reset since whee data store
  setTaskData({
   ...taskData
  });
};

const handleAddTask=()=>{
  if(!taskData.title.trim()) return;
 addTask({
    ...taskData,
    createdAt: new Date().toISOString()
  });
  console.log(taskData)
  resetForm();
  setShowTaskBtn(false)
}
  return (
    
    <> 
    <div className=' justify-end'>  
      <div className='flex  max-w-full rounded-3xl   bg-blue-50  shadow-2xl '> 
       <div className='flex-2'>
           <FilterUi/>   

       </div>
       <div className='flex-[0.5]'>
        <TaskButton text="+" onClick={()=>setShowTaskBtn(prev=>!prev)} className='bg-gray rounded-2xl text-black outline-none ' />  
         
       </div>
         
          </div>
          
        
          </div>
          {showTaskBtn &&(
            <div className='flex justify-center'>
             <AddTask
              title={taskData.title}
              setTaskData={setTaskData}
              ProjectName={taskData.projectName} 
              handleAddTask={handleAddTask}/> 
              </div>
          )}
          <TaskListUI tasks={tasks} taskData={taskData}
        />
      </>
     

  )
}

export default Taskpage
