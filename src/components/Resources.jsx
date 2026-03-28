import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BookMarked, FileCheck, BarChart, ExternalLink, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Resources = () => {
  const resources = [
    { 
      id: 'current-affairs',
      icon: FileText, 
      title: 'Current Affairs', 
      description: 'Stay updated with daily and monthly current affairs compilation',
      color: 'blue',
      items: ['Monthly Compilations', 'Daily News Analysis', 'Weekly Digest', 'Important Topics'],
      topics: ['Polity', 'Economy', 'Environment', 'Science & Tech', 'International Relations']
    },
    { 
      id: 'notes',
      icon: BookMarked, 
      title: 'Notes', 
      description: 'Comprehensive subject-wise notes prepared by experts',
      color: 'emerald',
      items: ['GS Paper I', 'GS Paper II', 'GS Paper III', 'GS Paper IV', 'Ethics Notes'],
      topics: ['History', 'Geography', 'Polity', 'Economy', 'Environment']
    },
    { 
      id: 'pyqs',
      icon: FileCheck, 
      title: 'PYQs', 
      description: 'Previous year question papers with detailed solutions',
      color: 'purple',
      items: ['Last 15 Years', 'Detailed Solutions', 'Trend Analysis', 'Topic-wise Sorting'],
      topics: ['2010-2024', 'CSAT Papers', 'GS All Papers', 'Essay Papers', 'Optional Papers']
    },
    { 
      id: 'test-series',
      icon: BarChart, 
      title: 'Test Series', 
      description: 'Online test series with detailed performance analytics',
      color: 'orange',
      items: ['Prelims Tests', 'Mains Tests', 'Sectional Tests', 'Full Length Tests'],
      topics: ['Weekly Tests', 'Monthly Tests', 'Mock Tests', 'Answer Evaluation']
    },
  ]

  const colorMap = {
    blue: { bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    emerald: { bg: 'bg-emerald-500', bgLight: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
    purple: { bg: 'bg-purple-500', bgLight: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-500', bgLight: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  }

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Free Resources</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Study <span className="text-blue-600">Resources</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access quality study material and resources to boost your preparation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const colors = colorMap[resource.color]
            const IconComponent = resource.icon
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/resources/${resource.id}`}
                  className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className={`${colors.bgLight} p-8 flex items-center justify-center`}>
                    <div className={`p-4 rounded-full ${colors.bg} text-white`}>
                      <IconComponent size={40} />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {resource.title}
                      </h3>
                      <ChevronRight className={colors.text} size={20} />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {resource.description}
                    </p>

                    <div className="space-y-2">
                      {resource.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-4">Get Premium Study Material</h3>
              <p className="text-blue-100 text-lg mb-6">
                Enroll in our courses to get access to exclusive study material, answer writing practice, and personal mentorship.
              </p>
              <a
                href="/#courses"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all"
              >
                Explore Courses <ExternalLink size={18} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['10,000+ Pages', 'Updated Monthly', 'Expert Curated', 'Downloadable PDF'].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                  <FileText className="text-yellow-400" size={24} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resources
