import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);

 
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navItems = <>

    <ul className="flex gap-9 text-lg font-semibold" >
    <li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#0a9396] underline " : ''
            }
        >
            Home
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/calender"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#0a9396] underline " : ''
            }
        >
            Dashboard
        </NavLink>
    </li>
   
</ul>
</>

    return (
        
             <div className={` ${scrolling ? 'bg-white navbar fixed z-10 text-[#01baef] py-2 max-w-full pl-16 ' : ' bg-transparent navbar fixed z-10  text-[#f1faee] py-2 pl-16'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                        </ul>
                    </div>
                    <div className="flex ">
                        
                        <Link to='/'><h2 className="font-bold text-3xl text-[#ffffff]">Task Management</h2></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#00b4d8] text-white border-none text-xl">Login</a>
                </div>
            </div>

        
    );
};

export default Navbar;