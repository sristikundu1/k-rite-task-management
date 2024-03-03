import { Outlet } from "react-router-dom";
import SideBar from "../Components/Dashboard/SideBar";



const DashBoardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
      {/* Sidebar Component */}
      <SideBar></SideBar>
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>{/* Outlet for dynamic contents */}
        <Outlet></Outlet>
        </div>
      </div>
    </div>
    );
};

export default DashBoardLayout;