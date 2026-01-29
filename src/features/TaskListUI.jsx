import React, { useState } from "react";
import TaskDetail from "../features/TkModel/TaskDetail"
const TaskListUI = ({ tasks, taskData }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className="">
        <h2 className=" font-roboto text-gray-800 font-medium text-xl">
          {" "}
          Your TaskList
        </h2>

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
                  setShowDetail(true);
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
          <div className="max-w-2xl w-full h-[80%]   rounded-xl border-white shadow-lg">
            <TaskDetail setShowDetail={setShowDetail} />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskListUI;
