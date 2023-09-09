import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Appointments from "./components/Appointments";
import Welcome from "./components/welcome/Welcome.jsx";
import Patients from "./components/Patients";
import ErrorPage from "./components/ErrorPage";
import { useEffect } from "react";
import { localUser } from "./store/UserSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    function getUser() {
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        dispatch(localUser(user));
      } else {
        user = null;
      }
    }
    getUser();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen justify-between">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/dashboard" element={<Welcome />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
