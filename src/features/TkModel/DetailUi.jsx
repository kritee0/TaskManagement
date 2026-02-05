import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiLineHeight } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { useParams } from "react-router-dom";
import DatePickerInput from "@/components/ui/reuse/DatePicker";
import TaskButton from "@/components/ui/reuse/Button";
import SubTaskForm from "./SubTaskForm";
import { SelectDemo } from "@/components/ui/reuse/SelectDemo";
import Status from "@/features/task/Status";


const DetailUi = ({ setShowDetail, taskData, updateDescription, subTasks }) => {
  const [openSubTask, setOpenSubTask] = useState(false);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const [subTaskDate, setSubTaskDate] = useState(new Date());
  const [subTaskDueDate, setSubTaskDueDate] = useState(new Date());
  const { id } = useParams();

  const close = () => setShowDetail(false);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      updateDescription(taskData.id, taskData.description);
    }
  };

  return (
    <div className="max-w-full w-full p-4 border-2 flex flex-col gap-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Task Detail</h2>
        <RxCross1 onClick={close} color="black" size={28} className="cursor-pointer" />
      </div>

      {/* Main content */}
      <div className="flex gap-8">
      
        <div className="flex-2 flex flex-col gap-6 w-full">
          <div className="flex justify-between items-center">
         
          </div>

         
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">{taskData.title}</span>
            {/* <button className="bg-blue-950 px-3 py-1 rounded-md text-white">Status</button> */}
           <Status/>
          </div>

       
          <div>
            <span className="text-xl font-medium">Task Progress</span>
            <div className="w-full h-3 bg-green-900 rounded-2xl mt-1">
              <div
                className="h-3 bg-green-950 rounded-2xl"
                style={{ width: `${taskData.progress ?? 0}%` }}
              ></div>
            </div>
          </div>

       
          <div className="flex flex-col gap-2">
            <span
              className="text-md font-semibold cursor-pointer"
              onClick={() => setOpenSubTask((prev) => !prev)}
            >
              Add Subtask
            </span>

            {openSubTask && (
              <div className="flex gap-4 border p-4 rounded-md relative">
                <div className="flex-1">
                  <SubTaskForm subTasks={subTasks} />
                </div>
                <IoMdMore
                  size={28}
                  onClick={() => setOpenSidePanel((prev) => !prev)}
                  className="cursor-pointer"
                />

                {openSidePanel && (
                  <div className="absolute top-0 right-0 flex flex-col gap-2 bg-white p-2 shadow-lg rounded-md z-50">
                    <DatePickerInput date={subTaskDate} setDate={setSubTaskDate} />
                    <DatePickerInput date={subTaskDueDate} setDate={setSubTaskDueDate} />
                  </div>
                )}
              </div>
            )}
          </div>

     
          <div className="flex flex-col gap-2">
            <span className="font-medium">Add Description</span>
            <textarea
              placeholder="Description"
              className="outline-2 outline-gray-400 rounded-md p-2 w-full resize-none"
              value={taskData.description}
              onChange={(e) => updateDescription(taskData.id, e.target.value)}
              onKeyDown={handleKey}
              rows={4}
            />
          </div>
        </div>

       
        <div className="flex-[0.5] flex flex-col border-2 bg-gray-700 p-4 gap-4 rounded-2xl shadow-xl">
          <SelectDemo></SelectDemo>
          <div className="flex flex-col gap-2">
            <span className="text-white">Task Schedule</span>
            <DatePickerInput date={taskData.schedule} setDate={() => {}} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Task Deadline</span>
            <DatePickerInput date={taskData.deadline} setDate={() => {}} />
          </div>
          <span className="text-white">Task Assigned By: {taskData.assignedBy}</span>
          <span className="text-white">Project: {taskData.projectName}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailUi;

