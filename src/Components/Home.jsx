import { Link } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/Image";
import Header from "./Header";
import { useState } from "react";


const Home = () => {

    const [loginForm,setLoginForm]=useState(true)
    const toggleSignForm=()=>{
        setLoginForm(!loginForm)
    }
    return (
            <div className="w-full h-screen">
            <Header />
                <img src={NETFLIX_LOGO} alt="Header Logo" className="w-full h-full object-cover" />
                <div className="absolute top-4  right-80">
                <Link to="/login">
                    <button className="px-6 py-2 bg-red-500 text-white font-semibold  rounded-md hover:bg-red-700 transition duration-300" onClick={toggleSignForm}>Sign In</button>
                </Link>
            </div>
            </div>
    )
}

export default Home;