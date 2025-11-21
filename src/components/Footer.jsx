import React from 'react'

const Footer = () => {
    const newDate = new Date().getFullYear()
    return (
        <footer className="mt-8 sm:mt-10 mb-0 pb-6 text-center text-xs sm:text-sm text-white pt-6 sm:pt-8 border-t border-gray-700 bg-gray-900">
            <div className="flex flex-col items-center space-y-2 px-4">
                <div className="flex items-center space-x-3">
                    <span className="text-lg sm:text-xl font-semibold tracking-wide text-white">Karm Pandya</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  {newDate} Karm Pandya. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer