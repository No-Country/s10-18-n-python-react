import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/Ai";
import { VscCalendar } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import imgSucursales from "../assets/images/sucursales/imgSucursales.png";
import { useLocation, useNavigate } from "react-router-dom";

const MenuHamburger = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute w-16 md:w-20 h-1/2 left-0">

        <div onClick={()=>setOpen(!open)} className=" w-full flex justify-center items-center text-xl md:text-5xl py-2 hover:cursor-pointer">
            {open ? <GrClose/> : <GiHamburgerMenu/> }
        </div>
        <div className={`w-full h-full text-white absolute transition-all duration-500 ease-in ${open ? "left-1" : "left-[-5rem]"} bg-[#3E36B0] rounded-3xl flex flex-col items-center gap-4`}>
           <div><img className="p-4" src={imgSucursales} alt="logo" /></div>
           <button className={`p-2 md:p-4 text-2xl rounded-2xl ${location.pathname ==="/dashboard" ? "bg-gradient-to-r from-[#85cdf9] via-[#587281] to-[#434747]" : "bg-transparent"}`} onClick={()=>navigate("/dashboard")}><AiOutlineUser/></button>
           <button className={`p-2 md:p-4 text-2xl rounded-2xl ${location.pathname ==="/appointment" ? "bg-gradient-to-r from-[#85cdf9] via-[#587281] to-[#434747]" : "bg-transparent"}`} onClick={()=>navigate("/appointment")}><VscCalendar/></button>
           <button className={`p-2 md:p-4 text-2xl rounded-2xl ${location.pathname ==="/patients" ? "bg-gradient-to-r from-[#85cdf9] via-[#587281] to-[#434747]" : "bg-transparent"}`} onClick={()=>navigate("/patients")}><FaUsers/></button>
        </div>
      </div>
  );
};

export default MenuHamburger;
