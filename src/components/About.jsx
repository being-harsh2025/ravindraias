import React from 'react'
import { motion } from 'framer-motion'
import { Users, BookOpen, UserCheck } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Users className="size-8" />,
      title: 'Expert Faculty',
      description: 'Learn from IIT/IIM alumni and experienced bureaucrats who have cracked UPSC multiple times.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <BookOpen className="size-8" />,
      title: 'Structured Courses',
      description: 'Comprehensive curriculum covering all stages - Prelims, Mains, and Interview preparation.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <UserCheck className="size-8" />,
      title: 'Personal Mentorship',
      description: 'One-on-one guidance with dedicated mentors to address your specific weaknesses.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Why Choose <span className="text-blue-600">Ravindra IAS</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            For over 15 years, we've been shaping future civil servants with our proven methodology and dedicated approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4 -mt-12 relative z-10 border-4 border-white">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                To provide comprehensive, affordable, and result-oriented coaching that empowers every student to achieve their dream of becoming a civil servant.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '50+', label: 'Expert Mentors' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '10K+', label: 'Students' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                    <div className="text-blue-100 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
