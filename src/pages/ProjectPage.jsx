import React, { useState } from "react";
import FilterUi from "../features/projects/FilterUi";
import ProjectUi from "../features/projects/ProjectUi";
import useProject from "../hook/useProject";
import Section from "../Section/Section";
import ProjectForm from "../features/projects/ProjectForm";

import { CiCirclePlus } from "react-icons/ci";

const ProjectPage = () => {
  const [projectform, setProjectform] = useState(false);
  const { project } = useProject();
  return (
    <>
      <div className="space-y-4">
        <Section>
          <div className="flex justify-between">
            <h2 className="text-3xl font-roboto mb-4">Projects</h2>
            <div className=" bg-blue-900 rounded-full w-7 h-7  flex  justify-center items-center ">
               <CiCirclePlus
              size={24}
              color="white"
              onClick={() => setProjectform((prev) => !prev)}
            />
            </div>
           
          </div>

          <FilterUi />
        </Section>

        <Section>
          <ProjectUi project={project} />
        </Section>
        <h2 className="text-2xl mb-2 mt-4"> projectStatistics</h2>
        {projectform && <ProjectForm />}
      </div>
    </>
  );
};

export default ProjectPage;
