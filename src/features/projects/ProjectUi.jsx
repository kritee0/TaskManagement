import React, { useEffect, useState } from "react";

const ProjectUi = ({ project }) => {
 
  return (
    <>
      <div>

            <h2 className="text-2xl mb-4">Recent project</h2>
        {project.length === 0 ? (
          "No Recent project"
        ) : (
          <div className="flex gap-4  ">
            {project.map((item) => {
              // console.log(item)
              return (
                <div className="shadow-2xl w-64 h-24 max-w-full bg-red-500 rounded-2xl">
                  <div
                    key={item.id}
                    className=" flex  w-62  h-24   bg-white   shadow-md border-2 border-gray-200  p-4 font-roboto rounded-md"
                  >
                    <span className=""> {item.projectName}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        
      </div>
    </>
  );
};

export default ProjectUi;
