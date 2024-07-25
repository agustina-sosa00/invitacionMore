import React from 'react'
import Countdown from '../../components/Contador/Contador';
import './Home.css'

export const Home: React.FC = () => {
    const targetDate = new Date('2024-09-28T23:59:59');

    return (
      <div className='w-full min-h-screen flex flex-col justify-center items-center divHome'>
        <p className='m-2 font-texto text-violetaOscuro text-[22px] md:text-[27px] lg:text-[30px]'>28/09/2024</p>
        <h3 className='m-2 font-texto text-violetaOscuro text-[22px] md:text-[40px] lg:text-[50px] text-center'>Mis 15 Años</h3>
        <h1 className='text-[70px] md:text-[100px] lg:text-[155px] text-violeta font-titulo m-3'>Morena</h1>
        <p className=' font-texto text-violetaOscuro text-[22px]  md:text-[27px] lg:text-[30px]'>Faltan:</p>

        <Countdown targetDate={targetDate}/>
        
      </div>
    );
}
