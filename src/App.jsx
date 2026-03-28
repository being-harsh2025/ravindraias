import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Results from './components/Results'
import Resources from './components/Resources'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CourseDetail from './components/CourseDetail'
import PaymentSuccess from './components/PaymentSuccess'
import ResourceDetail from './components/ResourceDetail'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Results />
      <Resources />
      <FAQ />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/resources/:resourceId" element={<ResourceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
