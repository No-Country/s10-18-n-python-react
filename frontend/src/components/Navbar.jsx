import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPageBtn, setCurrentPageBtn] = useState("HOME");

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPageBtn("DASHBOARD");
    } else {
      setCurrentPageBtn("HOME");
    }
  }, [location]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handlePage = () => {
    if (currentPageBtn === "HOME") {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <nav className="w-full bg-lightBlue flex p-3 justify-between items-center">
      <img src={logo} alt="" className="w-[5rem]" />
      {user ? (
        <div className="flex flex-row gap-5">
          <p className="font-latoSemibold p-3">{user.email}</p>

          <button
            className="font-latoBold border border-[rgb(220,73,40)] border-solid rounded-3xl py-1 px-3 hover:scale-95 transition-all hover:bg-orange hover:border-none hover:text-white"
            onClick={handlePage}
          >
            {currentPageBtn}
          </button>
          <button
            className="font-latoBold border border-[rgb(220,73,40)] border-solid rounded-3xl py-1 px-3 hover:scale-95 transition-all hover:bg-orange hover:border-none hover:text-white"
            onClick={handleLogout}
          >
            CERRAR SESIÓN
          </button>
        </div>
      ) : (
        <NavLink to="/login">
          <button className=" bg-orange text-white p-1 px-4 rounded-3xl text-sm">
            INICIAR SESIÓN
          </button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
