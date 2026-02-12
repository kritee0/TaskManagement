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


 
 const updateTask=async(taskid,updates)=>{
  try{
const res= await fetch(`http://localhost:5000/tasks/${taskid}`,{
  method:"PATCH",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(updates) 
  })
  const updated= await res.json();
  setTasks(prev=> prev.map(task=>task.id===taskid?{...task,...updated}:task))


}
catch(err){
console.log("error when updating",err)  
}
}


const deleteTask=async(taskid)=>{
  try{
    const res= await fetch (`http://localhost:5000/tasks/${taskid}`,{
      method:"DELETE",
    
      

    })
    setTasks(prev=>prev.filter(task=>task.id !== taskid))

  } catch(err){
    console.log("Error When Deleting",err)

  }


}



  return {
    tasks,
    setTasks,
    addTask,
    updateTask,  
    deleteTask,
    taskData,
    setTaskData 
  }
}
export default useTask
