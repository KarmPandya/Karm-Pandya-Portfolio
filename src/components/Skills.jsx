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
import typescriptlogo from '../assets/SkillsPhotos/typescript-original.svg'
import nextjslogo from '../assets/SkillsPhotos/nextjs-original.svg'
import postmanlogo from '../assets/SkillsPhotos/postman-original.svg'
import expresslogoDark from '../assets/SkillsPhotos/express-originalDark.svg'

const Skills = () => {
    return (

        <div id='skills' class=" flex flex-wrap justify-center gap-4 sm:gap-6 px-4 mb-10">
            <div className="flex flex-row flex-wrap gap-6 sm:gap-8 lg:gap-10 items-center justify-center w-full max-w-4xl mx-auto">
                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={htmllogo} alt="HTML" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">HTML</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={csslogo} alt="CSS" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">CSS</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={tailwindlogo} alt="Tailwind" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Tailwind</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={bootstraplogo} alt="Bootstrap" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Bootstrap</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={jslogo} alt="JavaScript" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">JavaScript</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={reactlogo} alt="React JS" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">React JS</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={nextjslogo} alt="Next.js" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Next.js</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={nodejslogo} alt="Node JS" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Node JS</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={expresslogoDark} alt="Express JS" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Express JS</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={mongodblogo} alt="MongoDB" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">MongoDB</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={typescriptlogo} alt="TypeScript" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">TypeScript</p>
                </div>

                <div class="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-4 sm:p-5 w-28 sm:w-32 hover:scale-110 cursor-pointer transition-transform hover:shadow-2xl">
                    <img src={postmanlogo} alt="Postman" class="h-14 sm:h-18 hover:animate-pulse" />
                    <p class="mt-2 font-bold text-white text-center text-base sm:text-lg">Postman</p>
                </div>
            </div>
        </div>


    )
}

export default Skills