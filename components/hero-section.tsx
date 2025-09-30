'use client'

import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './ui/ImageWithFallback'
import { socialLinks } from '../lib/social-config'

export function HeroSection() {
  const floatingIcons = [
    { icon: Code, x: '10%', y: '20%', delay: 0 },
    { icon: Sparkles, x: '85%', y: '25%', delay: 0.5 },
    { icon: Github, x: '15%', y: '70%', delay: 1 },
    { icon: Linkedin, x: '80%', y: '75%', delay: 1.5 },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="início" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/30" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-[#1e40af]/20 dark:text-[#3b82f6]/30"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 0.8, 
              delay: item.delay,
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#1e40af]/10 dark:bg-[#3b82f6]/20 rounded-full mb-6"
            >
              <span className="text-[#1e40af] dark:text-[#3b82f6]">👋 Olá, eu sou</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent">
                Rodolfo Nascimento
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Desenvolvedor Full Stack
              <br />
              <span className="text-[#1e40af] dark:text-[#3b82f6]">Especialista em React & Node.js</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Transformo ideias em experiências digitais incríveis. Apaixonado por tecnologia 
              e sempre em busca de soluções inovadoras.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                size="lg" 
                className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white group cursor-pointer"
                onClick={() => scrollToSection('contato')}
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Entre em Contato
              </Button>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-muted hover:bg-[#1e40af] hover:text-white rounded-full transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded-full blur-lg opacity-30" />
              <ImageWithFallback
                src="/foto.png"
                alt="Rodolfo Nascimento - Desenvolvedor"
                width={320}
                height={320}
                priority={true}
                className="w-80 h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-dashed border-[#1e40af] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-dashed border-[#3b82f6] rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}