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
import Profile from "../../Components/Dashboard/pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";


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
        element:<PrivateRoute><DashBoardLayout/></PrivateRoute>,
        children:[
            {
                path:'addtask',
                element:<CreateTask/>
            },
            {
                path:'tasklist',
                element:<TaskList/>,
                loader: () => fetch("https://server-tau-sage.vercel.app/taskCount")
            },
            {
                path:'editask/:id',
                element:<EditTask/>,
                loader:({params}) => fetch(`https://server-tau-sage.vercel.app/task/${params.id}`)
            },
            {
                path:'profile',
                element:<Profile/>
            },
        ]
    }
])

export default Route;