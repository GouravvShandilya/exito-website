import React, { useEffect } from "react";
import About from "../assets/about.png";
import Chat from "../assets/chat.png";
import Left from "../assets/left.png";
import Group from "../assets/Group.svg";
import BG from "../assets/bg.png";
import Goal from "../assets/goal.png";
import Challenge from "../assets/challenge.png";
import Solution from "../assets/solution.png";

const Aboutus = () => {


  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:w-[full] min-h-[100vh] overflow-hidden ">
      {/* main-1 */}
      <div className=" w-[full] ">
        <img className="w-[full]" src={About} alt="" />
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
      <div className="w-[full] md:w-[full] min-h-[90vh]  ">
        <div className="w-[full] md:w-[full] h-[5vh] md:h-[10vh]  flex items-center justify-center">
          <h2 className="md:font-[700] md:text-[40px] font-[600] text-[21px]">
            Our brand
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[90%] md:h-[70vh] w-[95%] h-[45vh]  flex">
            <div className="w-[50%] h-[100%] ">
              <img className="h-[100%] md:object-cover " src={Left} alt="" />
            </div>
            <div className="w-[50%] h-[100%]  flex justify-center items-center">
              <div className="w-[90%] h-[100%]  flex flex-col justify-center items-center">
                {/* {1-st} */}
                <div className="w-[80%] md:h-[20vh] h-[15vh]  flex ">
                  <img className="w-[15%] h-[15%]" src={Group} alt="" />
                  <div className="flex flex-col bg-[white] pl-[10px] ">
                    <h4 className="font-[500]">MISSION</h4>
                    <div className=" ">
                      <p className="text-[2.1vw] md:text-[1vw]">
                        Our mission is to empower businesses by providing
                        strategic guidance, legal clarity, financial acumen,
                        cutting-edge digital solutions, and comprehensive
                        taxation services.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2-nd */}
                <div className="w-[80%] md:h-[20vh] h-[15vh]  flex ">
                  <img className="w-[15%] h-[15%]" src={Group} alt="" />
                  <div className="flex flex-col  pl-[10px] ">
                    <h4 className="font-[500]">VISION</h4>
                    <div className="h-[70%]  ">
                      <p className="text-[2vw] md:text-[1vw]">
                        Whether you are a startup looking for foundational
                        support or an established enterprise seeking innovative
                        solutions, Exito Consultancy Services is here to propel
                        your business to new heights.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3-rd */}
                <div className="w-[80%] md:h-[20vh] h-[15vh]  flex ">
                  <img className="w-[15%] h-[15%]" src={Group} alt="" />
                  <div className="flex flex-col  pl-[10px] ">
                    <h4 className="font-[500]">VALUES</h4>
                    <div className="h-[70%]  ">
                      <p className="text-[2vw] md:text-[1vw]">
                        Your business is unique, and we recognize that. Our
                        client-centric focus ensures that we take the time to
                        understand your business intricacies, challenges, and
                        aspirations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[14vh] flex justify-center items-center ">
          <div className="w-[90%] flex  justify-center items-start h-[100%] ">
            <div className="w-[100%] h-[100%] flex flex-col  justify-center items-center ">
              <h1 className="text-[3.5vw] mt-[1vh] md:text-[2vw] font-[600]">
                Exito Cunsulting
              </h1>
              <div className="w-[100%] h-[100%]  text-center">
                <p className="text-[3.3vw] md:text-[1vw]">
                  Whether you are a startup looking for foundational support or
                  an established enterprise seeking innovative solutions, Exito
                  Consultancy Services is here to propel your business to new
                  heights. Join hands with us, and let's embark on a journey of
                  growth, success, and excellence together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[full] h-[50vh] flex justify-center items-center">
          <div className="w-[95%] h-[50vh] ">
            <div className="w-[100%] md:h-[10vh] h-[5vh]  flex justify-center items-center">
              <h1 className="md:text-[2vw] md:[3vw] font-[500]">
                What Sets Us Apart
              </h1>
            </div>
            <div className="w-[100%] h-[40vh] ">
              <div className="">
                <h1 className="md:text-[1.5vw] text-[3.5vw] font-[500]">
                  1. Expert Team:
                </h1>
                <div className="w-[90%]">
                  <p className="text-center text-[3vw] md:text-[1vw]">
                    Our team comprises seasoned professionals with diverse
                    backgrounds, each bringing a unique skill set to the table.
                    From legal experts and financial analysts to digital
                    strategists and taxation specialists, we collaborate to
                    deliver integrated solutions tailored to your specific
                    requirements.
                  </p>
                </div>
              </div>
              <div className="">
                <h1 className="md:text-[1.5vw] text-[3.5vw] font-[500]">
                  2. Holistic Approach:
                </h1>
                <div className="w-[90%]">
                  <p className="text-center text-[3vw] md:text-[1vw]">
                    We understand that success is multifaceted. That's why we
                    take a holistic approach, offering a suite of services
                    designed to address every aspect of your business needs.
                    Whether you require legal support, financial insight,
                    digital transformation, or tax optimization, we have the
                    expertise to guide you.
                  </p>
                </div>
              </div>
              <div className="">
                <h1 className="md:text-[1.5vw] text-[3.5vw] font-[500]">
                  3. Commitment to Excellence:
                </h1>
                <div className="w-[90%]">
                  <p className="text-center text-[3vw] md:text-[1vw]">
                    Excellence is not just a goal; it's a standard we uphold.
                    Our commitment to delivering high-quality services,
                    maintaining ethical standards, and exceeding client
                    expectations sets us apart in the consultancy landscape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[full] md:h-[10vh] "></div>
      </div>
      {/* main-4 */}
      <div
        className="w-[full] md:h-[65vh] h-[20vh] "
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
      >
        <div className="w-[100%] h-[40%] ">
          <div className="w-[100%] flex justify-center">
            <div className="md:w-[50%] w-[50%] flex flex-col justify-center items-center md:h-[20vh] ">
              <h1 className="md:text-[2vw] text-[white] text-[3.5vw] font-[500]">
                Our Work Process
              </h1>
              <div className="md:w-[80%] ">
                <p className="text-center text-[white] text-[2.5vw] md:text-[1vw] ">
                  EXITO Cunsulting understand that to help meet client
                  challenges and opportunities successfully in the global
                  economy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[full] h-[60%] flex justify-center ">
          <div className="w-[33%] h-[100%] flex justify-center items-center ">
            <div className="md:w-[50%] md:h-[50%] w-[70%] h-[70%] ">
              <div className="flex mb-[5%] md:mb-[0] justify-center">
                <img className="w-[20%] h-[20%]" src={Goal} alt="" />
              </div>
              <div className="flex justify-center">
                <h1 className="text-[white] text-[1.8vw] font-[500] mb-[5%] md:mb-[0]">Share Your Goal</h1>
              </div>
              <div className="w-[100%] flex justify-center items-center" >
                <div className="w-[80%]">
                <p className="text-[white] text-[1.6vw] md:text-[1vw] ">How all this mistaken our our idea complete system.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-[100%] flex justify-center items-center ">
          <div className="md:w-[50%] md:h-[50%] w-[70%] h-[70%] ">
              <div className="flex justify-center mb-[5%] md:mb-[0]">
                <img className="w-[20%] h-[20%]" src={Challenge} alt="" />
              </div>
              <div className="flex justify-center">
                <h1 className="text-[white] text-[1.8vw] font-[500] mb-[5%] md:mb-[0]">Find A Challenges</h1>
              </div>
              <div className="w-[100%] flex justify-center items-center" >
                <div className="w-[80%]">
                <p className="text-[white] text-[1.7vw] md:text-[1vw] ">Denouncing pleasure praising expound actual.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] h-[100%] flex justify-center items-center">
          <div className="md:w-[50%] md:h-[50%] w-[70%] h-[70%] ">
              <div className="flex justify-center mb-[5%] md:mb-[0]">
                <img className="w-[20%] h-[20%]" src={Solution} alt="" />
              </div>
              <div className="flex justify-center mb-[5%] md:mb-[0]">
                <h1 className="text-[white] text-[1.8vw] font-[500]">Get A Solution</h1>
              </div>
              <div className="w-[100%] flex justify-center items-center" >
                <div className="w-[80%]">
                <p className="text-[white] text-[1.6vw] md:text-[1vw] ">There anyone all loves desire obtain pain itself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main-5 */}
      <div className="w-[full] h-[10vh]"></div>
      {/* main-6 */}
      <div className="w-[full] h-[50vh] flex justify-center items-center ">
        <div className="w-[80%] h-[80%] flex justify-center items-center ">
            <div className="md:w-[50%] w-[90%] flex flex-col justify-center h-[80%]">
                <div className="flex justify-center items-center">
                    <h1 className="mb-[5%] md:mb-[2%] md:text-[1.5vw] font-[500]">FOR BUSINESS PROCESS</h1>
                </div >
                <div className="flex justify-center text-center items-center">
                    <p className="mb-[5%] md:mb-[2%]">Call Us at +01 569 896 654 or click below to get a quote</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="bg-[#FEB550] md:w-[150px] md:h-[30px] w-[100px] h-[20px] text-[2.7vw] md:text-[1vw] rounded-full md:pl-[5%] md:pr-[5%]">Get A Quote</button>
                </div>
            </div>
        </div>
      </div>
      {/* main-7 */}
      <div className="w-[full] h-[10vh]"></div>
    </div>
    
  );
};

export default Aboutus;
