import React from 'react'
import TaskPopup from '../model/TaskPopup'
import DetailUi from './DetailUi'

import useTask from '../../hook/useTask'


const TaskDetail = ({setShowDetail}) => {
  const { taskData,setTaskData,updateDescription}=useTask()
  return (

  <>
   
     
      <DetailUi setShowDetail={setShowDetail} taskData={taskData} setTaskData={setTaskData} updateDescription={updateDescription} subTask={taskData.subTasks}/>

   
    </> 
     
  
  )
}

export default TaskDetail
