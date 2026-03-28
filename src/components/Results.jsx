import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star } from 'lucide-react'

const Results = () => {
  const toppers = [
    { name: 'Priya Sharma', rank: 'AIR 12', year: '2024', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', testimonial: 'The structured approach and personal mentorship at Ravindra IAS made all the difference.' },
    { name: 'Rahul Verma', rank: 'AIR 45', year: '2024', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80', testimonial: 'Daily answer writing sessions and mock interviews gave me the confidence I needed.' },
    { name: 'Ananya Patel', rank: 'AIR 89', year: '2023', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', testimonial: 'Expert faculty and comprehensive study material helped me crack UPSC in first attempt.' },
    { name: 'Vikram Singh', rank: 'AIR 156', year: '2024', image: 'https://images.unsplash.com/photo-1472186422960-28256f721a4d?auto=format&fit=crop&w=400&q=80', testimonial: 'The personal mentorship program was exceptional.' },
    { name: 'Sneha Gupta', rank: 'AIR 203', year: '2023', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&q=80', testimonial: 'Ravindra IAS provided the perfect environment for focused preparation.' },
    { name: 'Arjun Nair', rank: 'AIR 78', year: '2023', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', testimonial: 'The test series and regular assessments helped me track my progress effectively.' },
  ]

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Success</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Meet Our <span className="text-blue-600">Toppers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join the league of successful candidates who made their dream a reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-400">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg">{topper.name}</h3>
                  <div className="flex items-center gap-2">
                    <Trophy className="text-orange-500" size={16} />
                    <span className="text-orange-600 font-bold">{topper.rank}</span>
                  </div>
                  <span className="text-gray-500 text-sm">UPSC CSE {topper.year}</span>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-orange-400 fill-orange-400" size={14} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{topper.testimonial}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">Our Achievement Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '500+', label: 'Total Selections' },
                { value: '50+', label: 'AIR Under 100' },
                { value: '15+', label: 'Years of Excellence' },
                { value: '100%', label: 'Result Oriented' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
