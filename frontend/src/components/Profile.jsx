import doctor from "../assets/images/doctoraprofile.png"
import arrow from "../assets/images/arrow.png"
import menuBurger from "../assets/images/menuburger.png"
import circulo from '../assets/Group_1000000929-removebg-preview2.png'

const Profile = () => {
  return (
    <main className='w-full flex flex-col gap-3 relative '>
      <nav className='mr-auto'>
        <button><img src={menuBurger} alt="Menu" className='w-[1.5rem]' /></button>
      </nav>
      <section className='mx-auto flex flex-col gap-5 justify-between items-start '>
        <header className='font-baloo2 text-orange text-xl font-black'>Perfil</header>

        <img src={circulo} alt="detalle gráfico azul redondo de varios colores" className='absolute -left-2 w-[3.5rem]' />

        <div className='flex gap-10 justify-between items-center'>
          <figure><img src={doctor} alt="" className='w-[12rem]' /></figure>
          <div className='flex flex-col gap-5 items-start justify-between'>
            <p className=' text-green font-baloo2 font-bold'>Lina Santillán</p>
            <p className=' font-latoMedium'>Pediatra</p>
            <p className=' font-latoMedium'>351 959 6666</p>
            <p className=' font-latoMedium'>linasantillan@gmail.com</p>
          </div>
        </div>
        <button className='ml-auto flex gap-2 justify-between items-center p-2 px-12 mr-2 bg-orange text-white text-sm group'>
          Editar
          <img src={arrow} alt="flecha" className='w-[1rem] group-hover:translate-x-2 transition-all' />
        </button>
      </section>
    </main>
  )
}

export default Profile