import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {

const {user,logOut}=useContext(AuthContext);
const hanedleSignOut=()=>{
  
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Logged me out!"
  })
  
  .then((result) => {
    if (result.isConfirmed) {
      logOut()
      Swal.fire({
        title: "Logged Out",
        text: "You have been Logged out",
        icon: "success"
        
      })
      
      
    }
  });
}



  const links = (
    <>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/about"}>
        <li>About</li>
      </Link>
      <Link to={"/services"}>
        <li>Services</li>
      </Link>
      <Link to={"/blog"}>
        <li>Blog</li>
      </Link>
      {user?.email? <>
        <Link to={"/bookings"}>
        <li>My Bookings</li>
      </Link>
        <Link onClick={hanedleSignOut} >
        <li>Log out</li>
      </Link>
      
      </>
      :
      <Link to={"/login"}>
        <li>Login</li>
      </Link>}
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-16 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
