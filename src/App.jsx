import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import "./styles/index.scss"
function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
