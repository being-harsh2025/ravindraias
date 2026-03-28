import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Users, BookOpen, UserCheck, MessageCircle, Award, Play, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Counter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2070&q=80',
      title: 'Crack UPSC with Expert Guidance',
      subtitle: 'Join India\'s premier coaching institute for structured preparation'
    },
    {
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2070&q=80',
      title: 'Your Dream of Becoming IAS Starts Here',
      subtitle: 'Comprehensive courses for Prelims, Mains & Interview'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2070&q=80',
      title: '10,000+ Success Stories',
      subtitle: 'Proven methodology with personal mentorship'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <Award className="text-yellow-400" size={16} />
                <span className="text-white text-sm font-medium">India's Most Trusted Coaching</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
                >
                  {slides[currentSlide].title.split(' ').map((word, i, arr) => (
                    <span key={i}>
                      {i === arr.length - 1 ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">{word}</span>
                      ) : (
                        word + ' '
                      )}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide + '-p'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-gray-200 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-400/30 transition-all hover:scale-105"
                >
                  Enroll Now <ArrowRight size={20} />
                </Link>
                <a
                  href="/#courses"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  <Play size={18} /> View Courses
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8"
              >
                {[
                  { value: 10000, suffix: '+', label: 'Students Trained' },
                  { value: 500, suffix: '+', label: 'Selections' },
                  { value: 98, suffix: '%', label: 'Success Rate' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-yellow-400">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <Star className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Why Choose Us?</h3>
                      <p className="text-gray-300 text-sm">Proven Track Record</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: <Users size={20} />, title: 'Expert Faculty', desc: 'IIT/IIM Alumni' },
                      { icon: <BookOpen size={20} />, title: 'Complete Coverage', desc: 'Prelims + Mains + Interview' },
                      { icon: <UserCheck size={20} />, title: 'Personal Mentorship', desc: 'One-on-One Guidance' },
                      { icon: <MessageCircle size={20} />, title: 'Mock Interviews', desc: 'Ex-IAS Panel' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                          <p className="text-gray-400 text-xs">{item.desc}</p>
                        </div>
                        <ChevronRight className="text-gray-400 ml-auto" size={16} />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[
                          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
                          'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80',
                          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
                          'https://images.unsplash.com/photo-1472186422960-28256f721a4d?auto=format&fit=crop&w=100&q=80',
                        ].map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt="Student"
                            className="w-8 h-8 rounded-full border-2 border-black"
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">500+ joined this month</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <Award className="text-black" size={24} />
                    <div>
                      <div className="text-black font-bold">Top Results</div>
                      <div className="text-black/70 text-sm">AIR 1, 12, 45, 89</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-yellow-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}

export default Hero
