import { Outlet } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
import Navbar from '../common/Navbar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const Rootlayout = () => {   
  return (
    <> 
     <ToastContainer
     position='top-center'
     />
        <Navbar/>
 
   
    <main className='flex bg-white gap-3 '>
      <Sidebar/>
      
      <div className='flex-1 p-5 '>
    
    <Outlet/> 
    </div>
    </main>
 
   
    </>
  )
}

export default Rootlayout