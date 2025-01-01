import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/Home",

            element: <Home />
        },
    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;