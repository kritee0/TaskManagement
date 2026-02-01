import React, { useEffect, useState } from "react";
import TaskButton from "../components/ui/reuse/Button";
import TaskPopup from "./model/TaskPopup";
import useProject from "@/hook/useProject";
const TaskForm = ({ title, setTaskData, handleAddTask,projectName }) => {
  const { project } = useProject();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedProjectName, setSelectedProjectName] = useState(null);
  return (
    <>
      <TaskPopup>
        <div className=" max-w-4xl  w-full h-50 p-4  rounded-2xl  shadow-2xl ">
          <div className=" flex flex-col mb-4">
            <div className="  flex justify-between   ">
              <input
                type="text"
                placeholder="Add your Taks"
                value={title}
                onChange={(e) =>
                  setTaskData((prev) => ({ ...prev, title: e.target.value }))
                }
                className=" w-full rounded-md border-2 outline-none border-gray-200  p-2  hover:border-gray-400 "
              />
            </div>
          </div>
          <div className="flex justify-between relative">
            <TaskButton
              onClick={() => setOpenDropDown((prev) => !prev)}
              text={selectedProjectName||"selectProject"}
              className="  rounded-md bg-gray-900"
            />
            <TaskButton
              text="Save"
              className="bg-blue-500"
              onClick={handleAddTask}
            />
          </div>
          <div className=" absolute  shadow-2xl bg-white  ml-5 px-3 ">
            {openDropDown && (
              <div className="flex flex-col  shadow-2xl border-2 border-gray-500  rounded-md  px-2 py-2 ">
                {project.map((proj) => (
                  <div key={proj.id} onClick={()=>{setSelectedProjectName(proj.projectName); setOpenDropDown(false)
                    setTaskData((prev=>({...prev, projectId: proj.id,  projectName:proj.projectName})));
                    
                  }} className="cursor-pointer hover:bg-gray-200" > 
                    <span>{proj.projectName}</span>
                  </div>
                ))}
               
              </div>
            )}
          </div>
        </div>
      </TaskPopup>
    </>
  );
};

export default TaskForm;
