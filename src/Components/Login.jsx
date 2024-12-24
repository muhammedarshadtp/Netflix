import { useState } from "react";
import Home from "./Home";

const Login = () => {

    const [signInForm,setSignInForm]=useState(true)

    const toggleSignInForm=()=>{
        setSignInForm(!signInForm)
    }

    return (
        <div className="relative h-screen w-full">
            <div className="absolute w-full h-full bg-black bg-opacity-50"> {/* Overlay */}
                <Home />
            </div>
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[650px] bg-black bg-opacity-80 p-16 rounded-md z-20">
                <h1 className="font-bold text-3xl py-3 text-white">{!signInForm ? "Sign In" : "Sign Up" }</h1>
                {!signInForm && (
                    <input
                    type="name"
                    placeholder="Name"
                    className="p-3 my-4 w-full text-white rounded-md outline-none"
                />
                )}
                <input
                    type="email"
                    placeholder="Email or phone number"
                    className="p-3 my-4 w-full text-white rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-3 my-4 w-full  text-white rounded-md outline-none"
                />
                <button className="w-full py-2 mt-8 bg-red-700 text-white font-semibold rounded-md">
                    {!signInForm ? "Sign In" : "Sign Up" }
                </button>
                
                    
                    <p className="py-4 text-white  cursor-pointer" onClick={toggleSignInForm}>
                    {!signInForm ?"New to Netflix?  Sign up now" :"Already Have an Account ? Sign In"}
                    </p>
                
                
            </form>
        </div>
    );
};

export default Login;
