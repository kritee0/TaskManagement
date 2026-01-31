import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiLineHeight } from "react-icons/ci";
import { useParams } from "react-router-dom";
import DatePickerInput from "@/components/DatePicker";
import TaskButton from "@/components/Button";
import SubTaskForm from "./SubTaskForm";
import { IoMdMore } from "react-icons/io";
const DetailUi = ({ setShowDetail, taskData, updateDescription, subTasks }) => {
  const [openSubTask, setOpenSubTask] = useState(false);
  const { id } = useParams();

  const close = () => setShowDetail(false);
  const handleKey = (e) => {
    if (e.key === "Enter") {
      updateDescription(taskData.id, taskData.description);
    }
  };

  return (
    <>
      <div className="max-w-full h-auto w-full p-4 border-2   flex flex-col  ">
      <div className="flex w-full justify-between items-center">

            <h2 className="text-black font-bold font-roboto text-xl">
                TaskDetail
              </h2>
            <RxCross1 onClick={close} color="black" size={28} />
   
        </div>
       <div className="flex ">
        <div className="flex-[2]">
          <div className="flex justify-between ">
            <div className="flex gap-2">
           
              <CiLineHeight color="white" size={28} />
            </div>
           
          </div>

          <div className=" flex flex-col space-y-4 mt-4 text-black w-full">
            <div className="flex justify-between">
              <span className="text-2xl font-roboto">Title</span>

              <button className="bg-blue-950 px-3 p-1 rounded-md text-white">
                Status
              </button>
            </div>
            <span className="text-2xl font-roboto">TaskProgress</span>
            <div>
              <div className="w-full h-3 bg-green-950 rounded-2xl"></div>
            </div>
         
              <span
                className="text-md font-semibold font-roboto"
                onClick={() => setOpenSubTask(prev=>!prev)}
              >
                AddSubtask{" "}
              </span>
              {openSubTask &&(

               <div className=" flex  border-2">
                <div className="flex-1 ">
                <SubTaskForm subTasks={subTasks} />
                </div>
              
                <IoMdMore size={28} />
              
              </div>
              )}
            
  

            <span>Add Description</span>
            <input
              type="text"
              placeholder="Description"
              className="outline-2 outline-gray-400 rounded-md p-10 w-full mt-2"
              value={taskData.description}
              onChange={(e) => updateDescription(taskData.id, e.target.value)}
              onKeyDown={handleKey}
            />
          </div>
        </div>
        <div className="flex-[0.5] flex-col border-2 bg-gray-700 ml-10 rounded-2xl shadow-2xl ">
          <div className="p-4  space-y-4">
            <TaskButton
              text="Priority"
              className="bg-blue-200 text-black"
            ></TaskButton>
            <div className="flex gap-4">
              <span className="text-md text-white">TaskSchedule</span>
              <DatePickerInput />
            </div>
            <div className="flex gap-4">
              <span className="text-md text-white ">TaskDeadline</span>
              <DatePickerInput />
            </div>
            <span className="text-white">TaskAssinged by </span>
            <span className="text-white">ProjectName</span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default DetailUi;
