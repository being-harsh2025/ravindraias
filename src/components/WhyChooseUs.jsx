import React from 'react'
import { motion } from 'framer-motion'
import { Users, FileText, MessageCircle, UserCheck, BookMarked, BarChart } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    { icon: <Users className="size-7" />, title: 'Expert Faculty', description: 'Learn from IIT/IIM alumni and experienced bureaucrats' },
    { icon: <FileText className="size-7" />, title: 'Daily Answer Writing', description: 'Practice makes perfect with daily writing sessions' },
    { icon: <MessageCircle className="size-7" />, title: 'Mock Interviews', description: 'Real interview experience with ex-IAS officers' },
    { icon: <UserCheck className="size-7" />, title: 'Personal Mentorship', description: 'One-on-one guidance for your preparation' },
    { icon: <BookMarked className="size-7" />, title: 'Study Material', description: 'Comprehensive and updated study resources' },
    { icon: <BarChart className="size-7" />, title: 'Test Series', description: 'Quality test series with detailed analysis' },
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
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Strengths</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Why Students <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide everything you need to crack UPSC in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white group-hover:from-orange-500 group-hover:to-orange-600 transition-all flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
