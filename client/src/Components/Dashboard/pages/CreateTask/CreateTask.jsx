import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreateTask = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)

        const taskItem = {
            title: data.title,
            email: data.email,
            description: data.description,
            deadline: data.deadline,
            category: data.category
        }
     
        console.log(taskItem)
        const taskRes = await axiosPublic.post("/task", taskItem);

        console.log(taskRes.data);


        if (taskRes.data.insertedId) {
            reset();
            toast.success(`${data.title} added to your task list`)
            navigate("/dashboard/tasklist")
        }
    }

        return (
            <div>
                <h2 className="font-bold text-3xl text-center my-5 text-[#03045e]">Create Your Task</h2>

                <div className="border bg-[#f1faee] pt-24 px-14 mx-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="w-full flex flex-col lg:flex-row gap-3">
                            <div className="w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Task Title*</span>
                                </label>
                                <input {...register("title", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg " placeholder="Task Title..." type="text" name="title" id="title" />
                            </div>

                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Email</span>
                                </label>
                                <input {...register("email", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.email} type="email" name="email" id="email" />
                            </div>

                        </div>

                        <div className="w-full  gap-3">

                            <div className="w-full flex gap-3 mb-10">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Description</span>
                                    </label>
                                    <textarea {...register("description", { required: true })} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Task  Description" name="description" id="description" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-3">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Deadline</span>
                                </label>
                                <input {...register("deadline", { required: true })} required type="date" name="deadline" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Task Category</span>

                                </label>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full ">
                                    <option disabled value="default">Task Category</option>
                                    <option>ToDo</option>
                                    <option>In-Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center">

                            <input className="text-[#FFF] btn font-extrabold uppercase mr-3 w-36 bg-[#00b4d8] my-10 " type="submit" value="Add Task" />

                        </div>

                    </form>
                </div>


            </div>
        );
    };

    export default CreateTask;