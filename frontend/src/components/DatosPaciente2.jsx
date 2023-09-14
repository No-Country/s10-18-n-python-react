import icono from '../assets/images/bg.png'
import calendar from '../assets/images/calendar.png'

const DatosPaciente2 = () => {
    return(

        <div className='flex flex-col items-center w-full h-full'>
            
            <div className=" justify-center gap-10 border-2 border-black  w-[1500px] h-[72px] bg-[#3E36B0] relative">
                <ul className="flex flex-row gap-20 ml-[450px] text-justify text-xl pt-5">
                    <li className='z-10'>Paciente</li>
                    <li className='text-white'>Consultas</li>
                    <li className='text-white'>Estudios</li>
                </ul>
                    <img src={icono} alt="" className='absolute left-[400px] top-[9px]'/>
            </div>

            <div className='border-[1px] border-black mt-20'>
                <hr className='w-[1500px] bg-black'/>
            </div>
        
            <div className='mr-[950px] mt-20'>
                <h2>Datos del Paciente</h2>
            </div>

            <div className=' w-[1078px] h-[480px] flex flex-row'>
                <div className='w-[50%]'>
                    <div className=' mt-10'>
                        <h2>Apellido</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>Nombre</h2>
                        <input type="text" className='border-2 rounded-md  w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>DNI</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>O. Social</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                </div>

                <div className='w-[50%]'>
                    <div className='mt-10 relative'>
                        <img src={calendar} alt="" className='absolute ml-96 mt-9'/>
                        <h2>Fecha de Nacimiento</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>Teléfono</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>Email</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                    <div className=' mt-10'>
                        <h2>Direccion</h2>
                        <input type="text" className='border-2 rounded-md w-[414px] h-10'/>
                    </div>
                </div>

            </div>

            <div className='flex justify-center bg-[#5F8D4E] border-2 border-[#5F8D4E] rounded-md w-[110px] h-[43px] ml-[730px]'>
                <button>Guardar</button>
            </div>

        </div>

    )
}

export default DatosPaciente2