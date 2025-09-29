'use client'

import { motion } from 'motion/react'
import { Code2, Users, Award, Gamepad2 } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export function AboutSection() {
  const stats = [
    { icon: Code2, label: 'Projetos Concluídos', value: '20+', color: 'text-[#1e40af]' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '50+', color: 'text-[#3b82f6]' },
    { icon: Award, label: 'Anos de Experiência', value: '13+', color: 'text-[#1e40af]' },
    { icon: Gamepad2, label: 'Gameplays para relaxar', value: '∞', color: 'text-[#3b82f6]' },
  ]

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-[#1e40af]">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções que fazem a diferença
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#1e40af]">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Olá! Sou Rodolfo Nascimento, um desenvolvedor full-stack com mais de 13 anos de experiência 
                criando aplicações web modernas e eficientes. Minha paixão pela programação começou 
                ainda na adolescência e desde então venho me especializando em tecnologias como 
                React, Java, TypeScript e Inteligência Artificial.
              </p>
              <p>
                Acredito que a tecnologia deve ser uma ferramenta para resolver problemas reais 
                e melhorar a vida das pessoas. Por isso, busco sempre criar soluções que sejam 
                não apenas funcionais, mas também intuitivas e acessíveis, 
                além de sempre estar atento aos avanços tecnológicos e a novas tendências.
              </p>
              <p>
              Sou um entusiasta de tecnologia com habilidades comprovadas em desenvolvimento de software, 
              liderança, modelagem de dados, inteligência artificial e confiabilidade. 
              Meu objetivo é contribuir para a evolução tecnológica das empresas, 
              sempre focado em entregar soluções inovadoras e de alta qualidade.
              </p>
              <p>
              Vamos conectar e explorar como podemos colaborar para impulsionar a transformação digital 
              e a inovação tecnológica de sua empresa!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/20 to-[#3b82f6]/20 rounded-lg blur-xl" />
            <Card className="relative bg-card/50 backdrop-blur-sm border-2 border-[#1e40af]/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-[#1e40af]">Principais Competências</h4>
                <div className="space-y-4">
                  {[
                    'Desenvolvimento Frontend com React, Next.js, Vue.js e TypeScript',
                    'Backend com Node.js, Express, Java Spring Boot, Python e APIs RESTful',
                    'Aplicações Mobile com React Native e Flutter',
                    'Bancos de dados SQL e NoSQL (SQL Server, PostgreSQL, MongoDB)',
                    'DevOps e Deploy (Docker, AWS, Vercel, Azure, GCP)',
                    'Metodologias ágeis e trabalho em equipe',
                    'Inteligência Artificial e Machine Learning',
                    'Confiança e Segurança na tecnologia',
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                      <span className="text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#1e40af]/20">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 mx-auto mb-4 ${stat.color}`}
                  >
                    <stat.icon className="w-full h-full" />
                  </motion.div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}