import React from 'react'

const Footer = () => {
    const newDate = new Date().getFullYear()
    return (
        <footer className="my-8 sm:my-10 text-center text-xs sm:text-sm text-[#1e293b] pt-6 sm:pt-8 border-t border-[#c4c4c4] bg-gradient-to-r from-white via-gray-100 to-white shadow-inner">
            <div className="flex flex-col items-center space-y-2 px-4">
                <div className="flex items-center space-x-3">
                    <span className="text-lg sm:text-xl font-semibold tracking-wide text-[#0f172a]">Karm Pandya</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748b]">
                  {newDate} Karm Pandya. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer