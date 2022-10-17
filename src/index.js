import React from "react";
import ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./Components/Errorpage";
import Homepage from "./Components/Homepage";
import Settings from "./Components/Settings";
import AboutUs from "./Components/About";
import AllPuppies from "./Components/Puppies";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/puppies",
                element: <AllPuppies />
            }
        ]
    }
])


ReactDOM.render(<RouterProvider router={router} />, document.getElementById("apps"))