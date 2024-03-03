import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import toast from "react-hot-toast";
import useTask from "../../../../hooks/useTask";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link, useLoaderData } from "react-router-dom";
import {  useEffect, useState } from "react";

const TaskList = () => {
    // const { count } = useLoaderData()

    const [alltask, refetch] = useTask();
    const axiosPublic = useAxiosPublic();

    const [searchQuery, setSearchQuery] = useState('');
    // const [currentPage, setCurrentPage] = useState(0);
    // const [taskPerPage, setTaskPerPage] = useState(5);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter the tasks based on the search query
    const filteredTasks = alltask.filter(task => {
        return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // pagination concept 
    // const numberOfPage = Math.ceil(count / taskPerPage);

    // const pages = [...Array(numberOfPage).keys()];

    // const handlePrevPage = () => {
    //     if(currentPage > 0) {
    //         setCurrentPage( currentPage - 1 )
    //     }
    // }

    // const handleNextPage = () => {
    //     if(currentPage < pages.length - 1) {
    //         setCurrentPage( currentPage + 1 )
    //     }
    // }
    const handleDelete = id => {
        axiosPublic.delete(`/task/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.error("Your task has been deleted.")
                }
            })
    }

    // useEffect(() => {
    //     axiosPublic.get(`/alltask?page=${currentPage}&size=${taskPerPage}`)
    //         .then(res => setAllTask(res.data))
    //         .catch(err => console.error(err));
    // }, [currentPage, taskPerPage, axiosPublic]);


    return (
        <div>
            <h2 className="font-bold text-3xl text-center my-5 text-[#03045e]">My Task</h2>
            <div className="border bg-[#f1faee] pt-24 px-14 mx-10">
                <div className="overflow-x-auto">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search by task title"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full h-12 border-2 p-4 pl-5 rounded-lg mb-4"
                    />

                    {/* Conditional rendering based on search query */}
                    {searchQuery === '' ? (
                        // show all tasks if search query is empty
                        <table className="table">

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
                                                <Link to={`/dashboard/editask/${task._id}`}>
                                                    <button>  <i className="text-2xl"><LuClipboardEdit></LuClipboardEdit></i></button>
                                                </Link>

                                                <button onClick={() => handleDelete(task._id)} > <i className="text-2xl"><MdDeleteSweep></MdDeleteSweep></i></button>
                                            </td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    ) : (
                        // show filtered tasks based on search query
                        <table className="table">
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
                                {filteredTasks.map((task, index) => (
                                    <tr key={task._id}>
                                        <th>{index + 1}</th>
                                        <td>{task.title}</td>
                                        <td>{task.deadline}</td>
                                        <td>{task.category}</td>
                                        <td className="flex gap-1">
                                            <Link to={`/dashboard/editask/${task._id}`}>
                                                <button>
                                                    <i className="text-2xl"><LuClipboardEdit></LuClipboardEdit></i>
                                                </button>
                                            </Link>
                                            <button onClick={() => handleDelete(task._id)}>
                                                <i className="text-2xl"><MdDeleteSweep></MdDeleteSweep></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* <div className="text-center my-10">
                        <button onClick={handlePrevPage} className="btn">Prev</button>
                        {
                            pages.map(page =>
                                <button key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className=" btn bg-[#00b4d8] text-white mx-3" >{page}</button>)
                        }
                        <button onClick={handleNextPage} className="btn">Next</button>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default TaskList;

