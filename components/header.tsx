'use client'

import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './theme-provider'
import { motion } from 'motion/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          className="text-xl font-bold bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Rodolfo Nascimento
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['início', 'sobre', 'skills', 'projetos', 'podcasts', 'contato'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-[#1e40af] transition-colors capitalize cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative cursor-pointer"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.div>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[100]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
                <SheetDescription className="text-left">
                  Navegue pelas seções do portfólio
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {['início', 'sobre', 'skills', 'projetos', 'podcasts', 'contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-lg py-3 px-4 rounded-lg text-foreground hover:bg-accent hover:text-[#1e40af] transition-all capitalize cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}