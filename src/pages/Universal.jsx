import { motion } from 'framer-motion'
import { Globe, Users, Heart, Rainbow } from 'lucide-react'

function UniversalLoveSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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
        ease: "easeOut"
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
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const features = [
    {
      icon: Globe,  
      iconColor: "text-[#d23f57]",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-[#d23f57]/20",
      hoverBg: "hover:bg-gradient-to-br hover:from-red-100 hover:to-pink-100",
      title: "International Matches",
      description: "Find your perfect match across borders and cultures, anywhere in the world."
    },
    {
      icon: Users,
      iconColor: "text-[#e85d75]",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-pink-100 hover:to-rose-100",
      title: "Same-Culture Abroad",
      description: "Connect with people from your culture living in different parts of the world."
    },
    {
      icon: Heart,
      iconColor: "text-[#d23f57]",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      borderColor: "border-rose-200/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-rose-100 hover:to-pink-100",
      title: "Faith-Based Connections",
      description: "Find someone who shares your spiritual values and beliefs."
    },
    {
      icon: Rainbow,
      iconColor: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100",
      title: "LGBTQ+ Friendly",
      description: "A welcoming space for all identities to find meaningful connections."
    }
  ]

  return (
    <motion.section 
      className='w-full h-screen bg-gradient-to-br from-gray-50 via-pink-50/30 to-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#d23f57] to-[#e85d75] rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
        <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-[#d23f57] rounded-full blur-2xl animate-pulse' style={{ animationDelay: '2s' }}></div>
        <div className='absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full blur-2xl animate-pulse' style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header Section */}
      <motion.div 
        className='text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl'
        variants={itemVariants}
      >
        <motion.div
          className='mb-6 sm:mb-8'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className='inline-block p-3 sm:p-4 bg-gradient-to-br from-[#d23f57]/20 via-pink-100 to-rose-100 rounded-full mb-4 shadow-lg border border-pink-200/50'
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className='w-8 h-8 sm:w-10 sm:h-10 text-[#d23f57]' />
          </motion.div>
        </motion.div>

        <motion.h2 
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight'
          variants={itemVariants}
        > 
          Love is Universal.{' '}
          <motion.span 
            className='bg-gradient-to-r from-[#d23f57] via-[#e85d75] to-[#d23f57] bg-clip-text text-transparent inline-block'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            So is Vamora.
          </motion.span>
        </motion.h2>

        <motion.p 
          className='text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4'
          variants={itemVariants}
        >
          Connecting hearts across cultures, faiths, and relationship paths with respect and understanding.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full'
        variants={containerVariants}
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} ${feature.hoverBg} p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-sm`}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced Card Background Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 bg-gradient-to-t from-[#d23f57]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              <motion.div 
                className={`${feature.bgColor} p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 inline-block relative z-10 shadow-md border border-white/50`}
                variants={iconVariants}
                whileHover="hover"
              >
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
              </motion.div>

              <div className='relative z-10'>
                <motion.h3 
                  className='text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-[#d23f57] bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:from-[#d23f57] group-hover:to-gray-800 transition-all duration-300'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p 
                  className='text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Enhanced Floating Animation Elements */}
              <motion.div
                className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#d23f57] to-[#e85d75] rounded-full opacity-0 group-hover:opacity-60 shadow-lg'
                animate={{ 
                  y: [0, -8, 0],
                  x: [0, 4, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
              <motion.div
                className='absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-0 group-hover:opacity-40 shadow-md'
                animate={{ 
                  y: [0, 6, 0],
                  x: [0, -3, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3 + 1
                }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Enhanced Floating Hearts Animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute pointer-events-none'
          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6
          }}
        >
          <Heart 
            className={`w-4 h-4 sm:w-6 sm:h-6 ${
              i % 3 === 0 ? 'text-[#d23f57]/30' : 
              i % 3 === 1 ? 'text-pink-400/30' : 
              'text-rose-300/30'
            }`} 
          />
        </motion.div>
      ))}

      {/* Additional Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className='absolute rounded-full pointer-events-none'
          style={{
            left: `${30 + i * 25}%`,
            top: `${40 + i * 20}%`,
            width: `${20 + i * 5}px`,
            height: `${20 + i * 5}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${
            i === 0 ? 'from-[#d23f57] to-pink-400' :
            i === 1 ? 'from-pink-400 to-purple-400' :
            'from-rose-400 to-[#e85d75]'
          } rounded-full blur-xl`} />
        </motion.div>
      ))}
    </motion.section>
  )
}

export default UniversalLoveSection