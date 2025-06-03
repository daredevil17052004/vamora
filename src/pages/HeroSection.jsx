import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import NavigationBar from './NavigationBar'

const HeroSection = () => {

    const [isHovered, setIsHovered] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const bubbleVariants = {
        hidden: { opacity: 0, scale: 0.5, x: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 1.2,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    }

    return (
        <div>
            <motion.div
                className='w-full min-h-screen lg:min-h-[92vh] bg-gradient-to-br from-rose-50 via-rose-100/60 to-pink-50 flex flex-col lg:flex-row items-center justify-between overflow-hidden'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Content Section */}
                <motion.div
                    className='w-full lg:w-1/2 h-full flex items-start justify-center flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-12 order-2 lg:order-1'
                    variants={itemVariants}
                >
                    <motion.div
                        className='mb-6 md:mb-8'
                        variants={itemVariants}
                    >
                        <motion.p
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-800'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Find Your Forever with{' '}
                            <motion.span
                                className='text-[#d23f57] inline-block'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                Vamora
                            </motion.span>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className='mb-8 md:mb-10'
                        variants={itemVariants}
                    >
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg'>
                            Real Connections. Real People. Worldwide. Discover meaningful relationships across culture and borders.
                        </p>
                    </motion.div>

                    <motion.div
                        className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto'
                        variants={itemVariants}
                    >
                        <motion.div
                            className='w-full sm:w-auto'
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <button
                                className='py-3 px-6 sm:px-8 w-full sm:w-auto text-white rounded-full border-2 border-[#d23f57] bg-[#d23f57] hover:bg-white hover:text-[#d23f57] transition-all duration-300 hover:cursor-pointer text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl'
                                onMouseEnter={() => setIsHovered('join')}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                Join Now
                            </button>
                        </motion.div>

                        <motion.div
                            className='w-full sm:w-auto'
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <button
                                className='py-3 px-6 sm:px-8 w-full sm:w-auto text-[#d23f57] rounded-full border-2 border-[#d23f57] hover:bg-[#d23f57] hover:text-white transition-all duration-300 hover:cursor-pointer text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl'
                                onMouseEnter={() => setIsHovered('explore')}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                Explore Matches Near You
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section - Mobile Optimized */}
                    <motion.div
                        className='mt-8 lg:mt-12 flex flex-wrap gap-4 sm:gap-6 text-center sm:text-left'
                        variants={itemVariants}
                    >
                        <motion.div
                            className='flex-1 min-w-[120px]'
                            whileHover={{ y: -2 }}
                        >
                            <p className='text-xl sm:text-2xl font-bold text-[#d23f57]'>1M+</p>
                            <p className='text-xs sm:text-sm text-gray-600'>Happy Users</p>
                        </motion.div>
                        <motion.div
                            className='flex-1 min-w-[120px]'
                            whileHover={{ y: -2 }}
                        >
                            <p className='text-xl sm:text-2xl font-bold text-[#d23f57]'>50K+</p>
                            <p className='text-xs sm:text-sm text-gray-600'>Success Stories</p>
                        </motion.div>
                        <motion.div
                            className='flex-1 min-w-[120px]'
                            whileHover={{ y: -2 }}
                        >
                            <p className='text-xl sm:text-2xl font-bold text-[#d23f57]'>190+</p>
                            <p className='text-xs sm:text-sm text-gray-600'>Countries</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image Section - Properly Responsive */}
                <motion.div
                    className='w-full flex items-center justify-center lg:w-1/2 h-80 sm:h-96 md:h-[28rem] lg:h-full order-1 lg:order-2 relative px-4 sm:px-6 lg:px-8 py-4 lg:py-0'
                    variants={imageVariants}
                >
                    <motion.div
                        className='relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-full flex items-center justify-center'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img
                            src='https://images.unsplash.com/photo-1615439935188-5e488fc6b764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNvdXBsZXN8ZW58MHx8MHx8fDA%3D'
                            alt='Happy couple representing successful matches on Ti dating platform'
                            className='w-full max-w-xs sm:max-w-sm md:max-w-md h-72 sm:h-80 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] 2xl:w-[550px] 2xl:h-[550px] object-cover shadow-2xl rounded-2xl sm:rounded-3xl mx-auto'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>

                    {/* Trust Badge Bubble - Responsive Positioning */}
                    <motion.div
                        className='absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-4 lg:left-4 xl:bottom-6 xl:left-6 flex items-center justify-center bg-[#be8b66]/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-xl border border-white/30'
                        variants={bubbleVariants}
                        whileHover="hover"
                    >
                        <motion.p
                            className='text-xs sm:text-sm font-semibold text-white text-center leading-tight'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            Trusted by<br className='sm:hidden' />
                            <span className='sm:ml-1'>1M+ customers</span>
                        </motion.p>
                    </motion.div>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroSection  