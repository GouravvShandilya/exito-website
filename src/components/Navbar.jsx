import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="w-[100vw] h-[10vh]  flex">
      <div className="md:w-[40%] md:h-[100%] w-[18%] h-[100%]  ">
        <div className="md:w-[25%] md:h-[100%] w-[100%] h-[100%]    flex items-center justify-center">
          <img src={logo} className="md:w-[40%] w-[60%]" alt="" />
        </div>
      </div>
      <div className="md:w-[60%] md:h-[100%]  w-[100%] h-[100%] flex justify-center ">
        <div className="md:w-[90%] md:h-[100%] w-[100%] h-[100%] flex ">
          <div className="w-[18%] h-[100%]  flex items-center justify-center text-center ">
            <Link>
              <span className="hover:border-b-[3.5px] md:text-[1vw] text-[3vw]   border-[#FEB550]   hover:transition-all  hover:duration-400 ">
                {" "}
                Home
              </span>
            </Link>
          </div>
          <div className="md:w-[15%]  w-[18%] h-[100%]  flex items-center justify-center text-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px] md:text-[1vw] text-[3vw]  border-[#FEB550]  hover:transition-all  hover:duration-400 ">
                About Us
              </span>
            </Link>
          </div>
          <div className=" md:w-[15%] w-[18%] h-[100%]   flex items-center justify-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px] md:text-[1vw] text-[3vw]  border-[#FEB550]  hover:transition-all  hover:duration-400 ">
                Services
              </span>
            </Link>{" "}
          </div>
       
          <div className="md:w-[15%] w-[18%] h-[100%] flex items-center justify-center text-center  ">
            {" "}
            <Link>
              <span className="hover:border-b-[3.5px] md:text-[1vw] text-[3vw]   border-[#FEB550]   hover:transition-all  hover:duration-400">
                Contact Us
              </span>
            </Link>
          </div>
          <div className="md:w-[25%] w-[28%] h-[100%]  flex items-center justify-center ">
            <button className="md:w-[100%] md:h-[65%] w-[90%] h-[40%] bg-[#FEB550] rounded-[2vw] md:text-[1.2vw] text-[1.8vw] text-white md:font-[700] font-[500] tracking-wide">
              Sign in/Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
