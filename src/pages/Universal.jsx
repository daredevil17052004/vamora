import React from 'react'
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
      y: -4,
      scale: 1.02,
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
      scale: 1.1,
      rotate: 3,
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

  // Mock motion component for demonstration
  const Motion = ({ children, className, ...props }) => (
    <div className={className} {...props}>{children}</div>
  )

  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/30 to-white flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative overflow-hidden'>
      {/* Enhanced Background Pattern - Adjusted for mobile */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-br from-[#d23f57] to-[#e85d75] rounded-full blur-2xl sm:blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl sm:blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
        <div className='absolute top-1/2 left-1/6 sm:left-1/4 w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 bg-gradient-to-br from-pink-400 to-[#d23f57] rounded-full blur-xl sm:blur-2xl animate-pulse' style={{ animationDelay: '2s' }}></div>
        <div className='absolute top-1/3 right-1/4 sm:right-1/3 w-14 sm:w-24 md:w-28 h-14 sm:h-24 md:h-28 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full blur-xl sm:blur-2xl animate-pulse' style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header Section - Enhanced mobile spacing */}
      <div className='text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-4xl w-full'>
        <div className='mb-4 sm:mb-6 md:mb-8'>
          <div className='inline-block p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#d23f57]/20 via-pink-100 to-rose-100 rounded-full mb-3 sm:mb-4 shadow-lg border border-pink-200/50'>
            <Heart className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#d23f57]' />
          </div>
        </div>

        <h2 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight px-2'> 
          Love is Universal.{' '}
          <span className='bg-gradient-to-r from-[#d23f57] via-[#e85d75] to-[#d23f57] bg-clip-text text-transparent inline-block'>
            So is Vamora.
          </span>
        </h2>

        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4'>
          Connecting hearts across cultures, faiths, and relationship paths with respect and understanding.
        </p>
      </div>

      {/* Features Grid - Improved mobile layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full px-2 sm:px-0'>
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} ${feature.hoverBg} p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]`}
            >
              {/* Enhanced Card Background Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 bg-gradient-to-t from-[#d23f57]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              <div className={`${feature.bgColor} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 inline-block relative z-10 shadow-md border border-white/50`}>
                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${feature.iconColor}`} />
              </div>

              <div className='relative z-10'>
                <h3 className='text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-gray-800 to-[#d23f57] bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 group-hover:from-[#d23f57] group-hover:to-gray-800 transition-all duration-300'>
                  {feature.title}
                </h3>

                <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Floating Animation Elements - Adjusted for mobile */}
              <div className='absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-[#d23f57] to-[#e85d75] rounded-full opacity-0 group-hover:opacity-60 shadow-lg' />
              <div className='absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-0 group-hover:opacity-40 shadow-md' />
            </div>
          )
        })}
      </div>

      {/* Enhanced Floating Hearts Animation - Responsive sizing */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className='absolute pointer-events-none hidden sm:block'
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 15}%`,
          }}
        >
          <Heart 
            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 ${
              i % 3 === 0 ? 'text-[#d23f57]/30' : 
              i % 3 === 1 ? 'text-pink-400/30' : 
              'text-rose-300/30'
            }`} 
          />
        </div>
      ))}

      {/* Mobile-only simplified floating hearts */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`mobile-heart-${i}`}
          className='absolute pointer-events-none block sm:hidden'
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 20}%`,
          }}
        >
          <Heart className='w-3 h-3 text-pink-400/20' />
        </div>
      ))}

      {/* Additional Gradient Orbs - Responsive */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className='absolute rounded-full pointer-events-none hidden md:block'
          style={{
            left: `${30 + i * 35}%`,
            top: `${40 + i * 25}%`,
            width: `${16 + i * 4}px`,
            height: `${16 + i * 4}px`,
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${
            i === 0 ? 'from-[#d23f57] to-pink-400' :
            'from-pink-400 to-purple-400'
          } rounded-full blur-xl opacity-20`} />
        </div>
      ))}
    </section>
  )
}

export default UniversalLoveSection