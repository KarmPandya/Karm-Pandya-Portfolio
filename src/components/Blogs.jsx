import React from 'react'
import blog1photo from '../assets/BlogPhotos/blog1photo.png'
import blog2photo from '../assets/BlogPhotos/blog2photo.png'

const Blogs = () => {

    const openblog1 = () => {
        window.open("https://medium.com/@karmpandya14/7-best-tips-for-react-developers-to-write-clean-and-efficient-code-b46a6c9fe7a7")
    }
    const openblog2 = () => {
        window.open("https://medium.com/@karmpandya14/master-the-s-o-l-i-d-principles-write-cleaner-smarter-code-d1c58f04fd69")
    }

    return (
        <div id="blogs" className=" bg-[#ffffff] text-white py-12 sm:py-15 lg:py-20 pb-20 sm:pb-30 flex flex-col px-4">
            <div className="w-full max-w-5xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                    <p className="text-[#1e293b] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Blogs</p>
                    <p className="text-[#64748b] text-sm sm:text-base lg:text-lg text-center">Thoughts and insights on development and technology</p>
                </div>

                <div className="flex flex-col gap-8 sm:gap-10">
                    {/* Blog 1 */}
                    <div className="bg-[#eeeeee] rounded-xl px-4 py-4 sm:p-6 flex flex-col">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 sm:gap-6 mb-4 lg:mb-0">
                            <div className="text-[#1e293b] flex-1 text-center lg:text-left">
                                <p className="mb-2 font-bold text-sm sm:text-base">Blog On React</p>
                                <p className="my-4 sm:my-6 text-lg sm:text-xl lg:text-2xl">
                                    🚀 7 Best Tips for React Developers to Write <br className="hidden lg:block" />
                                    Clean and Efficient Code
                                </p>
                            </div>
                            <div>
                                <img
                                    src={blog1photo}
                                    alt=""
                                    className="h-32 sm:h-40 lg:h-40 w-full sm:w-64 lg:w-72 rounded-xl object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
                            <button
                                onClick={openblog1}
                                target="_blank"
                                className="text-white bg-blue-700 py-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition text-sm sm:text-base"
                            >
                                Read Blog
                            </button>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="bg-[#eeeeee] rounded-xl p-4 sm:p-6 flex flex-col">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 mb-4 lg:mb-0">
                            <div className="text-[#1e293b] flex-1 text-center lg:text-left">
                                <p className="mb-2 font-bold text-sm sm:text-base">Blog On S.O.L.I.D. Principles</p>
                                <p className="my-4 sm:my-6 text-lg sm:text-xl lg:text-2xl">
                                    🧠 Master the S.O.L.I.D. Principles: Write Cleaner <br className="hidden lg:block" />
                                    and Smarter Code!
                                </p>
                            </div>
                            <div>
                                <img
                                    src={blog2photo}
                                    alt=""
                                    className="h-32 sm:h-40 lg:h-40 w-full sm:w-64 lg:w-72 rounded-xl object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
                            <button
                                onClick={openblog2}
                                target="_blank"
                                className="text-white bg-blue-700 py-2 px-4 rounded-xl hover:bg-blue-600 cursor-pointer transition text-sm sm:text-base"
                            >
                                Read Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Blogs