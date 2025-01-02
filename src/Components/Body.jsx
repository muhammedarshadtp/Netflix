import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {

    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        },
    ]);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            } else {
             dispatch(removeUser())
            }
          });

    },[])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;