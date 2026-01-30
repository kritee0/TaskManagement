import React ,{useState,useEffect}from 'react' // this is parent page i ahev made i am passing props from aprent to child now
import AddTask from '../features/TaskForm';
import TaskButton from '../components/Button';
import useTask from '../hook/useTask';
import TaskListUI from '../features/TaskListUI.JSX';


const Taskpage = () => {
  const {addTask,tasks,taskData,setTaskData}=useTask()//here tasks is list of all the array or database we can called
  const[showTaskBtn,setShowTaskBtn]=useState(false)
  

const resetForm = () => {// we reset since whee data store
  setTaskData({
    title: "",
    description: "",
    createdAt: "",
    scheduleDate: "",
    dueDate: "",
    remainderDate: "",
    priority: "",
    status: "pending", 
    completed: false, 
    projectId:"",

    category: "",
    subTasks: [],
  });
};


const handleAddTask=()=>{
  if(!taskData.title.trim()) return;
  const abcd={ 
    title:taskData.title,
    description:"",
    createdAt:new Date().toISOString(),
    scheduleDate:"",
    dueDate:"",
    remainderDate:"",
    priority:"",
    status:"pending",//default
    projectId:"",
    completed:false,//default
    category:"",
    subTasks:[],
  }
  addTask(abcd)

  // setTaskData(abcd)
  resetForm();
  setShowTaskBtn(false)
}
  return (
    
    <>    
      <div className='flex justify-end '> 
       
          <TaskButton text="+AddTask" onClick={()=>setShowTaskBtn(prev=>!prev)} className='bg-gray-800 rounded-2xl' />  
          </div>

          {showTaskBtn &&(
            <div className='flex justify-center'>
             <AddTask
              title={taskData.title}
              setTaskData={setTaskData}
              category={taskData.category} 
              handleAddTask={handleAddTask}/> 
              </div>
          )}
          <TaskListUI tasks={tasks} taskData={taskData}
        />
      </>
     

  )
}

export default Taskpage
