import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
// import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
 

    const location = useLocation();
    const navigate = useNavigate();

     
    const { logIn, googleSignIn } = useAuth();

    const handleClickGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const guserInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                
                        console.log(guserInfo);
                        navigate("/dashboard");

                   
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        if ((email, password)) {
            logIn(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);

                    toast.success("You successfully login!")

                    // Swal.fire({
                    //     title: "Wow!",
                    //     text: "You successfully login!",
                    //     icon: "success"
                    // });

                 

                    navigate(location?.state ? location.state : "/dashboard")
                    form.reset();
                })


                .catch(error => {
                    console.error(error);
                
                })
        }

    }

    return (
        <div>

            <div className="bg-white h-screen">

                <div className="max-w-6xl mx-auto pt-2 mb-28">

                    <div className="grid grid-cols-7  mt-10 border-t-4 border-white  border-b-8 border-r-8 shadow-2xl pt-9 pr-7 pb-4 ">

                        <div className=" col-span-4">
                            <img src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg" alt="" />
                        </div>

                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center text-[#AC4425]">Login</h2>

                            <form
                             onSubmit={handleLogin} 
                             >
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Email</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                                </div>

                                <div className=" relative">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Password</span>
                                    </label>

                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                                    <span className='absolute top-14 right-3' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                    </span>

                                </div>


                                <input className="btn btn-block bg-[#006400] text-white  capitalize mt-5 font-bold text-xl " type="submit" value="Login" />

                            </form>


                            <div className=" flex flex-col justify-center items-center mt-3 ">
                                <Link to="/signup">
                                    <p className="text-[#D1A054] font-bold	text-center mt-2">New here? Create a New Account</p>
                                </Link>
                                <h2 className="text-center mt-3">Or sign in with</h2>


                                <div className="flex gap-6 text-3xl mt-2">

                                    <Link to="/">
                                        <button
                                         onClick={handleClickGoogle}  
                                         className="btn bg-[#E8E8CC] font-semibold">
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
    );
};

export default Login;