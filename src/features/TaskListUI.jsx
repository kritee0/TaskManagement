import React, { useState } from "react";
import TaskDetail from "../features/TkModel/TaskDetail"
import { useNavigate, useParams } from "react-router-dom";
import { SelectDemo } from "@/components/ui/reuse/SelectDemo";
import TaskButton from "@/components/ui/reuse/Button";
import AddTask from"../features/TaskForm"
const TaskListUI = ({ tasks, taskData,setTaskData,handleAddTask }) => {
  const navigate=useNavigate()

  const [showDetail, setShowDetail] = useState(false);
    const[showTaskBtn,setShowTaskBtn]=useState(false)

  return (
    <>
      <div className=" mt-10">
        <div className="flex ">
          <h2 className=" font-roboto text-gray-800 font-medium text-xl ">
          {" "}
          Your TaskList
        </h2>
         <div className=' flex ml-auto gap-2'>
        <TaskButton text="+" onClick={()=>setShowTaskBtn(prev=>!prev)} className='bg-gray rounded-2xl text-black outline-none ' />  
           <SelectDemo/>
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
         
      
        </div>
        

        <table className=" table-auto mt-4  w-full rounded-2xl">
          <thead>
            <tr className="bg-gray-200 ">
              <th className=" p-2 border border-gray-100">Title</th>
              <th className="  p-2 border border-gray-100">StartDate</th>
              <th className=" p-2  border border-gray-100">EndDate</th>
              <th className="p-2  border border-gray-100">Priority</th>
              <th className=" p-2 border border-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50  border-gray-500 shadow-2xl"
                onClick={() => {
                navigate(`/taskManager/${task.id}`)
                }}
              >
                <td className="p-4 border border-gray-100">{task.title}</td>
                <td className="p-4 border border-gray-100">{}</td>
                <td className="p-4 border border-gray-100"></td>
                <td className="p-4 border border-gray-100"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="max-w-md w-full h-[80%]   rounded-xl border-white shadow-lg">
            <TaskDetail setShowDetail={setShowDetail} taskData={taskData} />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskListUI;
