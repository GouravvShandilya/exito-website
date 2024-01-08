import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="w-[100vw] h-[10vh]  flex">
      <div className="w-[45%] h-[100%] ">
        <div className="w-[20%] h-[100%]  flex items-center justify-center">
          <img src={logo} className="w-[40%]" alt="" />
        </div>
      </div>
      <div className="w-[55%] h-[100%]  flex justify-center">
        <div className="w-[90%] h-[100%] bg-red-700 flex">
        <div className="w-[15%] h-[100%] bg-orange-100" ></div>
        <div className="w-[15%] h-[100%] bg-orange-200" ></div>
        <div className="w-[15%] h-[100%] bg-orange-300" ></div>
        <div className="w-[15%] h-[100%] bg-orange-400" ></div>
        <div className="w-[15%] h-[100%] bg-orange-500" ></div>
        <div className="w-[25%] h-[100%] bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
