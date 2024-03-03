import { LuClipboardEdit } from "react-icons/lu";

import { MdDeleteSweep } from "react-icons/md";

// import toast from "react-hot-toast";
import useTask from "../../../../hooks/useTask";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const TaskList = () => {
    const [alltask, refetch] = useTask();
    // const axiosPublic = useAxiosPublic();

  
    return (
        <div>
            <h2 className="font-bold text-3xl text-center my-5 text-[#03045e]">My Task</h2>
            <div className="border bg-[#f1faee] py-24 px-14 mx-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Task Name</th>
                                <th>Deadline</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                alltask.map((task, index) =>
                                    <tr key={task._id} >
                                        <th>{index + 1}</th>
                                        <td>{task.title}</td>
                                        <td>{task.deadline}</td>
                                        <td>{task.category}</td>
                                        <td className="flex gap-1">
                                            <button>  <i className="text-2xl"><LuClipboardEdit></LuClipboardEdit></i></button>

                                            <button 
                                            // onClick={() => handleDelete(task._id)} 
                                            > <i className="text-2xl"><MdDeleteSweep></MdDeleteSweep></i></button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaskList;

