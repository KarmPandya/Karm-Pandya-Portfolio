import React from 'react'

const About = () => {
  return (
    <div id="about" className=" bg-[#ffffff] text-[#1e293b] pt-16 sm:pt-20 lg:pt-30 pb-8 sm:pb-10 px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">About Me</p>

        <p className="text-[#243147] text-base sm:text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
          I'm a <span className="font-semibold text-[#1e293b]">MERN Stack developer</span> with hands-on experience building scalable, full-stack web apps using{" "}
          <span className="font-semibold text-[#1e293b]">MongoDB, </span>
          <span className="font-semibold text-[#1e293b]">ExpressJS, </span>
          <span className="font-semibold text-[#1e293b]">ReactJS</span>, and{" "}
          <span className="font-semibold text-[#1e293b]">Node.js</span>. I specialize in{" "}
          <span className="font-semibold text-[#1e293b]">clean UIs, efficient APIs, and end-to-end product development</span> that just works — fast, sleek, and reliable.
        </p>
      </div>
    </div>

  )
}

export default About