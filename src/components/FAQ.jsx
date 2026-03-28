import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is the duration of the UPSC Foundation Course?',
      answer: 'Our comprehensive UPSC Foundation Course is a 12-month program that covers Prelims, Mains, and Interview preparation. It includes daily classes, answer writing sessions, mock tests, and personal mentorship throughout the journey.',
    },
    {
      question: 'What are the course fees and payment options?',
      answer: 'Course fees vary based on the program. Foundation Course is ₹1,50,000, Prelims Crash Course is ₹45,000, Mains Answer Writing is ₹75,000, and Interview Guidance is ₹25,000. We offer easy EMI options and scholarships for meritorious students.',
    },
    {
      question: 'Do you provide online and offline classes?',
      answer: 'Yes! We offer both online and offline classes. Our hybrid model allows you to attend live classes from anywhere while maintaining the quality of in-person instruction. All online classes are interactive with doubt-clearing sessions.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day money-back guarantee if you are not satisfied with our coaching. After 7 days, refunds are processed on a pro-rata basis depending on the duration of classes attended.',
    },
    {
      question: 'Do you provide study material?',
      answer: 'Yes, comprehensive study material is included with all our courses. This includes subject-wise notes, current affairs compilations, previous year question papers, and access to our online resource portal.',
    },
    {
      question: 'How is the mentorship program structured?',
      answer: 'Each student is assigned a personal mentor who tracks their progress, identifies weaknesses, and provides guidance. We conduct weekly one-on-one sessions to discuss preparation strategy and address any concerns.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="font-heading font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="text-blue-600" size={20} />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
