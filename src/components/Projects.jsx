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
    <div id="projects" className=" bg-[#ffffff] text-white py-16 sm:py-20 lg:py-24 flex flex-col px-4">
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-[#1e293b] text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">Projects</p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Project 1 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-[#eeeeee] p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={foodieshubphoto1} alt="" className="h-32 sm:h-40 w-full rounded-xl object-cover" />
              <p className="my-2 sm:my-3 text-xs sm:text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-2 sm:my-3 text-xl sm:text-2xl font-bold text-[#1e293b]">Foodie's Hub</p>
              <p className="my-2 sm:my-3 text-[#1e293b] text-sm sm:text-base">
                Foodie's Hub is a React and Tailwind-based web app where users explore, cook, and enjoy diverse global recipes.
              </p>
              <button onClick={openproject1} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition text-sm sm:text-base" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-[#eeeeee] p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={mosointeriorphoto2} alt="" className="h-32 sm:h-40 w-full rounded-xl object-cover" />
              <p className="my-2 sm:my-3 text-xs sm:text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-2 sm:my-3 text-xl sm:text-2xl font-bold text-[#1e293b]">Moso Interior</p>
              <p className="my-2 sm:my-3 text-[#1e293b] text-sm sm:text-base">
                Moso Interior is a sleek React and Tailwind website that beautifully showcases elegant home decor and furniture designs.
              </p>
              <button onClick={openproject2} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition text-sm sm:text-base" >
                View Project
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-[#eeeeee] p-4 sm:p-6 rounded-xl flex-1 w-full">
            <div>
              <img src={scenicphoto1} alt="" className="h-32 sm:h-40 w-full rounded-xl object-cover" />
              <p className="my-2 sm:my-3 text-xs sm:text-sm text-[#1e293b]">Personal Project</p>
              <p className="my-2 sm:my-3 text-xl sm:text-2xl font-bold text-[#1e293b]">Scenic</p>
              <p className="my-2 sm:my-3 text-[#1e293b] text-sm sm:text-base">
                Scenic is a sleek media agency website built with React and Tailwind, showcasing creative services and stunning visuals.
              </p>
              <button onClick={openproject3} className="text-white bg-blue-700 p-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition text-sm sm:text-base" >
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