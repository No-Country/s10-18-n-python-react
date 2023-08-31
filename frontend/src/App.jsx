import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Appointments from "./components/Appointments";
import Welcome from "./components/welcome/Welcome.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
