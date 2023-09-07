import { IoIosArrowForward } from "react-icons/Io"
import { AiFillEye } from "react-icons/Ai"
import { AiFillEyeInvisible } from "react-icons/Ai"

import { Toaster, toast } from "sonner"

import Img7 from "../assets/images/image7.png"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/UserSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let userCredentials = {
      username: username,
      password: password,
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setUsername("")
        setPassword("")
        navigate("/dashboard")
      } else {
        toast.error("Credenciales incorrectas")
      }
    })
  }

  return (
    <main className="flex flex-col items-center justify-center mt-6 mb-10 gap-10">
      <Toaster position="top-center" richColors closeButton />
      <div className="flex flex-col items-center justify-center gap-3 mx-auto">
        <img src={Img7} alt="" className="animate-flotar w-1/2" />
        <div className="w-full text-center relative before:absolute before:top-[60%] before:left-0 before:w-full before:h-[1px] before:bg-lightGray before:z-[-1]">
          <h2 className=" w-max m-auto bg-white font-baloo2 font-bold text-2xl">Iniciar sesión</h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-[90%] sm:w-[70%] md:max-w-lg mx-auto px-8 pt-7 pb-10 md:py-10 rounded-[2rem] bg-lightBlue"
      >
        <div className={`flex flex-col gap-0 ${error && "border-2 border-red-600 rounded-xl border-solid"}`}>
          <label className="bg-white border-white text-black rounded-t-xl font-latoMedium text-start px-2 pt-2" htmlFor="username">
            EMAIL
          </label>
          <input
            className="pb-3 px-3 border-white rounded-b-xl outline-none text-base text-lightGray"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="johndoe@username.com"
            autoFocus
            required
          />
        </div>
        <div className={`flex flex-col gap-0 ${error && "border-2 border-red-600 rounded-xl border-solid"}`}>
          <label className="bg-white border-white text-black rounded-t-xl font-latoMedium text-start px-2 pt-2" htmlFor="password">
            CONTRASEÑA
          </label>
          <div className="w-full flex bg-white rounded-b-xl font-black">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              className="pb-3 px-3 w-full border-white rounded-b-xl outline-none text-base text-lightGray"
              placeholder="***********"
              id="password"
              required
            />
            <span
              className="flex justify-center cursor-pointer items-center pb-3 px-4 text-2xl text-slate-400"
              onClick={() => setShow(!show)}
            >
              {show ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange hover:bg-[#e05536] md:w-48 p-2.5 px-8 rounded text-white font-medium m-auto flex justify-center items-center transition-colors group/edit"
        >
          <span className=' font-baloo2 text-white'>{loading ? "Cargando..." : "Ingresar"}</span>
          <span className="text-xl group-hover/edit:translate-x-4 duration-300">
            <IoIosArrowForward />
          </span>
        </button>
        <span className="text-center text-xs text-lightGray">
          Al registrarse en Sanatorio Integral de Salud, significa que
          acepta nuestra Política de privacidad y Términos de servicio
        </span>
      </form>
    </main>
  )
}

export default Login
