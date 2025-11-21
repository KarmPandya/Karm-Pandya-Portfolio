import React from 'react'

const About = () => {
  return (
    <div id="about" className=" bg-gray-900 text-white pt-16 sm:pt-20 lg:pt-30 pb-8 sm:pb-10 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center">About Me</p>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 text-center">
          I'm a <span className="font-semibold text-blue-400">MERN Stack developer</span> with hands-on experience building scalable, full-stack web apps using{" "}
          <span className="font-semibold text-blue-400">MongoDB, </span>
          <span className="font-semibold text-blue-400">ExpressJS, </span>
          <span className="font-semibold text-blue-400">ReactJS</span>, and{" "}
          <span className="font-semibold text-blue-400">Node.js</span>. I specialize in{" "}
          <span className="font-semibold text-blue-400">clean UIs, efficient APIs, and end-to-end product development</span> that just works — fast, sleek, and reliable.
        </p>
      </div>
    </div>

  )
}

export default About