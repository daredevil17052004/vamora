import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className='w-full min-h-screen'>
            {/* Hero Section */}
            <div className='min-h-[50vh] w-full bg-[#d65267] flex items-center justify-center text-white px-4 py-8'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight'>
                            Ready To Find Your Perfect Match?
                        </h2>
                    </div>

                    <div className='text-lg sm:text-xl mb-8'>
                        <p>Join thousands of couples who found love across borders and cultures with Vamora.</p>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        <button className='p-3 w-full sm:w-32 bg-white text-[#d65267] font-semibold rounded-full hover:bg-gray-100 transition-colors'>
                            Join Now
                        </button>
                        <button className='p-3 w-full sm:w-64 border border-white bg-[#d65267] text-white font-semibold rounded-full hover:bg-[#c44a5f] transition-colors'>
                            Explore Success Stories
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className='w-full min-h-[50vh] bg-[#323233] flex flex-col'>
                {/* Main Footer Content */}
                <div className='flex-1 border-b border-gray-600 w-full p-4 sm:p-6 lg:p-10 text-white'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                            {/* Brand Section */}
                            <div className='lg:col-span-1 space-y-6'>
                                <div>
                                    <p className='text-2xl font-bold'>Vamora<span className='text-[#d65267]'>.</span></p>
                                </div>

                                <div>
                                    <p className='text-gray-300 leading-relaxed'>
                                        Connecting hearts across borders and cultures with respect, understanding, and love.
                                    </p>
                                </div>

                                <div>
                                    <div className='flex items-center gap-4'>
                                        <Facebook className='text-white hover:text-[#d65267] cursor-pointer transition-colors w-5 h-5' />
                                        <Instagram className='text-white hover:text-[#d65267] cursor-pointer transition-colors w-5 h-5' />
                                        <Twitter className='text-white hover:text-[#d65267] cursor-pointer transition-colors w-5 h-5' />
                                        <Youtube className='text-white hover:text-[#d65267] cursor-pointer transition-colors w-5 h-5' />
                                    </div>
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold text-white'>Resources</h3>
                                <div className='space-y-3'>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Vamora Wisdom Journal</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Dating Tips</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Success Stories</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Events Calendar</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Relationship Advice</p>
                                </div>
                            </div>

                            {/* Company Section */}
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold text-white'>Company</h3>
                                <div className='space-y-3'>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>About Us</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Contact</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Careers</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Press</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Privacy Policy</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Terms Of Services</p>
                                </div>
                            </div>

                            {/* Global Pages Section */}
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold text-white'>Global Pages</h3>
                                <div className='space-y-3'>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>USA</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>India</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Gulf</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>UK</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Canada</p>
                                    <p className='text-gray-300 hover:text-[#d65267] cursor-pointer transition-colors'>Southeast Asia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className='py-4 px-4 sm:px-6 lg:px-10'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-white'>
                            <div className='flex items-center gap-6 text-sm'>
                                <p className='hover:text-[#d65267] cursor-pointer transition-colors'>Terms</p>
                                <p className='hover:text-[#d65267] cursor-pointer transition-colors'>Privacy</p>
                                <p className='hover:text-[#d65267] cursor-pointer transition-colors'>Cookies</p>
                            </div>

                            <div>
                                <p className='text-gray-300 text-sm'>© 2025 Ti. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer