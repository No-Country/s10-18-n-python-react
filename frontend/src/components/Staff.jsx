import foto from '../assets/59e6de97da95c93020cb001ee8246d14.png'
import foto1 from '../assets/image 15.png'
import foto2 from '../assets/image 17.png'
import foto3 from '../assets/image 12.png'
import foto4 from '../assets/image 14.png'
import foto5 from '../assets/image 13.png'
import foto6 from '../assets/image 16.png'
import foto7 from '../assets/image 19.png'
import ciruclo from '../assets/Group_1000000929-removebg-preview2.png'
import ciruclo2 from '../assets/Group_1000000929-removebg-preview.png'

const Staff = () => {
    return(
        <>
        <div className='flex justify-center  '>
            <div className="flex justify-center h-[888px] w-[1300px] mt-[100px] bg-[#A6DEF7] rounded-[120px] z-1 relative">
                <div className="mt-[20px]">
                    <div>
                        <p className='font-bold text-[24px] text-[#DC4928]'>Staff</p>
                        <h2 className='text-[40px] font-bold'>Nuestros profesionales</h2>
                        <p className='text-[14px] text-[#737373]'>Excelencia profesional que caracteriza los servicios brindados  a nuestros pacientes.</p>
                    </div>
                    <div className="  flex flex-wrap justify-center gap-[30px]">
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto1} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto2} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto3} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                    </div>

                    <div className="  flex flex-wrap justify-center gap-[30px]">
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto4} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto5} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto6} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                        <div className='bg-white mt-4 pt-4 pl-4 pr-4 pb-4 rounded-lg flex flex-col text-center shadow-2xl'>
                            <img src={foto7} alt="" className='h-[128px] w-[184px] rounded-xl mt-6 mb-16'/>
                            <p>Roberto Conde</p>
                            <p>Director Medico</p>
                        </div>
                    </div>
                </div>

                <div className=''>

                    <div className='absolute left-0 bottom-[750px] '>
                        <img src={ciruclo} alt="" className=''/>
                    </div>

                    <div className='absolute top-[750px] right-0'>
                        <img src={ciruclo2} alt="" className=''/>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Staff