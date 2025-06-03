import React from 'react'
import { UserCheck, Shield, Shrub, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Values = () => {

  const values = [
    {
      icon: UserCheck,
      title: "Authenticity",
      description: "We believe in real connections between genuine people, with verified profiles and honest interactions."
    },
    {
      icon: Shield,
      title: "Emotional Safety",
      description: "Creating a secure environment where everyone feels respected and protected in their search for love."
    },
    {
      icon: Shrub,
      title: "Cultural Understanding",
      description: "Embracing diversity and promoting respect for all traditions, beliefs, and relationship paths."
    },
    {
      icon: Scale,
      title: "Relationship Ethics",
      description: "Upholding modern relationship values while respecting traditional perspectives and family dynamics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

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
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-rose-100/80 to-rose-50'>
      
      {/* Header Section */}
      <motion.div
        className='flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-4xl'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight'
          variants={itemVariants}
        >
          Vamora Values
        </motion.h2>

        <motion.p
          className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl'
          variants={itemVariants}
        >
          Our core principles that guide how we connect hearts across the world.
        </motion.p>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center justify-start p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] group relative overflow-hidden'
            variants={cardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Icon Container */}
            <motion.div 
              className='bg-gradient-to-br from-rose-200 to-pink-200 p-3 sm:p-4 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:from-rose-300 group-hover:to-pink-300 transition-all duration-300'
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <value.icon className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#d23f57]' />
            </motion.div>

            {/* Title */}
            <motion.h3 
              className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center leading-tight'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {value.title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className='text-sm sm:text-base md:text-lg text-gray-600 text-center leading-relaxed flex-grow'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {value.description}
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#d23f57] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Decorative Elements */}
      <div className='absolute top-20 left-10 w-16 h-16 bg-rose-200/20 rounded-full blur-xl animate-pulse hidden lg:block' />
      <div className='absolute bottom-20 right-20 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse hidden lg:block' />
      <div className='absolute top-1/2 right-10 w-12 h-12 bg-rose-300/20 rounded-full blur-lg animate-pulse hidden xl:block' />
    </section>
  )
}

export default Values