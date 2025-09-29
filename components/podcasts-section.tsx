'use client'

import { motion } from 'framer-motion'

export function PodcastsSection() {
  const podcastEmbeddings = [
    'https://open.spotify.com/embed/episode/2LpOf5aoukAzi6uf2kSOeP?utm_source=generator&theme=0',
    'https://open.spotify.com/embed/episode/06F3wnCpUBcyLvEdmpfFFe?utm_source=generator&theme=0',
  ]

  return (
    <section id="podcasts" className="py-20 bg-muted/30 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Participações em <span className="text-[#1e40af]">Podcasts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns podcasts onde compartilhei conhecimentos e experiências
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {podcastEmbeddings.map((embedUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
