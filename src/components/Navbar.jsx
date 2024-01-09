import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="w-[100vw] h-[10vh]  flex">
      <div className="w-[40%] h-[100%] ">
        <div className="w-[25%] h-[100%]  flex items-center justify-center">
          <img src={logo} className="w-[40%]" alt="" />
        </div>
      </div>
      <div className="w-[60%] h-[100%]  flex justify-center">
        <div className="w-[90%] h-[100%]  flex">
          <div className="w-[15%] h-[100%]  flex items-center justify-center  ">
            <Link>
              <span className="hover:border-b-[3.5px]  border-[#FEB550]   hover:transition-all  hover:duration-400 ">
                {" "}
                Home
              </span>
            </Link>
          </div>
          <div className="w-[15%] h-[100%]  flex items-center justify-center  ">
            {" "}
            <Link to="/aboutus">
              <span className="hover:border-b-[3.5px]  border-[#FEB550]  hover:transition-all  hover:duration-400 ">
                About Us
              </span>
            </Link>
          </div>
          <div className="w-[15%] h-[100%]  flex items-center justify-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px] border-[#FEB550]  hover:transition-all  hover:duration-400 ">
                Services
              </span>
            </Link>{" "}
          </div>
          <div className="w-[15%] h-[100%] flex items-center justify-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px] border-[#FEB550]    hover:transition-all  hover:duration-400 ">
                Blog
              </span>
            </Link>
          </div>
          <div className="w-[15%] h-[100%] flex items-center justify-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px]  border-[#FEB550]   hover:transition-all  hover:duration-400">
                Contact Us
              </span>
            </Link>
          </div>
          <div className="w-[25%] h-[100%]  flex items-center justify-center">
            <button className="w-[100%] h-[65%] bg-[#FEB550] rounded-[2vw] text-white font-[700] tracking-wide">
              Sign in/Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
