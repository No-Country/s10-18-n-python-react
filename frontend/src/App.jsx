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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
