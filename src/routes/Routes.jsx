import { createBrowserRouter } from "react-router-dom";
import Banner from "../Banner";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";

const router = createBrowserRouter([
    
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                
            }
        ]
    }
]);
export default router;