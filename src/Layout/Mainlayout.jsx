import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Home/Home";


const Mainlayout = () => {
    return (
        <div className=" mx-auto" > 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Home></Home>

        </div>
    );
};

export default Mainlayout;