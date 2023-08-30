import Hero from "./Hero"
/* import Profile from "./Profile" */
import Footer from "./Footer"
import NavBar from "./Navbar"
import Sucursales from "./sucursales/Sucursal"
import Staff from "./Staff"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Staff />
      <Sucursales />
      {/* <Profile /> */}
      <Footer />
    </>
  )
}

export default LandingPage