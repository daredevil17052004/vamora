import { motion } from 'framer-motion'
import { Users, Brain, Video, Star, MapPin, Heart } from 'lucide-react'

function HowTiWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const storyCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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

  const processSteps = [
    {
      step: 1,
      icon: Users,
      iconColor: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      title: "Region-Aware Onboarding",
      description: "Create your profile with location, cultural preferences and culture considerations."
    },
    {
      step: 2,
      icon: Brain,
      iconColor: "text-pink-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
      title: "AI + Human Matchmaking",
      description: "Our advanced algorithms combined with human curation find your most compatible matches."
    },
    {
      step: 3,
      icon: Video,
      iconColor: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      title: "Ti Connect Video Chat",
      description: "Try our global video chat feature to connect with matches in a safe, comfortable environment."
    }
  ]

  const successStories = [
    {
      names: "Priya & Michael",
      image: "../../public/coup1.jpg",
      location: "Chennai, India → Toronto, Canada",
      story: "Two heart-to-heart chats and 6 months later, we found our perfect match!",
      rating: 5,
      flags: ["🇮🇳", "🇨🇦"]
    },
    {
      names: "Fatima & James",
      image: "../../public/coup2.jpg",
      location: "Dubai, UAE → London, UK",
      story: "Ti made the distance disappear. One beautiful story. It helped us bridge our worlds and find common ground in love.",
      rating: 5,
      flags: ["🇦🇪", "🇬🇧"]
    },
    {
      names: "Alex & Jordan",
      image: "../../public/coup3.jpg",
      location: "Sydney, Australia → Berlin, Germany",
      story: "The inclusive platform gave us the space to be ourselves and find love without boundaries or judgement.",
      rating: 5,
      flags: ["🇦🇺", "🇩🇪"]
    }
  ]

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 + 0.5 }}
      >
        <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
      </motion.div>
    ))
  }

  return (
    <div className='w-full bg-gradient-to-br from-gray-50 via-white to-pink-50/30 py-16 sm:py-20 lg:py-24'>
      {/* How Ti Works Section */}
      <motion.section
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 lg:mb-32'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-12 sm:mb-16 lg:mb-20'
          variants={itemVariants}
        >
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How Vamora Works
          </motion.h2>

          <motion.p
            className='text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4'
            variants={itemVariants}
          >
            Our unique approach combines AI technology with human curation for the perfect match.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12'
          variants={containerVariants}
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                className='relative'
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Connection Line - Hidden on mobile */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className='hidden md:block absolute top-12 -right-6 lg:-right-8 w-12 lg:w-16 h-0.5 bg-gradient-to-r from-[#d23f57]/30 via-pink-300/50 to-[#d23f57]/30 z-0'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.6 }}
                  />
                )}

                <div className='relative z-10 text-center'>
                  {/* Step Number */}
                  <motion.div
                    className='relative mb-6 sm:mb-8 inline-block'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d23f57] via-[#e85d75] to-[#d23f57] rounded-full flex items-center justify-center shadow-lg mx-auto relative overflow-hidden'>
                      <motion.span
                        className='text-lg sm:text-xl font-semibold text-white'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {step.step}
                      </motion.span>

                      {/* Pulse effect */}
                      <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse'></div>
                    </div>

                    {/* Icon overlay */}
                    <motion.div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 ${step.bgColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${step.iconColor}`} />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className='text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3'
                    variants={itemVariants}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className='text-sm text-gray-600 leading-relaxed px-2'
                    variants={itemVariants}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className='text-center mt-12 sm:mt-16 lg:mt-20'
          variants={itemVariants}
        >
          <motion.button
            className='px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#d23f57] via-[#e85d75] to-[#d23f57] text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl hover:from-[#c13651] hover:via-[#d23f57] hover:to-[#c13651] transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-12 sm:mb-16 lg:mb-20'
          variants={itemVariants}
        >
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories Around the World
          </motion.h2>

          <motion.p
            className='text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4'
            variants={itemVariants}
          >
            Real couples who found love across borders and cultures with Ti.
          </motion.p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'
          variants={containerVariants}
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-white via-white to-pink-50/30 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-pink-100/50'
              variants={storyCardVariants}
              whileHover="hover"
            >
              {/* Image */}
              <div className='relative h-48 sm:h-56 bg-gradient-to-br from-[#d23f57]/20 via-pink-200/30 to-[#d23f57]/30 overflow-hidden'>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-t from-[#d23f57]/10 via-transparent to-pink-100/20'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />

                {/* Actual image */}
                <motion.img
                  src={story.image || '/path/to/default-couple-image.jpg'}
                  alt={`${story.names} - Success Story`}
                  className='w-full h-full object-cover'
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.6 }}
                />

                {/* Optional overlay for better text readability */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />

                {/* Flag badges */}
                <div className='absolute top-4 right-4 flex gap-2'>
                  {story.flags.map((flag, flagIndex) => (
                    <motion.span
                      key={flagIndex}
                      className='text-2xl sm:text-3xl bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg border border-pink-200/50'
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + flagIndex * 0.1 + 0.3 }}
                    >
                      {flag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className='p-4 sm:p-6'>
                <motion.h3
                  className='text-lg sm:text-xl font-semibold bg-gradient-to-r from-gray-800 to-[#d23f57] bg-clip-text text-transparent mb-2'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {story.names}
                </motion.h3>

                <motion.div
                  className='flex items-center gap-2 mb-3 sm:mb-4'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <MapPin className='w-3 h-3 text-[#d23f57]' />
                  <span className='text-xs sm:text-sm text-gray-600'>{story.location}</span>
                </motion.div>

                <motion.p
                  className='text-sm text-gray-600 leading-relaxed mb-4'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  "{story.story}"
                </motion.p>

                {/* Rating */}
                <motion.div
                  className='flex items-center gap-1'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {renderStars(story.rating)}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className='text-center mt-12 sm:mt-16 lg:mt-20'
          variants={itemVariants}
        >
          <motion.button
            className='px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-white to-pink-50 text-[#d23f57] border-2 border-[#d23f57] rounded-full font-medium text-sm shadow-lg hover:bg-gradient-to-r hover:from-[#d23f57] hover:to-[#e85d75] hover:text-white transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Global Love Stories
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default HowTiWorksSection