import { motion } from 'motion/react'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent mb-4">
              João Silva
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras 
              e experiências de usuário excepcionais.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-[#1e40af]">Links Rápidos</h4>
            <div className="space-y-2">
              {['Início', 'Sobre', 'Skills', 'Projetos', 'Contato'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-muted-foreground hover:text-[#1e40af] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-[#1e40af]">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 joao.silva@email.com</p>
              <p>📱 +55 (11) 99999-9999</p>
              <p>📍 São Paulo, SP - Brasil</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2024 João Silva. Feito com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>e muito ☕</span>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Voltar ao Topo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}