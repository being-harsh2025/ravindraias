import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, BookMarked, FileCheck, BarChart, Clock, Users, CheckCircle, ChevronRight, Download, Play } from 'lucide-react'

const resourcesData = {
  'current-affairs': {
    title: 'Current Affairs',
    subtitle: 'Stay updated with comprehensive current affairs coverage',
    icon: FileText,
    color: 'blue',
    description: 'Our current affairs module covers all important national and international events, organized systematically for easy revision and better understanding.',
    features: [
      { icon: Clock, title: 'Daily Updates', desc: 'Fresh content every day' },
      { icon: BookMarked, title: 'Monthly PDFs', desc: 'Easy to download & print' },
      { icon: CheckCircle, title: 'Curated Content', desc: 'UPSC-focused material' },
    ],
    topics: ['Polity & Governance', 'Economy', 'Environment & Ecology', 'Science & Technology', 'International Relations', 'Social Issues', 'Security', 'Ethics'],
    sampleContent: [
      { title: 'January 2024 Compilation', date: 'Jan 2024', pages: '120 pages' },
      { title: 'February 2024 Compilation', date: 'Feb 2024', pages: '115 pages' },
      { title: 'March 2024 Compilation', date: 'Mar 2024', pages: '130 pages' },
    ]
  },
  'notes': {
    title: 'Study Notes',
    subtitle: 'Comprehensive notes prepared by expert faculty',
    icon: BookMarked,
    color: 'emerald',
    description: 'Our notes are designed to cover the entire UPSC syllabus with a focus on conceptual clarity and answer writing skills.',
    features: [
      { icon: Users, title: 'Expert Faculty', desc: 'Prepared by IIT/IIM alumni' },
      { icon: FileText, title: 'Updated Content', desc: 'Latest syllabus covered' },
      { icon: CheckCircle, title: 'Easy Language', desc: 'Simplified concepts' },
    ],
    topics: ['Ancient History', 'Medieval History', 'Modern History', 'Indian Geography', 'World Geography', 'Indian Polity', 'Indian Economy', 'Environment'],
    sampleContent: [
      { title: 'History Complete Notes', date: 'GS Paper I', pages: '250 pages' },
      { title: 'Geography Complete Notes', date: 'GS Paper I', pages: '280 pages' },
      { title: 'Polity Complete Notes', date: 'GS Paper II', pages: '200 pages' },
    ]
  },
  'pyqs': {
    title: 'Previous Year Questions',
    subtitle: 'Last 15 years UPSC PYQs with detailed solutions',
    icon: FileCheck,
    color: 'purple',
    description: 'Practice with authentic UPSC previous year questions. Our detailed solutions help you understand the exam pattern and important topics.',
    features: [
      { icon: FileText, title: '15 Years Coverage', desc: '2010-2024' },
      { icon: CheckCircle, title: 'Detailed Solutions', desc: 'Expert explanations' },
      { icon: BarChart, title: 'Trend Analysis', desc: 'Topic-wise sorting' },
    ],
    topics: ['CSAT Paper', 'GS Paper I', 'GS Paper II', 'GS Paper III', 'GS Paper IV', 'Essay Paper', 'Optional Papers'],
    sampleContent: [
      { title: 'UPSC CSE 2023 - Complete', date: '2023', pages: '85 pages' },
      { title: 'UPSC CSE 2022 - Complete', date: '2022', pages: '90 pages' },
      { title: 'UPSC CSE 2021 - Complete', date: '2021', pages: '88 pages' },
    ]
  },
  'test-series': {
    title: 'Test Series',
    subtitle: 'Online test series with detailed performance analytics',
    icon: BarChart,
    color: 'orange',
    description: 'Our test series simulates the actual UPSC exam environment. Get detailed feedback and analytics to improve your performance.',
    features: [
      { icon: Play, title: 'Online Tests', desc: 'Take tests anytime' },
      { icon: BarChart, title: 'Analytics', desc: 'Track your progress' },
      { icon: CheckCircle, title: 'Detailed Review', desc: 'Understand mistakes' },
    ],
    topics: ['Prelims Mock Tests', 'Sectional Tests', 'Mains Tests', 'Full Length Tests', 'Answer Evaluation'],
    sampleContent: [
      { title: 'Prelims Mock Test 1-10', date: 'Complete Set', pages: '10 Tests' },
      { title: 'Sectional Tests - Polity', date: '15 Tests', pages: '15 Tests' },
      { title: 'Mains Practice Tests', date: 'GS 1-4', pages: '20 Tests' },
    ]
  },
}

const ResourceDetail = () => {
  const { resourceId } = useParams()
  const resource = resourcesData[resourceId]

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Go back to home</Link>
        </div>
      </div>
    )
  }

  const IconComponent = resource.icon
  const colorMap = {
    blue: { bg: 'bg-blue-500', bgLight: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', ring: 'ring-blue-500' },
    emerald: { bg: 'bg-emerald-500', bgLight: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', ring: 'ring-emerald-500' },
    purple: { bg: 'bg-purple-500', bgLight: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', ring: 'ring-purple-500' },
    orange: { bg: 'bg-orange-500', bgLight: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', ring: 'ring-orange-500' },
  }
  const colors = colorMap[resource.color]

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl mb-8"
        >
          <div className={`${colors.bgLight} p-8 md:p-12`}>
            <div className="flex items-center gap-6">
              <div className={`p-6 rounded-2xl ${colors.bg} text-white`}>
                <IconComponent size={60} />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h1>
                <p className="text-gray-600 text-lg">{resource.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-600 text-lg mb-8">{resource.description}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {resource.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className={`p-3 rounded-lg ${colors.bgLight} ${colors.text}`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Topics Covered</h2>
              <div className="flex flex-wrap gap-3">
                {resource.topics.map((topic, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full ${colors.bgLight} ${colors.text} font-medium`}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Sample Content</h2>
              <div className="space-y-4">
                {resource.sampleContent.map((content, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${colors.bg} text-white`}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{content.title}</h3>
                        <p className="text-sm text-gray-500">{content.date} • {content.pages}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        Preview
                      </button>
                      <ChevronRight className="text-gray-400" size={20} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Want Access to Premium Resources?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Enroll in our courses to get unlimited access to all study materials, test series, and personal mentorship.
            </p>
            <Link
              to="/#courses"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all"
            >
              Explore Courses <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResourceDetail
