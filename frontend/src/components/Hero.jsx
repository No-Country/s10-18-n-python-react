import Img1 from '../assets/images/image1.jpg'
import Img2 from '../assets/images/image2.jpg'
import Img3 from '../assets/images/image3.jpg'
import Img4 from '../assets/images/image4.jpg'
import Life from '../assets/images/life6.png'
/* import Elipse from '../assets/images/elipse.jpg'
import Icon1 from '../assets/images/counter1.png'
import Icon2 from '../assets/images/counter2.png'
import Icon3 from '../assets/images/counter3.png' */
import HouseIcon from '../assets/images/house-icon.png'
import PeopleIcon from '../assets/images/people-icon.png'
import MedkitIcon from '../assets/images/medkit-icon.png'

const Hero = () => {
  return (
    <section className='pt-20'>
      <div className='flex flex-col justify-center  lg:flex-row w-full px-10 lg:px-14 xl:px-20  my-10 '>
        <div className='w-full lg:w-7/12 flex flex-row justify-center  lg:justify-end md:mb-10'> 
          <div className='flex justify-center lg:block lg:relative w-full h-80 lg:h-96'>
            <div className=' absolute z-10 boxTextTitle  lg:left-[20%] top-[40%] ' >
              <h1 className='text-3xl xl:text-4xl font-bold text-center sm:whitespace-nowrap font-baloo2'>Sanatorio Integral de Salud</h1>
              <h2 className='text-2xl font-bold text-center my-5 sm:whitespace-nowrap text-red-500 font-baloo2'>Al cuidado de la salud, siempre.</h2>
            </div>
            <div className='/* blueCircle */ lg:left-[10%] xl:left-[20%] absolute z-0 w-80 h-80 lg:w-96 lg:h-96 bg-sky-200/75 blur-3xl'>.</div>
          </div>
        </div>
        {/* blur se plica a todo el contenido interno, no sirve de background */}
        {/* <div className='w-7/12 mt-10 flex flex-row justify-start ps-10 '>
          <div className='w-96 h-96 overflow-visible bg-elipse bg-cover rounded-full flex items-center ' >
            <div>
            <h1 className='text-4xl font-bold w-100 text-center text-black blur-none whitespace-nowrap'>Sanatorio Integral de Salud</h1>
            <h2 className='text-2xl font-bold text-center my-5 whitespace-nowrap text-red-500'>Al cuidado de la salud, siempre.</h2>
            </div>
          </div>
        </div> */}
        <div className='lg:w-5/12 lg:ps-3 xl:ps-6 flex flex-row justify-center'>
        <img src={Life} className='max-w-full h-auto' alt="imagen de vitalidad" />
        </div>
      </div>
      <div className='relative px-10 md:px-20 xl:px-28 w-full'>
        <div 
          className='
            absolute 
            mx-16 md:mx-20 xl:mx-28 
            z-10 -left-1 -right-1 -top-8  
            rounded-elipse 
            h-6 md:h-12 lg:h-14 xl:h-16
            bg-white'
        > 
        </div>
        <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 justify-items-center my-16 md:my-36  justify-center w-full z-0' > 
          {/* <img className='me-2 w-1/4  hover:scale-125 duration-500' src={Img1} alt="amagen de galeria" />
          <img className='mx-2 w-1/4' src={Img2} alt="amagen de galeria" />
          <img className='mx-2 w-1/4' src={Img3} alt="amagen de galeria" />
          <img className='ms-2 w-1/4 ' src={Img3} alt="amagen de galeria" /> */}
          <img className=' ' src={Img1} alt="amagen de galeria" />
          <img className='' src={Img2} alt="amagen de galeria" />
          <img className=' ' src={Img3} alt="amagen de galeria" />
          <img className='  ' src={Img4} alt="amagen de galeria" />
        </div>
        <div 
          className='
            absolute 
            mx-16 md:mx-20 xl:mx-28 
            z-10 -left-1 -right-1 -bottom-8 
            rounded-elipse 
            h-6 md:h-12 lg:h-14 xl:h-16 
            bg-white'
        > 
        </div>
      </div>
      <div className='mx-10 lg:mx-20 mb-10 pb-5 flex flex-col sm:flex-row  justify-evenly shadow-[0_4px_6px_-1px_rgb(0,0,0,0.35)]'>
        <div className='px-5 lg:px-5 flex flex-col justify-center items-center'>
          <div className='flex flex-row items-center'>
            <img src={PeopleIcon} alt="icono sucursales" className='w-16 md:w-20 lg:w-24 xl:w-28' />
            <div className='px-3'>
              <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-latoBold text-greenBrand' >+120</p>
              <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-latoSemibold'>Médicos</p>
            </div>
          </div>
          <p className='max-w-xs sm:max-w-none md:text-base xl:text-lg text-center'>Atención en consultorio y trabajo interdisciplnario.</p>
        </div>
        <div className='px-5 lg:px-5 flex flex-col justify-center items-center'>
          <div className='flex flex-row justify-center items-center'>
            <img src={HouseIcon} alt="icono sucursales" className='w-10 md:w-12 lg:w-16 xl:w-20' />
            <div className='px-3'>
              <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-greenBrand font-latoBold'>6</p>
              <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-latoSemibold'>Sucursales</p>
            </div>
          </div>
          <p className='max-w-xs sm:max-w-none md:text-base xl:text-lg text-center'>Distribuidas en toda la provincia de Buenos Aires.</p>
        </div>
        <div className='px-3 lg:px-5 flex flex-col justify-center items-center'>
          <div className='flex flex-row items-center'>
            <img src={MedkitIcon} alt="icono sucursales" className='w-10 md:w-12 lg:w-16 xl:w-20' />
            <div className='px-3'>
              <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-latoBold text-greenBrand '>+100</p>
              <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-latoSemibold'>Especialistas</p>
            </div>
          </div>
          <p className='max-w-xs sm:max-w-none md:text-base xl:text-lg text-center'>Especialidades médicas y atención ambulatoria.</p>
        </div>
      </div>
    </section>
    
  )
}

export default Hero