import React from 'react'
import foodieshubphoto1 from '../assets/ProjectPhotos/foodieshubphoto1.png'
import mosointeriorphoto2 from '../assets/ProjectPhotos/mosointeriorphoto2.png'
import scenicphoto1 from '../assets/ProjectPhotos/scenicphoto1.png'
import bookhivephoto from '../assets/ProjectPhotos/BookHive Photo .png'

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
  const openproject4 = () => {
    window.open("https://book-hive-frontend-library-manageme.vercel.app/")
  }

  return (
    <div id="projects" className=" bg-[#ffffff] text-[#0f172a] py-16 sm:py-20 lg:py-24 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4">Projects</p>
          <p className="text-[#64748b] text-sm sm:text-base lg:text-lg">A showcase of my recent work and personal projects</p>
        </div>

        <div className="flex flex-wrap -mx-3 gap-y-6 lg:gap-y-8">
          {/* Project 1 */}

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
            <div className="bg-[#f3f4f6] p-6 rounded-xl flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition items-stretch">
              <div>
                <img src={bookhivephoto} alt="Book Hive" className="w-full h-44 sm:h-48 rounded-lg object-cover mb-4" />
                <p className="text-sm text-[#64748b]">Deployed Project</p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a]">Book Hive</p>
                <p className="mt-3 text-sm sm:text-base text-[#334155]">A library-management frontend demonstrating CRUD operations and UI patterns.</p>
              </div>
              <div className="mt-6">
                <button onClick={openproject4} className="w-full text-white bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg">View Project</button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
            <div className="bg-[#f3f4f6] p-6 rounded-xl flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition items-stretch">
              <div>
                <img src={foodieshubphoto1} alt="Foodie's Hub" className="w-full h-44 sm:h-48 rounded-lg object-cover mb-4" />
                <p className="text-sm text-[#64748b]">Personal Project</p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a]">Foodie's Hub</p>
                <p className="mt-3 text-sm sm:text-base text-[#334155]">A React & Tailwind web app for exploring and cooking global recipes.</p>
              </div>
              <div className="mt-6">
                <button onClick={openproject1} className="w-full text-white bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg">View Project</button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
            <div className="bg-[#f3f4f6] p-6 rounded-xl flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition items-stretch">
              <div>
                <img src={mosointeriorphoto2} alt="Moso Interior" className="w-full h-44 sm:h-48 rounded-lg object-cover mb-4" />
                <p className="text-sm text-[#64748b]">Personal Project</p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a]">Moso Interior</p>
                <p className="mt-3 text-sm sm:text-base text-[#334155]">A modern React & Tailwind website showcasing home decor and furniture.</p>
              </div>
              <div className="mt-6">
                <button onClick={openproject2} className="w-full text-white bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg">View Project</button>
              </div>
            </div>
          </div>

        </div>


        <div className="flex flex-wrap -mx-3 gap-y-6 lg:gap-y-8">

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
            <div className="bg-[#f3f4f6] p-6 rounded-xl flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition items-stretch">
              <div>
                <img src={scenicphoto1} alt="Scenic" className="w-full h-44 sm:h-48 rounded-lg object-cover mb-4" />
                <p className="text-sm text-[#64748b]">Personal Project</p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a]">Scenic</p>
                <p className="mt-3 text-sm sm:text-base text-[#334155]">A creative media agency website built with React and Tailwind CSS.</p>
              </div>
              <div className="mt-6">
                <button onClick={openproject3} className="w-full text-white bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 cursor-pointer transition text-base sm:text-lg">View Project</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects