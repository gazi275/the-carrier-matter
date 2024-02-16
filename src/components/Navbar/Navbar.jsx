import { NavLink } from "react-router-dom";


const Navbar = () => {


    const navitems =<>

    
<NavLink to={'/'} className="text-xl cursor-pointer font-Roboto mr-3 hover:text-blue-400 hover:border-b-2 border-b-blue-500 " > Home </NavLink>
<NavLink to={'/'} className="text-xl font-Roboto mr-3 hover:text-blue-400 hover:border-b-2 border-b-blue-500 "> About Us </NavLink>
<NavLink to={'/'} className="text-xl font-Roboto mr-3 hover:text-blue-400 hover:border-b-2 border-b-blue-500 "> Jobs </NavLink>

<NavLink to={'/'} className="text-xl font-Roboto mr-3 hover:text-blue-400 hover:border-b-2 border-b-blue-500 "> News </NavLink>



<NavLink to={'/signup'} className="text-xl font-Roboto hover:text-blue-400 hover:border-b-2 border-b-blue-500 "> SignUp </NavLink>
    </>


    return (
        <div className="navbar   max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">     
            {navitems}
            </ul>
          </div>
          <NavLink to={'/'} className=" lg:text-2xl font-Unbounded font-bold  ">Carrer-Vista</NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navitems}
           
          </ul>

        </div>
       
      </div>
    );
};

export default Navbar;