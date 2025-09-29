import { motion } from 'motion/react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com pagamentos integrados, dashboard administrativo e sistema de inventário.',
      image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU4NjM4MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: true,
      stats: { stars: 45, forks: 12 }
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real, notificações e relatórios.',
      image: 'https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmFja2dyb3VuZCUyMGFic3RyYWN0fGVufDF8fHx8MTc1ODYzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 32, forks: 8 }
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio responsivo com animações avançadas e sistema de contato integrado.',
      image: 'https://images.unsplash.com/photo-1675277714353-376f525d935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTg1OTkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 28, forks: 15 }
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
            Alguns dos projetos que desenvolvi recentemente
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                        <span>•</span>
                        <span>{project.stats.forks} forks</span>
                      </div>
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
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    </motion.div>
                  </div>
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Ver Mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}