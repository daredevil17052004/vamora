import React from 'react'
import { Heart, Users, HandHeart } from 'lucide-react'
import { motion } from 'framer-motion'

const Discover = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div 
            className='min-h-screen w-full bg-gradient-to-b from-rose-50 to-transparent flex items-center justify-center p-4 sm:p-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={cardVariants}
        >
            <div className='flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-rose-300 w-full max-w-6xl min-h-[60vh] lg:h-[60vh] rounded-2xl bg-white overflow-hidden'>
                <div className='w-full lg:w-1/2 flex flex-col items-start justify-center p-6 sm:p-8 space-y-4 sm:space-y-6'>
                    <div>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight'>
                            Discover Your Perfect Match
                        </h2>
                    </div>

                    <div>
                        <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                            Take our personalized compatibility quiz to find matches that align with
                            your values, culture, and relationship goals.
                        </p>
                    </div>

                    <div className='flex flex-col space-y-3 sm:space-y-4 w-full'>
                        <div className='flex items-center justify-start space-x-3 sm:space-x-4'>
                            <div className='p-2 w-10 h-10 sm:w-12 sm:h-12 bg-rose-300 rounded-full flex items-center justify-center flex-shrink-0'>
                                <Heart className='w-5 h-5 sm:w-6 sm:h-6 text-red-500' />
                            </div>
                            <div>
                                <p className='text-sm sm:text-base text-gray-700'>
                                    Western Style Relationship
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center justify-start space-x-3 sm:space-x-4'>
                            <div className='p-2 w-10 h-10 sm:w-12 sm:h-12 bg-rose-300 rounded-full flex items-center justify-center flex-shrink-0'>
                                <Users className='w-5 h-5 sm:w-6 sm:h-6 text-red-500' />
                            </div>
                            <div>
                                <p className='text-sm sm:text-base text-gray-700'>
                                    Family Integrated Matching
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center justify-start space-x-3 sm:space-x-4'>
                            <div className='p-2 w-10 h-10 sm:w-12 sm:h-12 bg-rose-300 rounded-full flex items-center justify-center flex-shrink-0'>
                                <HandHeart className='w-5 h-5 sm:w-6 sm:h-6 text-red-500' />
                            </div>
                            <div>
                                <p className='text-sm sm:text-base text-gray-700'>
                                    Spiritual/Ethical Match Making
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <button className='w-full sm:w-auto px-6 py-3 sm:py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors duration-300 font-medium text-sm sm:text-base'>
                            Take The Quiz
                        </button>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-full order-first lg:order-last'>
                    <img
                        src='https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                        alt='Discover your perfect match'
                        className='w-full h-full object-cover lg:rounded-r-2xl rounded-t-2xl lg:rounded-t-none'
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Discover