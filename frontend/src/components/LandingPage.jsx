import Hero from "./Hero";
import Sucursales from "./sucursales/Sucursal";
import Staff from "./Staff";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Hero />
        <Staff />
        <Sucursales />
      </div>
    </>
  );
};

export default LandingPage;
