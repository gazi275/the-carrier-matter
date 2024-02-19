import { createBrowserRouter } from "react-router-dom";
import Banner from "../Banner";
import Mainlayout from "../Layout/Mainlayout";

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