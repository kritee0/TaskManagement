import React, { useEffect, useState } from 'react'

const useProject = () => {
    const[project,setProject]=useState([]);
    const[projectName,setProjectName]=useState();
    const resetProject=()=>{
        setProjectName({
             projectName:""
      })     
    }
    useEffect(()=>{
        const fetchproject= async()=>{
            const res= await fetch("http://localhost:5000/projects")
            const data =await res.json();
            setProject(data)
        }
        fetchproject();
    })

    const addProject=async()=>{
    if(!projectName?.trim())return;
    const newProject= {projectName,id:Date.now()}
    const res=await fetch("http://localhost:5000/projects",{
        method:"POST",
      headers: { "Content-Type": "application/json" },
        body:JSON.stringify(newProject)
    })
  setProject(prev=>({...prev,newProject}))
  resetProject();

}
  return {
    project,
    setProject,
    projectName,
    setProjectName,addProject
  }
    
  
}

export default useProject
