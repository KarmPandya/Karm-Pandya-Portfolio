import React from 'react'
// import introphoto from '../assets/introphoto.webp'
import introphoto from '../assets/introphoto1.avif'
import cv from '../assets/Karm Pandya Resume.pdf'
import '../App.css'

const Intro = () => {

    const downloadcv = () => {
        window.open(cv)
    }

    return (
        <div id='home' className='flex flex-row justify-center items-center min-h-screen h-[120vh] w-full' style={{ backgroundImage: `url(${introphoto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 text-white w-full max-w-6xl pt-5">

                <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start flex-1">
                    <p className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold my-3 name-class animate-fade-in-up'>
                        KARM PANDYA
                    </p>
                    <p className='my-4 text-2xl sm:text-3xl lg:text-4xl font-semibold animate-fade-in-up'>MERN Developer</p>
                    <a href={cv} download>
                        <button onClick={downloadcv} className="mt-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-blue-700 text-white font-bold text-base sm:text-lg lg:text-xl shadow-2xl hover:bg-blue-800 transition-all duration-300 border-2 border-white/10 hover:border-white flex items-center gap-2 sm:gap-3 hover:cursor-pointer animate-fade-in-up" >
                            <i className="fa-solid fa-download"></i>
                            Download CV
                        </button>
                    </a>
                </div>

            </div>


            <style>
                {`
                @keyframes fade-in-down {
                    0% { 
                        opacity: 0; 
                        transform: translateY(-40px);
                    }
                    100% 
                    { 
                        opacity: 1; 
                        transform: translateY(0);
                     }
                }
                     
                @keyframes fade-in-up {
                    0% {
                         opacity: 0; 
                        transform: translateY(40px);
                        }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0);
                        }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1.5s ;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.5s ;
                }
                .name-class {
                    color: white;
                }

                `}
            </style>
        </div>
    )
}

export default Intro