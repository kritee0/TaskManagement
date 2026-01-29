import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route, 
} from "react-router-dom";
import './App.css'

import Rootlayout from "./layout/RootLayout"
import Dashboard from "./pages/Dashbaord"
import ProjectPage from "./pages/ProjectPage"; 
import Taskpage from "./pages/Taskpage";
// import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   
      <Route path="/" element={<Rootlayout />}>
         
      <Route path="dashboard" element={<Dashboard/>} />

    
      <Route path="projects" element={<ProjectPage />} />
  
      <Route path="taskManager" element={<Taskpage />} />
  
    
     
    </Route>
      </>
  )

);

const App = () => {
  return <RouterProvider router={router} />;

};

export default App;