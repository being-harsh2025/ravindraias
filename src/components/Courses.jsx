import React from 'react'
import { motion } from 'framer-motion'
import { Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Courses = () => {
  const courses = [
    {
      id: 'foundation',
      title: 'UPSC Foundation Course',
      duration: '12 Months',
      price: '₹1,50,000',
      features: ['Complete Prelims + Mains Coverage', 'Daily Answer Writing', 'Weekly Mock Tests', 'Current Affairs Integration', 'Personal Mentor Allocation'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prelims',
      title: 'Prelims Crash Course',
      duration: '3 Months',
      price: '₹45,000',
      features: ['Focus on High-Weightage Topics', 'CSAT Special Classes', 'Previous Year Analysis', 'Daily Practice Questions', '24/7 Doubt Support'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'mains',
      title: 'Mains Answer Writing',
      duration: '6 Months',
      price: '₹75,000',
      features: ['GS 1-4 Comprehensive', 'Essay Writing Sessions', 'Model Answers & Evaluation', 'Discussion Classes', 'Personalized Feedback'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'interview',
      title: 'Interview Guidance',
      duration: '2 Months',
      price: '₹25,000',
      features: ['Mock Interviews by Ex-IAS', 'Personality Development', 'Current Affairs Briefing', 'DAF Analysis', 'Communication Skills'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    },
  ]

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Featured <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select from our comprehensive range of courses designed for every stage of your UPSC journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${
                course.popular ? 'border-orange-400 ring-2 ring-orange-400/20' : 'border-gray-100'
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-gray-500 text-sm">{course.duration}</span>
                </div>

                <h3 className="font-heading font-bold text-gray-900 mb-3">{course.title}</h3>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/course/${course.id}`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    course.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  View Details <ArrowRight size={16} className="inline ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
