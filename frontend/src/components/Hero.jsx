import Img1 from '../assets/images/image1.jpg'
import Img2 from '../assets/images/image2.jpg'
import Img3 from '../assets/images/image3.jpg'
import Img4 from '../assets/images/image4.jpg'
import Life from '../assets/images/logo.png'
import HouseIcon from '../assets/images/house-icon.png'
import PeopleIcon from '../assets/images/people-icon.png'
import MedicKitIcon from '../assets/images/medkit-icon.png'

const Hero = () => {
  return (
    <div className='mt-10 sm:mt-20'>
      <section className='w-full flex flex-row justify-evenly items-center px-9 my-14 md:my-10'>
        <div className='flex items-center'>
          <div className='flex flex-col justify-center items-center z-30'>
            <h1 className=' text-lg md:text-3xl xl:text-4xl text-center font-bold font-baloo2 sm:whitespace-nowrap'>Sanatorio Integral de Salud</h1>
            <h2 className=' text-base md:text-2xl text-center font-bold font-baloo2 text-red-500 sm:whitespace-nowrap'>Al cuidado de la salud, siempre.</h2>
          </div>
          <span className='HeroBlur content-["."] left-[10%] xl:left-[20%] absolute'></span>
        </div>
        <img src={Life} alt="imagen de vitalidad" className='w-[8rem] md:w-[14rem] h-auto' />
      </section>
      <section className='relative px-8 md:px-20 xl:px-28 w-full'>
        <div
          className='
            absolute 
            mx-8 md:mx-20 lg:mx-24 xl:mx-28 
            z-10 
            -left-7 sm:-left-5 md:-left-4 lg:-left-3 xl:-left-2
            -right-7 sm:-right-5  md:-right-4 lg:-right-3 xl:-right-2 
            -top-6 sm:-top-6 md:-top-8
            rounded-elipse 
            h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16
            bg-white'

        >
        </div>
        <div className='flex flex-row justify-items-center my-16 md:my-36 justify-center w-full z-0' >
          <img className='me-1 md:me-2 w-1/4 md:w-1/6 ' src={Img1} alt="imagen de galería" />
          <img className='me-1 md:mx-2 w-1/4 md:w-1/6' src={Img2} alt="imagen de galería" />
          <img className='me-1 md:mx-2 w-1/4 md:w-1/6' src={Img3} alt="imagen de galería" />
          <img className='ms-1 md:ms-2 w-1/4 md:w-1/6 ' src={Img4} alt="imagen de galería" />
        </div>
        <div
          className='
            absolute 
            mx-8 md:mx-20 xl:mx-28 
            z-10 
            -left-7 sm:-left-5 md:-left-4 xl:-left-2
            -right-7 sm:-right-5  md:-right-4 xl:-right-2 
            -bottom-6 sm:-bottom-6 md:-bottom-8
            rounded-elipse 
            h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 
            bg-white'
        >
        </div>
      </section>
      <section className='flex flex-row justify-between items-center gap-5 mx-5 mb-10'>
        <div className='flex flex-col gap-2 justify-start items-center'>
          <span className='flex flex-row items-center gap-4'>
            <img src={PeopleIcon} alt="icono sucursales" className='w-[40px] h-auto md:w-[60px]' />
            <p className='text-base md:text-2xl mt-2 font-latoBold text-greenBrand' >+120</p>
          </span>
          <p className='text-base lg:text-3xl font-baloo2 font-semibold text-black'>Médicos</p>
          <p className='text-sm md:text-base xl:text-lg text-center m-0'>Atención en consultorio y trabajo interdisciplinario.</p>
        </div>
        <div className='flex flex-col gap-2 justify-start items-center'>
          <span className='flex flex-row items-center gap-4'>
            <img src={HouseIcon} alt="icono sucursales" className='w-[40px] h-auto md:w-[45px]' />
            <p className='text-base md:text-2xl mt-2 font-latoBold text-greenBrand' >6</p>
          </span>
          <p className='text-base lg:text-3xl font-baloo2 font-semibold text-black'>Sucursales</p>
          <p className='text-sm md:text-base xl:text-lg text-center m-0'>Distribuidas en toda la provincia de Buenos Aires.</p>
        </div>
        <div className='flex flex-col gap-2 justify-start items-center'>
          <span className='flex flex-row items-center gap-4'>
            <img src={MedicKitIcon} alt="icono sucursales" className='w-[40px] h-auto md:w-[45px]' />
            <p className='text-base md:text-2xl mt-2 font-latoBold text-greenBrand' >+100</p>
          </span>
          <p className='text-base lg:text-3xl font-baloo2 font-semibold text-black'>Especialistas</p>
          <p className='text-sm md:text-base xl:text-lg text-center m-0'>Especialidades médicas y atención ambulatoria.</p>
        </div>
      </section>
    </div>

  )
}

export default Hero