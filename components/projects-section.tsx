'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './ui/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce de Cursos Online',
      description: 'Plataforma de e-commerce para grande rede de escolas de educação profissional.',
      image: 'https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Java Spring Boot', 'Azure', 'PostgreSQL', 'Material-UI'],
      featured: true
    },
    {
      title: 'Centro de Operações Integrado',
      description: 'Plataforma de monitoramento e gerenciamento de operações de multinacional do ramo metalúrgico.',
      image: 'https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Python', 'PostgreSQL', 'TypeScript', 'AWS', 'Serverless', 'Lambda'],
      featured: false,
    },
    {
      title: 'Sistema para Consultoria Financeira',
      description: 'Website para uma empresa de consultoria financeira para oficinas mecânicas.',
      image: 'https://sistema.paulomaiaconsultoria.com.br/images/logo_black.png',
      technologies: ['React', 'Firebasee', 'TypeScript', 'Vercel'],
      demo: 'https://sistema.paulomaiaconsultoria.com.br',
      featured: false,
    },
    {
      title: 'Sistema para Controle de Alimentação Diário',
      description: 'Sistema para controle de alimentação diário pessoal, desenvolvido com o objetivo de controlar os alimentos ingeridos cada dia, para controle nutricional.',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Firebasee', 'TypeScript', 'Vercel'],
      demo: 'https://daily-food.vercel.app/',
      featured: false,
    },
    {
      title: 'Sistema para Controle Financeiro',
      description: 'Sistema para controle financeiro pessoal, desenvolvido com o objetivo de controlar as finanças pessoais.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Firebasee', 'TypeScript', 'Vercel'],
      demo: 'https://max-money-xi.vercel.app/',
      featured: false,
    },
    {
      title: 'Sistema para Controle de Estoque',
      description: 'Sistema para controle de estoque de cilindros de laminação para uma multinacional do ramo siderúrgico.',
      image: 'https://plus.unsplash.com/premium_photo-1661963449696-89b762c74a32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'PostgreSQL', 'Java Spring Boot', 'AWS'],
      featured: false,
    },
  ]

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-[#1e40af]">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Por motivos de privacidade, não é possível exibir todos os projetos. 
            Mas vou compartilhar alguns dos que desenvolvi recentemente.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${project.featured ? 'md:col-span-2' : ''}`}
            >
              <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-[#1e40af]/20 ${
                project.featured ? 'md:flex md:flex-row' : ''
              }`}>
                <motion.div 
                  className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 left-4"
                    >
                      <Badge className="bg-[#1e40af] text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                    </motion.div>
                  )}
                </motion.div>

                <CardContent className={`p-6 ${project.featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#1e40af]">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {project.demo && (
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white group"
            asChild
          >
            <a href="https://github.com/rodolfoND" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Ver Mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}