import homeMainPic from "../assets/homeMainPic.png";
import { RiShakeHandsLine } from "react-icons/ri";
import { RiHandCoinLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import homeImg1 from "../assets/homeImg1.png";
import homeImg2 from "../assets/homeImg2.png";
import homeImg3 from "../assets/homeImg3.png";
import homeImg4 from "../assets/homeImg4.png";
import homeImg5 from "../assets/homeImg5.png";

function Home() {
  return (
    <div className="w-full min-h-[100vh]  ">
      <div className="w-full md:h-[100vh] h-[30vh] bg-[#D7E9F4]">
        <div className="w-[100%] h-[80%] ">
          <img src={homeMainPic} className="w-[100%] h-[100%]" alt="" />
        </div>
      </div>
      <div className="w-[100%] md:h-[100vh] h-[35vh]  flex  justify-center flex-col ">
        <div className="w-[100%] md:h-[70%] h-[70%]  flex items-center justify-center">
          <div className="w-[90%] h-[90%]    ">
            <div className="w-[100%] h-[25%]   flex items-center justify-center ">
              {" "}
              <h1 className="md:text-[2vw] text-[2.5vw] font-[700] tracking-wide">
                What do you need help with?
              </h1>
            </div>
            <div className="w-[100%] h-[15%]  flex  justify-center ">
              <p className="md:text-[1.2vw] text-[2.5vw] text-[#FEB550] font-[500]  tracking-wide">
                BUNDLES
              </p>
            </div>

            <div className="w-[100%] h-[60%]  flex items-center justify-evenly ">
              <div className="w-[18%] md:h-[80%] h-[60%]   border-t-[8px] border-[#FEB550] rounded-lg flex items-center justify-center shadow-lg  ">
                <div className="w-[38%] h-[40%] bg-[#FFF0DC]  rounded-[15vw] flex items-center justify-center  shadow-lg text-[4vw] text-[#FEB550]">
                  <RiShakeHandsLine />{" "}
                </div>
              </div>
              <div className="w-[18%] md:h-[80%] h-[60%]  border-t-[8px] border-[#FEB550] rounded-lg flex items-center justify-center shadow-lg ">
                <div className="w-[38%] h-[40%] bg-[#FFF0DC]  rounded-[15vw]  flex items-center justify-center shadow-lg text-[4vw] text-[#FEB550]">
                  <RiHandCoinLine />
                </div>
              </div>

              <div className="w-[18%] md:h-[80%] h-[60%]  border-t-[8px] border-[#FEB550] rounded-lg flex items-center justify-center shadow-lg ">
                <div className="w-[38%] h-[40%] bg-[#FFF0DC]  rounded-[15vw]  flex items-center justify-center shadow-lg text-[4vw] text-[#FEB550]">
                  <GiScales />
                </div>
              </div>
              <div className="w-[18%] md:h-[80%] h-[60%]  border-t-[8px] border-[#FEB550] rounded-lg flex items-center justify-center shadow-lg ">
                <div className="w-[38%] h-[40%] bg-[#FFF0DC]  rounded-[15vw] flex items-center justify-center shadow-lg text-[4vw] text-[#FEB550]">
                  <CgFileDocument />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:h-[30%] h-[30%]  bg-[#9cc8e36b]">
          <div className="w-[100%] h-[50%]  flex items-center justify-center">
            <h1 className="md:text-[2vw] text-[3.5vw] font-[600] tracking-wide">
              Our support plans
            </h1>
          </div>
          <div className="w-[100%] h-[50%]  flex justify-center">
            <p className="md:text-[2vw] text-[2.5vw] text-center">
              Welcome to Exito Consultancy Services – Your Strategic Partner{" "}
              <br /> for Comprehensive Business Solutions!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100% md:h-[100vh] h-[30vh] bg-[#9cc8e36b] flex  justify-center">
        <div className="md:w-[85%] md:h-[85%] w-[95%] h-[95%] flex justify-between ">
          <div className="w-[33%] h-[100%] bg-[#FFFFFF] ">
            <div className="w-[100%] h-[50%] border-b-[5px]  border-[ #DADADA] flex flex-col justify-center items-center">
              <div className="w-[100%] h-[25%]  flex ">
                <div className="w-[20%] h-[100%]  flex items-center justify-center">
                  <div className="md:w-[48%] md:h-[50%] w-[50%] h-[41%] rounded-[10vw] md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[80%] h-[100%] flex items-center">
                  <h1 className="md:text-[1.5vw] text-[1.9vw] font-[600]">
                    Welcome Exito Consultancy Services
                  </h1>
                </div>
              </div>
              <div className="w-[90%] h-[75%]  ">
                <p className="md:text-[1.2vw] text-[1.6vw] tracking-wide text-[#979797]">
                  At Exito Consultancy Services, we pride ourselves on being a
                  dynamic and client-centric consultancy firm that goes beyond
                  conventional service delivery. Our commitment is to empower
                  businesses with a diverse range of services encompassing
                  business strategies,{" "}
                </p>
              </div>
            </div>

            <div className="w-[100%] h-[50%] flex flex-col justify-center items-center">
              <div className="w-[100%] h-[25%]  flex ">
                <div className="w-[20%] h-[100%]  flex items-center justify-center">
                  <div className="md:w-[48%] md:h-[50%] w-[50%] h-[40%] rounded-[10vw] md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[80%] h-[100%] flex items-center">
                  <h1 className="md:text-[1.5vw] text-[1.9vw] font-[600]">
                    Welcome Exito Consultancy Services
                  </h1>
                </div>
              </div>
              <div className="w-[90%] h-[75%] ">
                <p className="md:text-[1.2vw] text-[1.6vw] tracking-wide text-[#979797]">
                  At Exito Consultancy Services, we pride ourselves on being a
                  dynamic and client-centric consultancy firm that goes beyond
                  conventional service delivery. Our commitment is to empower
                  businesses with a diverse range of services encompassing
                  business strategies,{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[65%] h-[100%] bg-[#FFFFFF] ">
            <div className="w-[100%] md:h-[40%] h-[30%]  ">
              <div className="w-[100%] h-[40%]  flex">
                <div className="w-[10%] h-[100%]  flex items-center justify-center">
                  <div className="w-[50%] h-[40%]  rounded-[100vw] md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="md:text-[1.5vw] text-[2vw] font-[600] tracking-wide">
                    Welcome Exito Consultancy <br /> Services
                  </h1>
                </div>
              </div>
              <div className="w-[100%] h-[60%]  flex items-center justify-center">
                <div className="w-[95%] h-[90%] flex items-center justify-center  ">
                  <p className="md:text-[1.2vw] text-[1.7vw] text-[#979797] md:leading-8">
                    At Exito Consultancy Services, we pride ourselves on being a
                    dynamic and client-centric consultancy firm that goes beyond
                    conventional service delivery. Our commitment is to empower
                    businesses with a diverse range of services encompassing
                    business strategies,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[60%]  flex flex-col justify-evenly  ">
              <div className="w-[100%] h-[20%]  flex">
                <div className="w-[10%] h-[100%] flex items-center justify-center ">
                  <div className="md:w-[37%] md:h-[40%] w-[35%] h-[30%]  rounded-full md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="md:text-[1.1vw] text-[1.4vw] tracking-widest font-[600]">
                    Welcome to Exito Consultancy Services – Your Strategic
                    Partner for Comprehensive Business Solutions!
                  </h1>
                </div>
              </div>

              <div className="w-[100%] h-[20%]  flex">
                <div className="w-[10%] h-[100%] flex items-center justify-center ">
                  <div className="md:w-[37%] md:h-[40%] w-[35%] h-[30%]  rounded-full md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="md:text-[1.1vw] text-[1.4vw] tracking-widest font-[600]">
                    Welcome to Exito Consultancy Services – Your Strategic
                    Partner for Comprehensive Business Solutions!
                  </h1>
                </div>
              </div>

              <div className="w-[100%] h-[20%]  flex">
                <div className="w-[10%] h-[100%] flex items-center justify-center ">
                  <div className="md:w-[37%] md:h-[40%] w-[35%] h-[30%]  rounded-full md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="md:text-[1.1vw] text-[1.4vw] tracking-widest font-[600]">
                    Welcome to Exito Consultancy Services – Your Strategic
                    Partner for Comprehensive Business Solutions!
                  </h1>
                </div>
              </div>

              <div className="w-[100%] h-[20%]  flex">
                <div className="w-[10%] h-[100%] flex items-center justify-center ">
                  <div className="md:w-[37%] md:h-[40%] w-[35%] h-[30%]  rounded-full md:border-[8px] border-[2px] border-[#FEB550]"></div>
                </div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="md:text-[1.1vw] text-[1.4vw] tracking-widest font-[600]">
                    Welcome to Exito Consultancy Services – Your Strategic
                    Partner for Comprehensive Business Solutions!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[100%] md:h-[200vh] w-[100%] h-[80vh]   flex items-center justify-center   ">
        <div className="md:w-[90%] w-[100%]  h-[90%] ">
          <div className="w-[100%] h-[5%]  flex items-center justify-center  ">
            <h1 className="md:text-[2vw] text-[3.5vw] md:font-[700] font-[600] tracking-wide">
              Support Services
            </h1>
          </div>

          <div className="w-[100%] h-[23.75%]  flex  ">
            <div className="w-[50%] h-[100%]  flex items-center justify-center md:justify-start ">
              <div className="w-[70%] h-[80%]  flex flex-col     justify-center ">
                <div className="w-[100%] h-[25%]  flex ">
                  <div className="w-[20%] h-[100%]  flex items-center justify-center">
                    <div className="md:w-[50px] md:h-[50px] w-[20px] h-[20px] bg-[#FEB550] rounded-full flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                      <RiShakeHandsLine />
                    </div>
                  </div>
                  <div className="w-[80%] h-[100%]  flex items-center">
                    <h1 className="md:text-[1.5vw] text-[2.2vw] font-[500] tracking-wide">
                      Business Consultancy:
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] h-[40%]  flex items-center pl-[2vw] ">
                  <p className="md:text-[1.2vw] text-[2vw] font-[600] text-[#979797]">
                    • Strategic Planning <br />
                    • Market Research and Analysis <br />• Business Process
                    Optimization
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <img src={homeImg1} className="md:w-[80%] w-[100%]" alt="" />
            </div>
          </div>

          <div className="w-[100% h-[23.75%]  flex ">
            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <img src={homeImg2} className="md:w-[80%] w-[100%]" alt="" />
            </div>

            <div className="w-[50%] h-[100%]  flex items-center  justify-center  ">
              <div className="md:w-[70%] w-[90%] h-[80%]  flex flex-col  justify-center ">
                <div className="w-[100%] h-[25%]  flex">
                  <div className="w-[20%] h-[100%]  flex items-center justify-center">
                    <div className="md:w-[50px] md:h-[50px] w-[20px] h-[20px] bg-[#FEB550] rounded-full flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                      <GiScales />
                    </div>
                  </div>
                  <div className="w-[80%] h-[100%]  flex items-center">
                    <h1 className="md:text-[1.5vw] text-[2vw] font-[500] tracking-wide">
                      Legal Consultancy:
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] h-[40%]  flex items-center pl-[2vw] ">
                  <p className="md:text-[1.2vw] text-[2vw] font-[600] text-[#979797]">
                    • Contract Drafting and Review <br />
                    • Regulatory Compliance <br />• Intellectual Property
                    Protection
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[23.75%]  flex  ">
            <div className="w-[50%] h-[100%]  flex items-center justify-center md:justify-start ">
              <div className="w-[70%] h-[80%]  flex flex-col     justify-center ">
                <div className="w-[100%] h-[25%]  flex ">
                  <div className="w-[20%] h-[100%]  flex items-center justify-center">
                    <div className="md:w-[50px] md:h-[50px] w-[20px] h-[20px] bg-[#FEB550] rounded-full flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                      <RiHandCoinLine />
                    </div>
                  </div>
                  <div className="w-[80%] h-[100%]  flex items-center">
                    <h1 className="md:text-[1.5vw] text-[2.2vw] font-[500] tracking-wide">
                      Financial Consultancy:
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] h-[40%]  flex items-center pl-[2vw] ">
                  <p className="md:text-[1.2vw] text-[2vw] font-[600] text-[#979797]">
                    • Accounting and Bookkeeping <br />
                    • Budgeting and Forecasting <br />• Financial Analysis and
                    Reporting
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <img src={homeImg3} className="md:w-[80%] w-[100%]" alt="" />
            </div>
          </div>

          <div className="w-[100% h-[23.75%]  flex ">
            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <img src={homeImg4} className="md:w-[80%] w-[100%]" alt="" />
            </div>

            <div className="w-[50%] h-[100%]  flex items-center  justify-center  ">
              <div className="md:w-[70%] w-[90%] h-[80%]  flex flex-col  justify-center ">
                <div className="w-[100%] h-[25%]  flex">
                  <div className="w-[20%] h-[100%]  flex items-center justify-center">
                    <div className="md:w-[50px] md:h-[50px] w-[20px] h-[20px] bg-[#FEB550] rounded-full flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                      <CgFileDocument />
                    </div>
                  </div>
                  <div className="w-[80%] h-[100%]  flex items-center">
                    <h1 className="md:text-[1.5vw] text-[2.vw] font-[500] tracking-wide">
                    Taxation Services:
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] h-[40%]  flex items-center pl-[2vw] ">
                  <p className="md:text-[1.2vw] text-[2vw] font-[600] text-[#979797]">
                 


                    • Tax Planning and Strategy <br />
                    • Income Tax Return Filing <br />• GST Compliance and Filings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:h-[100vh] h-[30vh]  flex flex-col">
        <div className="w-[100%] h-[70%] flex ">
          <div className="w-[50%] h-[100%]">
            <img src={homeImg5} className="w-[100%] h-[100%]" alt="" />
          </div>
          <div className="w-[50%] h-[100%] bg-[#FFF0DC] flex flex-col items-center justify-center">
            <div className="w-[90%] h-[50%]  flex flex-col justify-center">
              <h1 className="md:text-[2vw] text-[3.5vw] font-[600] tracking-wider">
                We provide support
              </h1>
              <p className="md:text-[1.2vw] text-[1.9vw] tracking-wide font-[400]">
                Our team comprises seasoned professionals with diverse
                backgrounds, each bringing a unique skill set to the table. From
                legal experts and financial analysts to digital strategists and
                taxation specialists, we collaborate to deliver integrated
                solutions tailored to your specific requirements.
              </p>
            </div>
            <div className="w-[90%] h-[20%] ">
              <button className="w-[30%] h-[50%] bg-[#FEB550] rounded-full text-white md:text-[1vw] text-[1.3vw] md:font-[600] font-[400]">
                More About Us
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[30%]  flex flex-col justify-center   pl-[5vw]">
          <h1 className="md:text-[2vw] text-[3vw] font-[600] tracking-wider">
            To Get Your Business To The Next Level
          </h1>
          <p className="md:text-[1vw] text-[1.9vw] font-[500] tracking-wide text-[#7D7A7A]">
            Leverage agile frameworks to provide synopsis for high level <br />
            overviews.Iterative approaches to corporate strategy foster <br />
            collaborative thinking to further the overal.
          </p>
        </div>
      </div>

      <div className="w-[100%] md:h-[100vh] h-[50vh]  flex items-center md:items-start md:justify-start justify-center ">
        <div className="w-[100%] h-[80%] bg-[#D7E9F4] flex">
          <div className="w-[50%] h-[100%]  ">
            <div className="w-[100%] h-[40%]  flex items-center justify-center ">
              <div className="md:w-[70%] md:h-[80%] w-[90%] h-[70%] bg-white flex">
                <div className="w-[40%] h-[100%]  flex items-center justify-center">
                  <div className="md:w-[65%] md:h-[70%] w-[50px] h-[50px] rounded-full border-[#FEB550] md:border-[5px] border-[3px] flex items-center justify-center ">
                    <h5 className="md:text-[1.5vw] text-[2.5vw] font-[800] text-[#FEB550] md:leading-[3vh] leading-3 tracking-widest">
                      102+ <br />
                      <span className="md:text-[1.1vw] text-[1.5vw] font-[700]">Project</span>
                    </h5>
                  </div>
                </div>
                <div className="w-[60%] h-[100%]  flex items-center">
                  <p className="text-[#7D7A7A] md:text-[1.2vw] text-[2vw]">
                    We have
                    <span className="text-[#FEB550]"> 50+ years </span>
                    of <br />
                    experience. We offer <br />
                    Exito Consultancy Services <br /> to you
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[60%]  flex items-center justify-center ">
              <div className="md:w-[70%] w-[90%] h-[100%] flex flex-col items-center justify-evenly  ">
                <div className="md:w-[100%] md:h-[30%]  w-[100%] h-[30%] flex border-b border-black  ">
                  <div className="w-[10%] h-[100%]  flex justify-center pt-[0.5vh]">
                    <div className="md:w-[69%] md:h-[36%] w-[15px] h-[15px] rounded-full flex items-center justify-center bg-black text-white text-[2vw]">
                      <IoMdCheckmark />
                    </div>
                  </div>
                  <div className="w-[90%] h-[100%] ">
                    <div className="w-[100%] h-[40%]  flex items-center">
                      <h1 className="md:text-[1.5vw] text-[2.5vw] font-[600] tracking-wide">
                        Planning
                      </h1>
                    </div>
                    <div className="w-[100%] h-[60%] ">
                      <p className="md:text-[1.1vw] text-[2vw] font-[300] text-[#3E3E3E]">
                        Leverage agile frameworks to provide synopsis for high
                        level overviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] h-[30%]   flex border-b border-black">
                  <div className="w-[10%] h-[100%]  flex justify-center pt-[0.5vh]">
                    <div className="md:w-[69%] md:h-[36%] w-[15px] h-[15px] rounded-full flex items-center justify-center bg-black text-white text-[2vw]">
                      <IoMdCheckmark />
                    </div>
                  </div>
                  <div className="w-[90%] h-[100%] ">
                    <div className="w-[100%] h-[40%]  flex items-center">
                      <h1 className="md:text-[1.5vw] text-[2.5vw] font-[600] tracking-wide">
                        Briefing
                      </h1>
                    </div>
                    <div className="w-[100%] h-[60%] ">
                      <p className="md:text-[1.1vw] text-[2vw] font-[300] text-[#3E3E3E]">
                        Leverage agile frameworks to provide synopsis for high
                        level approaches
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] h-[30%]   flex  ">
                  <div className="w-[10%] h-[100%]  flex justify-center pt-[0.5vh]">
                    <div className="md:w-[69%] md:h-[36%] w-[15px] h-[15px] rounded-full flex items-center justify-center bg-black text-white text-[2vw]">
                      <IoMdCheckmark />
                    </div>
                  </div>
                  <div className="w-[90%] h-[100%] ">
                    <div className="w-[100%] h-[40%]  flex items-center">
                      <h1 className="md:text-[1.5vw] text-[2.5vw] font-[600] tracking-wide">
                        Evaluation
                      </h1>
                    </div>
                    <div className="w-[100%] h-[60%] ">
                      <p className="md:text-[1.1vw] text-[2vw] font-[300] text-[#3E3E3E]">
                        Leverage agile frameworks to provide synopsis for high
                        level overviews Iterative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] h-[100% flex items-center justify-center ">
            <div className="md:w-[90%] md:h-[90%] w-[90%] h-[60%] ">
              <form
                action=""
                className="w-[100%] h-[100%] flex flex-col  drop-shadow-xl bg-white "
              >
                <div className="w-[100%] h-[15%]  flex items-center justify-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Yourname"
                    required
                    className="w-[95%] h-[60%] outline-none border-[2px] border-[#DDDDDD] pl-[1vw] bg-[#F8F8F8] md:text-[1.1vw] text-[2vw]"
                  />
                </div>
                <div className="w-[100%] h-[15%]  flex items-center justify-center">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required
                    className="w-[95%] h-[60%] outline-none border-[2px] border-[#DDDDDD] pl-[1vw] bg-[#F8F8F8] md:text-[1.1vw] text-[2vw]"
                  />
                </div>
                <div className="w-[100%] h-[15%]  flex items-center justify-center">
                  <input
                    name="Number"
                    type="tel"
                    id="phoneNumber"
                    required
                    placeholder="Phone Number"
                    className="w-[95%] h-[60%] outline-none border-[2px] border-[#DDDDDD] pl-[1vw] bg-[#F8F8F8] md:text-[1.1vw] text-[2vw]"
                  />
                </div>
                <div className="w-[100%] h-[30%]  flex items-center justify-center">
                  <textarea
                    name="Description"
                    placeholder="Service Description"
                    className="w-[95%] h-[80%] resize-none pl-[1vw] border-[2px] border-[#DDDDDD] outline-none bg-[#F8F8F8] md:text-[1.1vw] text-[2vw]"
                  ></textarea>
                </div>
                <div className="w-[100%] h-[25%]  flex items-center justify-center">
                  <button className="w-[30%] h-[40%] bg-[#FEB550] rounded-full text-white md:text-[1.2vw] text-[2vw] tracking-widest ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
