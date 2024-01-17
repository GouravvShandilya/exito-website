import  { useEffect } from "react";
import About from "../assets/about.png";
import Chat from "../assets/chat.png";
import Frame from "../assets/frame.png";
import Box from "../assets/Box.png";
import Icons from '../assets/icon.png'

const Services = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:w-[full] min-h-[100vh] overflow-hidden ">
      {/* main-1 */}
      <div className=" w-[full] ">
        <img className="w-[100%]" src={About} alt="" />
      </div>
      {/* main-2 */}
      <div className="w-[full] md:w-[full] md:min-h-[10vh] min-h-[5vh]  bg-[#D7E9F4] flex justify-end items-center">
        <div className="w-[20vw] h-[100%]  ">
          <img
            className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            src={Chat}
            alt=""
          />
        </div>
      </div>
      {/* main-3 */}
      <div className="w-[full] md:h-[10vh] h-[5vh] flex justify-center items-center">
        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <h1 className="md:text-[2vw] font-[500]">Our Services</h1>
        </div>
      </div>
      {/* main-4 */}
      <div className="w-[full] h-[1vh]"></div>
      {/* main-5 */}
      <div className="w-[full] md:min-h-[100vh] object-cover">
        <div className="w-[100%] h-[100%]">
          <img src={Frame} alt="" />
        </div>
      </div>
      {/* main-6 */}

      <div className="w-[full] min-h-[100vh]  flex  justify-center items-center">
        <div className="w-[90%] min-h-[80vh]  flex flex-col justify-center items-center ">
          <div className="w-[50%] md:h-[20vh] h-[13vh]  ">
            <div className="flex justify-center">
              <div className="w-[50%] h-[5vh] flex justify-center items-center ">
                <div className="md:w-[2.8%] w-[5%]">
                  <img src={Box} alt="" />
                </div>
                <h5 className="ml-[1vh] md:text-[1.2vw] text-[2.3vw]">
                  We Are Expertise In
                </h5>
              </div>
            </div>
            <div className="  ">
              <h1 className=" text-center  md:text-[2.1vw] font-[500]">We Provide Professional <br /> Business Solutions.</h1>
            </div>
          </div>
          <div className="w-[100%] min-h-[50vh]  md:flex md:flex-col  md:justify-evenly justify-center">
            <div className="w-[90%] h-[100%] md:flex justify-between ">
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] rounded-lg flex mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.4vw] text-[2.9vw] font-[500]">Business Consultancy:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] rounded-lg flex mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.4vw] text-[2.9vw] font-[500]">Legal services Consultancy:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] rounded-lg flex justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.4vw] text-[2.9vw] font-[500]">Financial Consultancy:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[100%] md:flex justify-between ">
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] rounded-lg flex mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.2vw] text-[3vw] md:font-[500] font-[300]">Taxation Services consultancy:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] rounded-lg flex mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.2vw] text-[2.9vw] font-[500]">Human Resources Consulting:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] md:h-[40%] w-[80%] h-[30%] mb-[1vh] md:mb-[0] ml-[2.5vh] md:ml-[0] rounded-lg flex justify-center bg-[#F3F3F3]">
                    <div className="w-[85%] h-[100%] flex ] ">
                        <div className="w-[50%] h-[100%] md:flex md:flex-col  flex justify-center items-center flex-col  md:justify-between">
                            <h1 className="md:text-[1.4vw] text-[2.9vw] font-[500]">Project Management:</h1>
                            <div className="md:h-[20%] h-[35%] ">
                            <button className="md:w-[100%] text-[3vw] md:text-[0.8vw] text-[#FEB550]">Read More</button>
                            </div>
            
                        </div>
                        <div className="w-[50%] h-[100%]  flex justify-center items-center">
                            <div className="w-[35%]  h-[40%]">
                                <img src={Icons} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Services;
