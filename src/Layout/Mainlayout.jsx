import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Home/Home";


const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto" > 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Home></Home>

        </div>
    );
};

export default Mainlayout;