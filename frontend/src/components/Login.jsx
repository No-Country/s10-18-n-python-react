import { IoIosArrowForward } from "react-icons/Io";
import { AiFillEye } from "react-icons/Ai";
import { AiFillEyeInvisible } from "react-icons/Ai";

import { Toaster, toast } from "sonner";

import Img7 from "../assets/images/image7.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/UserSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredentials = {
      username: username,
      password: password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setusername("");
        setPassword("");
        navigate("/dashboard");
      } else {
        toast.error("Credenciales incorrectas");
      }
    });
  };

  return (
    <div className="flex items-center justify-center m-auto my-8">
      <Toaster position="top-center" richColors closeButton />
      <div className="md:w-1/2 rounded-lg gap-4">
        <div className="flex flex-col items-center justify-center mb-8 w-2/5 m-auto">
          <img src={Img7} alt="" className="animate-flotar" />
          <div className="w-full text-center relative before:absolute before:top-[60%] before:left-0 before:w-full before:h-[1px] before:bg-slate-400 before:z-[-1]">
            <h2 className=" w-max m-auto bg-white text-2xl">Iniciar sesión</h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-4/5 m-auto  bg-[#A6DEF7] p-12 rounded-[4rem]"
        >
          <div className=" w-[90%] m-auto flex flex-col gap-12">
            <div
              className={`flex flex-col gap-0 ${
                error && "border-2 border-red-600 rounded-xl border-solid"
              }`}
            >
              <label
                htmlFor="username"
                className="bg-white rounded-t-xl pl-4 border-white font-medium"
              >
                Correo
              </label>
              <input
                autoFocus
                onChange={(e) => setusername(e.target.value)}
                type="text"
                className="p-2 border-white rounded-b-xl outline-none"
                placeholder="johndoe@username.com"
                id="username"
                required
              />
            </div>
            <div
              className={`flex flex-col gap-0 ${
                error && "border-2 border-red-600 rounded-xl border-solid"
              }`}
            >
              <label
                htmlFor="password"
                className="bg-white rounded-t-xl pl-4 border-white font-medium"
              >
                Contraseña
              </label>
              <div className="w-full flex bg-white rounded-b-xl font-black">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  className="p-2 w-full border-white  rounded-b-xl outline-none"
                  placeholder="***********"
                  id="password"
                  required
                />
                <div
                  className="flex justify-center cursor-pointer  items-center p-2 text-2xl"
                  onClick={() => setShow(!show)}
                >
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#DC4928] hover:bg-[#d15f45] md:w-48 p-4 rounded text-white font-medium m-auto flex  justify-around items-center group/edit"
            >
              <span>{loading ? "Cargando..." : "Ingresar"}</span>
              <span className="text-xl group-hover/edit:translate-x-4 duration-300">
                <IoIosArrowForward />
              </span>
            </button>
            {/* {error && <div>Credenciales incorrectas</div>} */}
            <span className="text-center text-xs">
              Al registrarse en Sanatorio Integral de Salud, significa que
              acepta nuestra Política de privacidad y Términos de servicio
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
