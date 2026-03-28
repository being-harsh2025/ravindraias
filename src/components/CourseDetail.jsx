import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, CheckCircle, ArrowLeft, CreditCard, Smartphone, Shield, BookOpen, Users, FileText, MessageCircle, Star } from 'lucide-react'

const coursesData = {
  foundation: {
    title: 'UPSC Foundation Course',
    subtitle: 'Comprehensive 12-month program for complete UPSC preparation',
    duration: '12 Months',
    price: 150000,
    priceDisplay: '₹1,50,000',
    features: [
      { icon: <BookOpen size={24} />, text: 'Complete Prelims + Mains Coverage' },
      { icon: <FileText size={24} />, text: 'Daily Answer Writing Sessions' },
      { icon: <MessageCircle size={24} />, text: 'Weekly Mock Tests' },
      { icon: <Users size={24} />, text: 'Current Affairs Integration' },
      { icon: <Star size={24} />, text: 'Personal Mentor Allocation' },
      { icon: <Shield size={24} />, text: '24/7 Doubt Support' },
    ],
    description: 'Our comprehensive UPSC Foundation Course is designed to take you from basics to advanced level preparation. This 12-month program covers all three stages of UPSC examination - Prelims, Mains, and Interview preparation.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    highlights: ['IIT/IIM Alumni Faculty', 'Personal Mentorship', 'Weekly Assessments', 'Comprehensive Study Material'],
  },
  prelims: {
    title: 'Prelims Crash Course',
    subtitle: 'Intensive 3-month program focused on Prelims success',
    duration: '3 Months',
    price: 45000,
    priceDisplay: '₹45,000',
    features: [
      { icon: <BookOpen size={24} />, text: 'Focus on High-Weightage Topics' },
      { icon: <FileText size={24} />, text: 'CSAT Special Classes' },
      { icon: <MessageCircle size={24} />, text: 'Previous Year Analysis' },
      { icon: <Users size={24} />, text: 'Daily Practice Questions' },
      { icon: <Star size={24} />, text: '24/7 Doubt Support' },
      { icon: <Shield size={24} />, text: 'Mock Test Series' },
    ],
    description: 'A focused 3-month crash course designed specifically for Prelims examination. Master the art of clearing Prelims with our expert-guided program covering all important topics and previous year trends.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Focused Strategy', 'CSAT Mastery', 'PYQ Analysis', 'Quick Revision Module'],
  },
  mains: {
    title: 'Mains Answer Writing',
    subtitle: '6-month program for mastering Mains examination',
    duration: '6 Months',
    price: 75000,
    priceDisplay: '₹75,000',
    features: [
      { icon: <BookOpen size={24} />, text: 'GS 1-4 Comprehensive Coverage' },
      { icon: <FileText size={24} />, text: 'Essay Writing Sessions' },
      { icon: <MessageCircle size={24} />, text: 'Model Answers & Evaluation' },
      { icon: <Users size={24} />, text: 'Discussion Classes' },
      { icon: <Star size={24} />, text: 'Personalized Feedback' },
      { icon: <Shield size={24} />, text: 'Daily Practice Tests' },
    ],
    description: 'Master the art of answer writing with our comprehensive Mains program. Learn from toppers and experts how to write answers that fetch maximum marks in the Mains examination.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Daily Answer Writing', 'Expert Evaluation', 'Model Answers', 'Discussion Sessions'],
  },
  interview: {
    title: 'Interview Guidance',
    subtitle: '2-month program for interview preparation with Ex-IAS officers',
    duration: '2 Months',
    price: 25000,
    priceDisplay: '₹25,000',
    features: [
      { icon: <BookOpen size={24} />, text: 'Mock Interviews by Ex-IAS' },
      { icon: <FileText size={24} />, text: 'Personality Development' },
      { icon: <MessageCircle size={24} />, text: 'Current Affairs Briefing' },
      { icon: <Users size={24} />, text: 'DAF Analysis' },
      { icon: <Star size={24} />, text: 'Communication Skills' },
      { icon: <Shield size={24} />, text: 'Video Recording & Review' },
    ],
    description: 'Prepare for the final hurdle with our Interview Guidance program. Get mock interviews by experienced Ex-IAS officers and learn how to present yourself confidently.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Ex-IAS Panel', 'Video Mock Interviews', 'Personality Development', 'Communication Training'],
  },
}

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [showPayment, setShowPayment] = useState(false)
  const [paymentStep, setPaymentStep] = useState(1)
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    email: '',
    phone: '',
    upiId: '',
  })

  const course = coursesData[courseId]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Go back to home</Link>
        </div>
      </div>
    )
  }

  const handlePayment = () => {
    if (!paymentDetails.name || !paymentDetails.email || !paymentDetails.phone) {
      alert('Please fill all the details')
      return
    }
    setPaymentStep(2)
  }

  const processUPIPayment = () => {
    if (!paymentDetails.upiId) {
      alert('Please enter your UPI ID')
      return
    }
    setPaymentStep(3)
  }

  const handleSuccess = () => {
    navigate('/payment-success', { state: { course: course.title, amount: course.priceDisplay } })
  }

  const upiId = 'ravindraias@ybl'

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Courses
        </Link>

        {!showPayment ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl mb-8"
            >
              <div className="relative h-64 md:h-80">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-3">
                    <Clock size={16} />
                    {course.duration}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">{course.title}</h1>
                  <p className="text-white/80 mt-2">{course.subtitle}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-lg mb-8">{course.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">What You'll Get</h3>
                    <div className="space-y-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            {feature.icon}
                          </div>
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">Course Highlights</h3>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {course.highlights.map((highlight, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">Course Fee</span>
                        <span className="text-3xl font-bold text-blue-600">{course.priceDisplay}</span>
                      </div>
                      <button
                        onClick={() => setShowPayment(true)}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center justify-center gap-2"
                      >
                        <CreditCard size={20} />
                        Enroll Now
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-3">Secure payment via UPI</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              {paymentStep === 1 && (
                <>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Student Details</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={paymentDetails.name}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={paymentDetails.email}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={paymentDetails.phone}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
                  >
                    Continue to Payment
                  </button>
                </>
              )}

              {paymentStep === 2 && (
                <>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
                  <p className="text-gray-600 mb-6">Course: {course.title}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="text-blue-600" size={24} />
                      <span className="font-medium text-gray-900">Pay via UPI</span>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Pay to UPI ID:</p>
                      <p className="font-bold text-lg text-gray-900">{upiId}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter your UPI ID (optional)</label>
                      <input
                        type="text"
                        value={paymentDetails.upiId}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, upiId: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="yourname@upi"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setPaymentStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={processUPIPayment}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                    >
                      Pay {course.priceDisplay}
                    </button>
                  </div>
                </>
              )}

              {paymentStep === 3 && (
                <>
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="text-green-600" size={40} />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Complete Your Payment</h2>
                    <p className="text-gray-600 mb-6">
                      Send <span className="font-bold text-lg text-blue-600">{course.priceDisplay}</span> to UPI ID: <span className="font-bold">{upiId}</span>
                    </p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <p className="text-sm text-gray-500 mb-2">Scan QR code or copy UPI ID</p>
                      <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 inline-block">
                        <p className="font-mono text-lg font-bold">{upiId}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        After payment, click below to confirm
                      </p>
                    </div>

                    <button
                      onClick={handleSuccess}
                      className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all"
                    >
                      I've Completed Payment
                    </button>
                    <button
                      onClick={() => setPaymentStep(2)}
                      className="w-full mt-3 text-gray-500 hover:text-gray-700"
                    >
                      Go Back
                    </button>
                  </div>
                </>
              )}

              <button
                onClick={() => { setShowPayment(false); setPaymentStep(1); }}
                className="w-full mt-4 text-gray-500 hover:text-gray-700 text-center"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CourseDetail
