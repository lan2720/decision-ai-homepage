'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FlameKindling, Brain, Zap, Target, Mail } from 'lucide-react'

export function LandingPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-blue-600 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FlameKindling className="mr-2" size={32} />
            Decision AI
          </motion.div>
          <nav>
            <ul className="flex space-x-4">
              <motion.li whileHover={{ scale: 1.1 }}><a href="#features" className="hover:text-blue-600">Features</a></motion.li>
              <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="hover:text-blue-600">About</a></motion.li>
              <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" className="hover:text-blue-600">Contact</a></motion.li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Make Smarter Decisions with AI
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          Harness the power of artificial intelligence to optimize your decision-making process.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg">Get Started</Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Lightning Fast", description: "Get instant insights for quick decision making." },
              { icon: <Brain />, title: "AI-Powered", description: "Leverage cutting-edge AI algorithms for accurate predictions." },
              { icon: <Target />, title: "Precision Targeting", description: "Achieve your goals with pinpoint accuracy." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Decision AI</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Decision AI is at the forefront of artificial intelligence technology, 
          dedicated to revolutionizing the way businesses and individuals make decisions. 
          Our cutting-edge AI solutions provide unparalleled insights, enabling you to 
          make informed choices with confidence.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="bg-blue-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white text-gray-800"
              />
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="mr-2" />
                Subscribe to Updates
              </Button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Decision AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}