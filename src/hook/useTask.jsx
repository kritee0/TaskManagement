import React, { useEffect, useState } from 'react'
const useTask = () => {
 
  const [tasks,setTasks]=useState([])
    const[taskData, setTaskData]=useState({  //this is task object array
    title:"",
    description:"",
    createdAt:new Date().toISOString(),
    scheduleDate:"",
    dueDate:"",
    remainderDate:"",
    priority:"",
    status:"pending",//default
    completed:false,//default
    category:"",
    subTasks:[],
});
useEffect(()=>{
  const fetchData=async()=>{
    const res= await fetch("http://localhost:5000/tasks")
    const data=await res.json()
    setTasks(data)
    console.log(data)
  }
  fetchData();


},[])

  const addTask=async(newTask)=>{
    if(!newTask) return
     const taskToAdd = { ...newTask, id: Date.now() }; 
    const res=await fetch("http://localhost:5000/tasks",{
      method:"POST",
       headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(taskToAdd)
    });
    const createdTask= await  res.json();
    setTasks(prev=>[...prev,createdTask])

  }
 
const updateDescription = async (taskid, newDescription) => {
  if (!newDescription) return;

  // PATCH request to json-server
  const res = await fetch(`http://localhost:5000/tasks/${taskid}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: newDescription }) 
  });

  const updatedTask = await res.json();

  setTasks(prev =>
    prev.map(task => (task.id === taskid ? updatedTask : task))
  );
};

  return {
    tasks,
    addTask,
  updateDescription,
  
    taskData,
    setTaskData 
  }
}
export default useTask
