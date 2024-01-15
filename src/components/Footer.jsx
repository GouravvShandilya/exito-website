import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
function Footer() {
  return (
    <div className="w-[100vw] md:h-[50vh] h-[20vh] bg-[#00000096] ">
      <div className="w-[100%] h-[80%] ">
        <div className="w-[100%] h-[30%]  flex ">
        <div className="w-[30%] h-[100%] flex justify-end"> 
         <div className="w-[50%] h-[100%]  flex justify-center items-center ">
          <div className="md:w-[33%] md:h-[85%] w-[30px] h-[30px]  rounded-[100vw] bg-[#D9D9D9] flex items-center justify-center">
          <img src={logo} className="w-[70%]" alt="" />
          </div>
         </div>
        </div>
        <div className="w-[70%] h-[100%]  ">
        
        </div>
        </div>

        <div className="w-[100%] h-[70%]  flex">
          <div className="w-[33.33%] h-[100%]  flex justify-end">
            <div className="w-[40%] h-[100%] ">
              <div className="w-[100%] h-[20%]  flex items-center justify-start">
                <h1 className="md:text-[1.2vw] text-[2vw] font-[500] text-white">
                  Quick Link
                </h1>
              </div>
              <div className="w-[100%] h-[17%]  flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Home
                </Link>
              </div>
              <div className="w-[100%] h-[17%]  flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  About Us
                </Link>
              </div>
              <div className="w-[100%] h-[17%] flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Services
                </Link>
              </div>
              <div className="w-[100%] h-[17%]  flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[33.33%] h-[100%]  flex justify-center">
            <div className="md:w-[40%] w-[60%] h-[100%] ">
              <div className="w-[100%] h-[16%]     flex items-center justify-start">
                <h1 className="md:text-[1.2vw] text-[2vw] font-[500] text-white">
                  Our Services
                </h1>
              </div>
              <div className="w-[100%] h-[19.5%]    flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Financial Consulting
                </Link>
              </div>
              <div className="w-[100%] h-[16%]    flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Business Management
                </Link>
              </div>
              <div className="w-[100%] h-[16%]   flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Consultant & Programs
                </Link>
              </div>
              <div className="w-[100%] h-[16%]    flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Company Management
                </Link>
              </div>
              <div className="w-[100%] h-[16%]    flex items-center justify-start">
                <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
                  Insurance & Finance
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[33.33%] h-[100%] flex justify-center  ">
          
          <div className="w-[40%] h-[100%]  ">
          <div className="w-[100%] h-[16%]    flex items-center justify-start">
            <h1 className="md:text-[1.2vw] text-[2vw] font-[500] text-white">
            Uitility Page
            </h1>
          </div>
          <div className="w-[100%] h-[19.5%]    flex items-center justify-start">
            <Link className="md:text-[1vw] text-[1.7vw]  font-[400] text-white" to="">
            Style Guide

            </Link>
          </div>
          <div className="w-[100%] h-[16%]    flex items-center justify-start">
            <Link className="md:text-[1vw] text-[1.7vw] font-[400] text-white" to="">
            Licenses

            </Link>
          </div>
          <div className="w-[100%] h-[16%]   flex items-center justify-start">
            <Link className="md:text-[1vw] text-[1.7vw]  font-[400] text-white" to="">
            Instructions

            </Link>
          </div>
          <div className="w-[100%] h-[16%]    flex items-center justify-start">
            <Link className="md:text-[1vw] text-[1.7vw]  font-[400] text-white" to="">
            Changelog

            </Link>
          </div>
          <div className="w-[100%] h-[16%]    flex items-center justify-start">
            <Link className="md:text-[1vw] text-[1.7vw]  font-[400] text-white" to="">
            404 Page
            </Link>
          </div>
        </div>
          


          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20%] "></div>
    </div>
  );
}

export default Footer;
