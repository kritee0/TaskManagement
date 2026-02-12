import React, { useEffect } from 'react'
import TaskPopup from '../model/TaskPopup'
import DetailUi from './DetailUi'

import useTask from '../../hook/useTask'


const TaskDetail = ({setShowDetail}) => {

  const { tasks,setTasks, taskData,setTaskData,updateDescription}=useTask()
  useEffect(()=>{
    console.log("task heelo is",taskData)

  },)
  return (

  <>   
      <DetailUi setShowDetail={setShowDetail} tasks={tasks} setTasks={setTasks }  taskData={taskData} setTasksData={setTaskData}  updateDescription={updateDescription} subTask={taskData.subTasks}/>
   
    </> 
     
  
  )
}

export default TaskDetail
