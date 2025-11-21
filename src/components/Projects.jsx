import React from 'react'
import foodieshubphoto1 from '../assets/ProjectPhotos/foodieshubphoto1.png'
import mosointeriorphoto2 from '../assets/ProjectPhotos/mosointeriorphoto2.png'
import scenicphoto1 from '../assets/ProjectPhotos/scenicphoto1.png'

const Projects = () => {

  const openproject1 = () => {
    window.open("https://github.com/KarmPandya007/Foodies-Hub-React-Tailwind")
  }
  const openproject2 = () => {
    window.open("https://github.com/KarmPandya007/Moso-Interior-React-Tailwind")
  }
  const openproject3 = () => {
    window.open("https://github.com/KarmPandya007/Scenic-React-Tailwind")
  }

  return (
    <div id="projects" className=" bg-gray-900 text-white py-16 sm:py-20 lg:py-24 flex flex-col px-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-left mb-8 lg:mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Projects</p>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl">A showcase of my recent work and personal projects</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Project 1 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-gray-800 p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={foodieshubphoto1} alt="" className="h-36 sm:h-44 lg:h-48 w-full rounded-xl object-cover" />
              <p className="my-3 sm:my-4 text-sm sm:text-base text-gray-300">Personal Project</p>
              <p className="my-3 sm:my-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Foodie's Hub</p>
              <p className="my-3 sm:my-4 text-white text-sm sm:text-base lg:text-lg">
                A React & Tailwind web app for exploring and cooking global recipes.
              </p>
              <button onClick={openproject1} className="text-white bg-blue-700 py-2 px-3 rounded-xl hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-gray-800 p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={mosointeriorphoto2} alt="" className="h-36 sm:h-44 lg:h-48 w-full rounded-xl object-cover" />
              <p className="my-3 sm:my-4 text-sm sm:text-base text-gray-300">Personal Project</p>
              <p className="my-3 sm:my-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Moso Interior</p>
              <p className="my-3 sm:my-4 text-white text-sm sm:text-base lg:text-lg">
                A modern React & Tailwind website showcasing home decor and furniture.
              </p>
              <button onClick={openproject2} className="text-white bg-blue-700 py-2 px-3 rounded-xl hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-gray-800 p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={scenicphoto1} alt="" className="h-36 sm:h-44 lg:h-48 w-full rounded-xl object-cover" />
              <p className="my-3 sm:my-4 text-sm sm:text-base text-gray-300">Personal Project</p>
              <p className="my-3 sm:my-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Scenic</p>
              <p className="my-3 sm:my-4 text-white text-sm sm:text-base lg:text-lg">
                A creative media agency website built with React and Tailwind CSS.
              </p>
              <button onClick={openproject3} className="text-white bg-blue-700 py-2 px-3 rounded-xl hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg" >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects