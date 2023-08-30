import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
    <nav className='w-full flex p-3 justify-between items-center'>
      <img src={logo} alt="" className='w-[5rem]' />
      <NavLink to='/login'>
        <button className=' bg-orange-400 p-1 px-4 rounded-3xl text-sm'>INICIAR SESIÓN</button>
      </NavLink>
    </nav>
  )
}

export default Navbar