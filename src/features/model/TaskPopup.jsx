import React from "react";

const TaskPopup = ({ close, children, className = "" }) => {
  return (
    <>
    <div
      className="fixed inset-0 bg-white/20 flex items-center justify-center z-50"
      onClick={close}
    >
      
      <div
        className={`bg-white rounded-2xl w-full max-w-lg p-2 border-2 border-gray-300 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      </div>
      </>
    
  );
};

export default TaskPopup;

