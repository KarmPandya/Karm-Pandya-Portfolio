import React from 'react'
import htmllogo from '../assets/SkillsPhotos/html5-original.svg'
import csslogo from '../assets/SkillsPhotos/css3-original.svg'
import tailwindlogo from '../assets/SkillsPhotos/tailwind.svg'
import bootstraplogo from '../assets/SkillsPhotos/bootstrap.svg'
import jslogo from '../assets/SkillsPhotos/javascript-original.svg'
import reactlogo from '../assets/SkillsPhotos/react-original.svg'
import nodejslogo from '../assets/SkillsPhotos/nodejs-original.svg'
import expresslogo from '../assets/SkillsPhotos/express-original.svg'
import mongodblogo from '../assets/SkillsPhotos/mongodb-original.svg'

const Skills = () => {
    return (

        <div id='skills' class=" flex flex-wrap justify-center gap-4 sm:gap-6 px-4 mb-10">
            <div className="w-full max-w-6xl mx-auto text-center mb-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4">Skills & Technologies</p>
                <p className="text-[#64748b] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
            </div>
            <div className="flex flex-row flex-wrap gap-6 sm:gap-8 lg:gap-10 items-center justify-center w-full max-w-6xl mx-auto">
                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={htmllogo} alt="HTML" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">HTML</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={csslogo} alt="CSS" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">CSS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={tailwindlogo} alt="Tailwind" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">Tailwind</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={bootstraplogo} alt="Bootstrap" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">Bootstrap</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={jslogo} alt="JavaScript" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">JavaScript</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={reactlogo} alt="React JS" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">React JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={nodejslogo} alt="Node JS" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">Node JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={expresslogo} alt="Express JS" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">Express JS</p>
                </div>

                <div class="flex flex-col items-center bg-white rounded-lg shadow-xl p-3 sm:p-4 w-24 sm:w-28 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={mongodblogo} alt="MongoDB" class="h-12 sm:h-16 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-blue-900 text-center text-sm sm:text-base">MongoDB</p>
                </div>

            </div>

        </div>


    )
}

export default Skills