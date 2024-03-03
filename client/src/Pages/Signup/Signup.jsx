import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";



const SignUp = () => {
    

    const { signUp, googleSignIn, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const handleClickGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
               
                        console.log(userInfo);
                        navigate("/");

                  
            })
    }


    const onSubmit = (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        console.log(userInfo);

                        reset();
                        toast.success("You successfully sign up")
                        navigate("/");




                    })
                    .catch(error => console.log(error))
            })

    };


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/workplace-with-blue-office-supplies_23-2147843328.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais)' }}>
                {/* <div className="hero-overlay "></div> */}
                <div className="ml-[500px] bg-[#F3FDE8] rounded-lg shadow-2xl">
                    <div className="hero-content text-neutral-content ">
                        <div className="w-[550px]">
                            <div className=" col-span-3 ">
                                <h2 className="font-bold text-3xl text-center text-[#AC4425] mb-4 ">SignUp</h2>
                                <div className="">


                                    <form
                                     onSubmit={handleSubmit(onSubmit)}
                                     >
                                        <div>
                                            <label className="label">
                                                <span className="label-text text-[#e85d04] font-semibold">Name</span>
                                            </label>
                                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("name", { required: true })} name="name" id="name" />
                                            {/* errors will return when field validation fails  */}
                                            {errors.name && <span className="text-red-600">Name field is required</span>}
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text text-[#e85d04] font-semibold">Photo URL</span>
                                            </label>
                                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("photoURL", { required: true })} name="photoURL" id="photoURL" />
                                            {/* errors will return when field validation fails  */}
                                            {errors.photoURL && <span className="text-red-600">url field is required</span>}
                                        </div>

                                        <div className="">
                                            <label className="label">
                                                <span className="label-text text-[#e85d04] font-semibold">Email</span>
                                            </label>
                                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" {...register("email", { required: true })} name="email" id="email" />
                                            {/* errors will return when field validation fails  */}
                                            {errors.email && <span className="text-red-600">Email field is required</span>}
                                        </div>

                                        <div className="relative ">
                                            <label className="label">
                                                <span className="label-text text-[#e85d04] font-semibold">Password</span>
                                            </label>

                                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/
                                            })} name="password" id="password" required />
                                            <span className='absolute top-14 right-3' onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                            </span>
                                            {errors.password?.type === "required" &&
                                                <p className="text-red-600">password is required</p>}
                                            {errors.password?.type === "minLength" &&
                                                <p className="text-red-600">password must be 6 chatecters required</p>}
                                            {errors.password?.type === "maxLength" &&
                                                <p className="text-red-600">password must be less than 20 chatecters required</p>}
                                            {errors.password?.type === "pattern" &&
                                                <p className="text-red-600">password must have one upper case ,one lolwer case,one number and  one special chatecters required</p>}

                                        </div>


                                        <input className="btn btn-block bg-[#006400] text-white  capitalize mt-5  font-bold text-xl" type="submit" value="Sign Up" />

                                    </form>
                                </div>


                                <div className=" flex flex-col justify-center items-center  ">
                                    <Link to="/login">
                                        <p className="text-[#e85d04] font-bold	text-center mt-2">Already Have Account? Log in</p>
                                    </Link>
                                    <h2 className="text-center text-[#e85d04] mt-3">Or sign in with</h2>


                                    <div className="flex gap-6 text-3xl mt-2">

                                        <Link to="/">
                                            <button
                                             onClick={handleClickGoogle}
                                              className="btn bg-[#A8DF8E] font-semibold">
                                                LogIn With Google
                                                <FcGoogle></FcGoogle>
                                            </button>
                                        </Link>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;