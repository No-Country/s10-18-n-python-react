
import {IoIosArrowForward} from "react-icons/Io"


const Login = () => {
  return (
    <div className="flex items-center justify-center m-auto my-8">
      <div className="md:w-1/2 rounded-lg gap-4">
        <div className="flex flex-col items-center justify-center mb-8 w-2/5 m-auto">
            <img src="../../src/assets/images/image7.png" alt="" className="animate-flotar" />
            <div className="w-full text-center relative before:absolute before:top-[60%] before:left-0 before:w-full before:h-[1px] before:bg-slate-400 before:z-[-1]">
              <h2 className=" w-max m-auto bg-white text-2xl">Iniciar sesión</h2>
            </div>
        </div>
        <form className="w-4/5 m-auto  bg-[#A6DEF7] p-12 rounded-[4rem]">
            <div className=" w-[90%] m-auto flex flex-col gap-12">
              <label  className="flex flex-col gap-0">
                <span className="bg-white rounded-t-xl pl-4 border-white font-medium">EMAIL</span>
                <input type="text" className="p-2 border-white rounded-b-xl outline-none" placeholder="johndoe@email.com"/>
              </label>
              <label  className="flex flex-col">
                <span className="bg-white rounded-t-xl pl-4 border-white font-medium">CONTRASEÑA</span>
                <input type="password" className="p-2 border-white rounded-b-xl outline-none" placeholder="***********"/>
              </label>
              <button type="submit" className="bg-[#DC4928] hover:bg-[#d15f45] md:w-48 p-4 rounded text-white font-medium m-auto flex  justify-around items-center group/edit">
              <span>Ingresar</span>
              <span className="text-xl group-hover/edit:translate-x-4 duration-300"><IoIosArrowForward/></span>
              </button>           
              <span className="text-center text-xs">Al registrarse en Sanatorio Integral de Salud, significa que acepta nuestra Política de privacidad y Términos de servicio</span>
            </div>
        </form> 
        
      </div>
    </div>
  )
}

export default Login