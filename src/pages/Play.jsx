import React, { useState, useEffect } from 'react'
import { MapPin, Search, Plane, Apple, Smartphone } from 'lucide-react'

const FindLoveOnTheGo = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className='min-h-screen w-full bg-rose-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden'>
            <div className='w-full max-w-7xl'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                    {/* Left side - Image */}
                    <div className={`w-full lg:w-1/2 flex items-center justify-center transform transition-all duration-1000 ease-out ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
                        <div className='w-full max-w-md lg:max-w-lg'>
                            <img 
                                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' 
                                alt='Mobile dating app interface'
                                className='w-full h-auto rounded-2xl shadow-2xl object-cover'
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className={`w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left transform transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`}>
                        {/* Title and description */}
                        <div className={`transform transition-all duration-800 ease-out delay-400 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight'>
                                Find Love On The Go
                            </h2>
                            <p className='text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0'>
                                Download the Ti app and connect with potential matches anytime, anywhere around the world.
                            </p>
                        </div>

                        {/* Features */}
                        <div className='flex flex-col space-y-4 sm:space-y-5'>
                            <div className={`flex items-start space-x-4 max-w-md mx-auto lg:mx-0 transform transition-all duration-700 ease-out delay-600 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                                <div className='flex-shrink-0 w-6 h-6 text-rose-500 mt-1'>
                                    <MapPin className='w-full h-full' />
                                </div>
                                <div className='text-left'>
                                    <h3 className='font-semibold text-gray-800 mb-1 text-sm sm:text-base'>
                                        Find Matches Near You
                                    </h3>
                                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                                        Discover compatible partners in your area or wherever you travel.
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-start space-x-4 max-w-md mx-auto lg:mx-0 transform transition-all duration-700 ease-out delay-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                                <div className='flex-shrink-0 w-6 h-6 text-rose-500 mt-1'>
                                    <Search className='w-full h-full' />
                                </div>
                                <div className='text-left'>
                                    <h3 className='font-semibold text-gray-800 mb-1 text-sm sm:text-base'>
                                        Global Search
                                    </h3>
                                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                                        Expand your search worldwide to find your perfect match across borders.
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-start space-x-4 max-w-md mx-auto lg:mx-0 transform transition-all duration-700 ease-out delay-800 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                                <div className='flex-shrink-0 w-6 h-6 text-rose-500 mt-1'>
                                    <Plane className='w-full h-full' />
                                </div>
                                <div className='text-left'>
                                    <h3 className='font-semibold text-gray-800 mb-1 text-sm sm:text-base'>
                                        Travel Dating Mode
                                    </h3>
                                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                                        Connect with matches in places you plan to visit before you arrive.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Download buttons */}
                        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 transform transition-all duration-800 ease-out delay-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <button className='flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl min-w-[160px]'>
                                <Apple className='w-6 h-6' />
                                <div className='text-left'>
                                    <div className='text-xs opacity-75'>Download on the</div>
                                    <div className='text-sm font-semibold'>App Store</div>
                                </div>
                            </button>
                            
                            <button className='flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl min-w-[160px]'>
                                <Smartphone className='w-6 h-6' />
                                <div className='text-left'>
                                    <div className='text-xs opacity-75'>Get it on</div>
                                    <div className='text-sm font-semibold'>Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindLoveOnTheGo