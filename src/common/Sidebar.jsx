import { NavLink } from "react-router-dom";
import { FaTasks, FaHome, FaPlus } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
const Sidebar = () => {
  const sidebarLinks = [
    { to: "/dashboard", label: "Dashboard", icon: FaHome },
    // { to: "/tasks/new", label: "Add Task", icon: FaPlus },
    { to: "/taskManager", label: "TaskManager", icon: FaTasks },
    { to: "/projects", label: "Projects", icon: TbCategoryPlus },
  ];
 return (
    <div className="sticky top-0 w-44 max-w-md h-screen shadow-2xl flex flex-col  bg-gray-700   rounded-tr-lg  mt-4  z-40"> 
     

      <nav className="flex flex-col   mt-20 px-4  gap-y-6">

        
        {sidebarLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-x-2 ${
                isActive ? "text-white font-semibold" : "text-white"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
