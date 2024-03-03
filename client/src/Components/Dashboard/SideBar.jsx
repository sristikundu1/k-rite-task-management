import { useState } from 'react'
// Components
import logo from '../../assets/logo_transparent - copy.png'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { RiImageEditFill } from "react-icons/ri";
import useAuth from '../../hooks/useAuth'
import ManuItem from './MenuItem'

const SideBar = () => {
    const { logOut } = useAuth()

    const [isActive, setActive] = useState(false)




    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold '>
                        <img className='w-24 h-24 ' src={logo} alt="" />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden bg-[#caf0f8] md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
                            <img className='h-24 ' src={logo} alt="" />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>

                            <ManuItem
                                icon={MdAddTask}
                                label='create Task'
                                address='/dashboard/addtask'></ManuItem>
                            <ManuItem
                                icon={BsListTask}
                                label='Task List'
                                address='/dashboard/tasklist'></ManuItem>
                           

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <ManuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'></ManuItem>

                    <button
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-white bg-[#0a9396] hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBar;