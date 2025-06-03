import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='relative w-full h-16 px-4 sm:px-6 md:px-8 lg:px-20 flex items-center justify-between bg-white shadow-sm'>
        
        {/* Logo */}
        <div className='flex-shrink-0'>
            <p className='text-2xl sm:text-3xl text-[#d23f57] font-semibold'>Vamora</p>
        </div>

        {/* Desktop navigation links */}    
        <div className='hidden lg:flex items-center justify-between gap-x-6 xl:gap-x-8'>
            <div>
                <p className='cursor-pointer hover:text-[#d23f57] transition-colors duration-200 text-sm xl:text-base'>How It Works</p>
            </div>
            <div>
                <p className='cursor-pointer hover:text-[#d23f57] transition-colors duration-200 text-sm xl:text-base'>Success Stories</p>
            </div>
            <div>
                <p className='cursor-pointer hover:text-[#d23f57] transition-colors duration-200 text-sm xl:text-base'>Vamora For Everyone</p>
            </div>
            <div>
                <p className='cursor-pointer hover:text-[#d23f57] transition-colors duration-200 text-sm xl:text-base'>Our Values</p>
            </div>
            <div>
                <p className='cursor-pointer hover:text-[#d23f57] transition-colors duration-200 text-sm xl:text-base'>Events</p>
            </div>
        </div>

        {/* Desktop buttons */}
        <div className='hidden lg:flex items-center justify-between gap-x-3 xl:gap-x-4 flex-shrink-0'>
            <div>
                <button className='px-4 py-2 text-sm xl:text-base min-w-[80px] xl:min-w-[90px] text-[#d23f57] rounded-full border-2 border-[#d23f57] hover:bg-[#d23f57] hover:text-white transition-all duration-300 hover:cursor-pointer'>
                    Log In
                </button>
            </div>
            <div>
                <button className='px-4 py-2 text-sm xl:text-base min-w-[80px] xl:min-w-[90px] rounded-full border-2 border-[#d23f57] bg-[#d23f57] text-white hover:bg-white hover:text-[#d23f57] hover:cursor-pointer transition-all duration-300'>
                    Join Now
                </button>
            </div>
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden flex-shrink-0'>
            <button 
                onClick={toggleMenu}
                className='p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d23f57] focus:ring-opacity-50'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
            <>
                {/* Backdrop */}
                <div 
                    className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
                    onClick={toggleMenu}
                ></div>
                
                {/* Mobile menu */}
                <div className='lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto'>
                    <div className='flex flex-col py-4 px-4 sm:px-6 space-y-4'>
                        {/* Mobile navigation links */}
                        <div className='flex flex-col space-y-2 pb-4 border-b border-gray-200'>
                            <p className='cursor-pointer hover:text-[#d23f57] hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md text-base'>How It Works</p>
                            <p className='cursor-pointer hover:text-[#d23f57] hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md text-base'>Success Stories</p>
                            <p className='cursor-pointer hover:text-[#d23f57] hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md text-base'>Vamora For Everyone</p>
                            <p className='cursor-pointer hover:text-[#d23f57] hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md text-base'>Our Values</p>
                            <p className='cursor-pointer hover:text-[#d23f57] hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md text-base'>Events</p>
                        </div>
                        
                        {/* Mobile buttons */}
                        <div className='flex flex-col sm:flex-row sm:gap-3 space-y-3 sm:space-y-0 pt-2'>
                            <button className='p-3 w-full sm:flex-1 text-[#d23f57] rounded-full border-2 border-[#d23f57] hover:bg-[#d23f57] hover:text-white transition-all duration-300 font-medium'>
                                Log In
                            </button>
                            <button className='p-3 w-full sm:flex-1 rounded-full border-2 border-[#d23f57] bg-[#d23f57] text-white hover:bg-white hover:text-[#d23f57] transition-all duration-300 font-medium'>
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )}
    </nav>
  )
}

export default NavigationBar