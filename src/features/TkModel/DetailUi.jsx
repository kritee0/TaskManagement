import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiLineHeight } from "react-icons/ci";

const DetailUi = ({ setShowDetail, taskData, updateDescription }) => {
  const close = () => setShowDetail(false);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      updateDescription(taskData.id, taskData.description);   }
  };

  return (
    <div className="max-w-full w-full p-4">
      <div className="flex justify-between border-b-2 border-white">
        <div className="flex gap-2">
          <h2 className="text-white font-bold font-roboto text-xl">
            TaskDetail
          </h2>
          <CiLineHeight color="white" size={28} />
        </div>
        <RxCross1 onClick={close} color="white" size={28} />
      </div>

      <div className="mt-4 text-white w-full">
        <span>Add Description</span>
        <input
          type="text"
          placeholder="Description"
          className="outline-2 outline-gray-400 rounded-md p-2 w-full mt-2"
          value={taskData.description}
          onChange={(e) => updateDescription(taskData.id, e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
    </div>
  );
};

export default DetailUi;

