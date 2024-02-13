import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../components/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;