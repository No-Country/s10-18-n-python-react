import doctor from "../assets/images/doctoraprofile.png"

const Profile = () => {
  return (
    <main className='w-full flex flex-col gap-3 '>
      <nav className='mr-auto'>
        <button><img src="" alt="Menu" /></button>
      </nav>
      <section className='mx-auto flex flex-col gap-5 justify-between items-start'>
        <header className=' text-amber-500 text-lg'>Perfil</header>
        <div className='flex gap-3 justify-between items-start'>
          <figure><img src={doctor} alt="" /></figure>
          <div className='flex flex-col gap-5 items-start justify-between'>
            <p>Lina Mantillas</p>
            <p>Pediatra</p>
            <p>351 959 6666</p>
            <p>linasantillan@gmail.com</p>
          </div>
        </div>
        <button className='ml-auto flex gap-2 justify-between items-center p-3 px-5 bg-amber-500'>Editar<img src="" alt="flecha" /></button>
      </section>
    </main>
  )
}

export default Profile