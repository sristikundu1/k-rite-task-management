import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import Errorpage from "../ErrorPage/Errorpage";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import CreateTask from "../../Components/Dashboard/pages/CreateTask/CreateTask";
import TaskList from "../../Components/Dashboard/pages/TaskList/TaskList";
import EditTask from "../../Components/Dashboard/pages/EditTask/EditTask";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Errorpage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path:"/dashboard",
        element:<DashBoardLayout/>,
        children:[
            {
                path:'addtask',
                element:<CreateTask/>
            },
            {
                path:'tasklist',
                element:<TaskList/>
            },
            {
                path:'editask/:id',
                element:<EditTask/>,
                loader:({params}) => fetch(`http://localhost:5000/task/${params.id}`)
            }
        ]
    }
])

export default Route;