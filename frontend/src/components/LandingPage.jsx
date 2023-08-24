import Hero from "./Hero"
/* import Profile from "./Profile" */
import Footer from "./Footer"
import NavBar from "./Navbar"
import Sucursales from "./sucursales/Sucursal"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sucursales />
      {/* <Profile /> */}
      <Footer />
    </>
  )
}

export default LandingPage