import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Results', href: '/#results' },
    { name: 'Resources', href: '/#resources' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
  ]

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Ravindra IAS Logo" className="h-14 w-auto" />
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              India's premier UPSC coaching institute helping students achieve their dream of becoming civil servants since 2009.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {[
                { name: 'Foundation Course', path: '/course/foundation' },
                { name: 'Prelims Crash Course', path: '/course/prelims' },
                { name: 'Mains Answer Writing', path: '/course/mains' },
                { name: 'Interview Guidance', path: '/course/interview' },
              ].map((course) => (
                <li key={course.name}>
                  <Link to={course.path} className="text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-200">123 Coaching Street, Karol Bagh, New Delhi - 110001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-400" size={20} />
                <span className="text-blue-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-400" size={20} />
                <span className="text-blue-200">info@ravindraias.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2024 Ravindra IAS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
