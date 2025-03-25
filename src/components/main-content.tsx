'use client';

import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { 
  SiDotnet, SiNodedotjs, SiAmazon, SiDocker, SiKubernetes, 
  SiGithubactions, SiTerraform, SiDatadog, SiGrafana, 
  SiMongodb, SiPostgresql, SiSnowflake, SiPrometheus,
  SiLinkedin, SiMalt, SiGithub
} from 'react-icons/si';
import { 
  CreditCardIcon, ServerIcon, UserGroupIcon, ArrowPathIcon, EnvelopeIcon,
  CloudArrowUpIcon, CodeBracketIcon, ChartBarSquareIcon
} from '@heroicons/react/24/outline';

// References
const companies = [
  {
    name: 'Cdiscount',
    logo: '/images/logos/Cdiscount.jpg',
    description: 'Leader français du e-commerce',
  },
  {
    name: 'HelloAsso',
    logo: '/images/logos/HelloAsso.svg',
    description: 'Première solution de paiement des associations',
  },
  {
    name: 'GSOI',
    logo: '/images/logos/GSOI.jpg',
    description: 'Groupe Sud-Ouest Interactive',
  },
  {
    name: 'Betclic',
    logo: '/images/logos/Betclic.png',
    description: 'Leader européen des paris sportifs en ligne',
  },
];

// Services/Expertise
const services = [
  {
    title: 'Systèmes de paiement en ligne',
    description: 'De la conception à l\'optimisation, une expertise technique approfondie pour des solutions de paiement en ligne fiables et évolutives.',
    icon: CreditCardIcon,
    color: 'text-blue-500',
  },
  {
    title: 'Leadership & transformation',
    description: 'Accompagnement des équipes dans leur transformation technique et organisationnelle, avec une approche pragmatique orientée résultats et amélioration continue.',
    icon: UserGroupIcon,
    color: 'text-green-500',
  },
  {
    title: 'Architecture & développement',
    description: 'Vision globale des systèmes d\'information, du développement au déploiement, en passant par la conception d\'architectures évolutives et maintenables.',
    icon: ServerIcon,
    color: 'text-purple-500',
  },
];

// Technical domains
const domains = [
  {
    category: 'Développement',
    items: [
      { name: '.NET', icon: SiDotnet, color: 'text-purple-600' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'API', icon: CodeBracketIcon, isHeroIcon: true, color: 'text-blue-600' }
    ]
  },
  {
    category: 'Architecture cloud',
    items: [
      { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
      { name: 'Serverless', icon: CloudArrowUpIcon, isHeroIcon: true, color: 'text-blue-500' },
      { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500' }
    ]
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Snowflake', icon: SiSnowflake, color: 'text-blue-500' }
    ]
  },
  {
    category: 'Plateforme & outils',
    items: [
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-gray-600' }
    ]
  },
  {
    category: 'Transformation',
    items: [
      { name: 'Leadership', icon: UserGroupIcon, isHeroIcon: true, color: 'text-green-500' },
      { name: 'Agilité', icon: ArrowPathIcon, isHeroIcon: true, color: 'text-blue-500' },
      { name: 'Organisation', icon: ChartBarSquareIcon, isHeroIcon: true, color: 'text-purple-500' }
    ]
  },
  {
    category: 'Observabilité',
    items: [
      { name: 'Datadog', icon: SiDatadog, color: 'text-purple-400' },
      { name: 'Grafana', icon: SiGrafana, color: 'text-orange-500' },
      { name: 'Prometheus', icon: SiPrometheus, color: 'text-red-500' }
    ]
  }
];

// Contacts
const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abdoudiall',
    icon: SiLinkedin,
    color: 'text-blue-600',
  },
  {
    name: 'Malt',
    url: 'https://www.malt.fr/profile/abdoudiall',
    icon: SiMalt,
    color: 'text-orange-500',
  },
  {
    name: 'Email',
    href: 'mailto:abdoulaye@diallo.pro',
    icon: EnvelopeIcon,
    isHeroIcon: true,
    color: 'text-blue-500'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/abdoudiall',
    icon: SiGithub,
    color: 'text-gray-800 dark:text-white',
  },
];

// Navigation
const navItems = [
  { name: 'Présentation', href: '#presentation' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Références', href: '#references' },
  { name: 'Contact', href: '#contact' },
];

export function MainContent() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <Tooltip.Provider delayDuration={200}>
        {/* Introduction */}
        <section id="presentation" className="pt-32 pb-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-6 sm:text-5xl">
                Abdoulaye Diallo
              </h1>
              <h2 className="text-2xl mb-8 text-gray-200">
                Consultant en systèmes d'information et transformation digitale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Expert technique, fonctionnel et organisationnel, j'accompagne vos projets de toute envergure en alliant vision stratégique et expertise opérationnelle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-16 bg-gray-800/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Expertise</h2>
              <p className="text-gray-400">
                Une approche polyvalente au service de vos projets techniques
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <service.icon className={`h-12 w-12 ${service.color}`} />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="competences" className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Compétences</h2>
              <p className="text-gray-400">
                Technologies, outils et méthodes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {domains.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                  <div className="flex flex-col space-y-4">
                    {category.items.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group"
                      >
                        {tech.isHeroIcon ? (
                          <tech.icon className={`h-6 w-6 ${tech.color} transition-transform group-hover:scale-110`} />
                        ) : (
                          <tech.icon className={`h-6 w-6 ${tech.color} transition-transform group-hover:scale-110`} />
                        )}
                        <span className="text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* References */}
        <section id="references" className="py-16 bg-gray-800/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Références clients</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center max-w-3xl mx-auto">
              {companies.map((company, index) => (
                <Tooltip.Root key={company.name}>
                  <Tooltip.Trigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      viewport={{ once: true }}
                      className="relative group w-full cursor-pointer"
                    >
                      <div className="w-full h-16 flex items-center justify-center transition-all duration-300">
                        <img
                          src={company.logo}
                          alt={`Logo ${company.name}`}
                          className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow-lg"
                      sideOffset={5}
                    >
                      {company.description}
                      <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-16 pb-8">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <p className="text-gray-400">
                N'hésitez pas à me contacter pour discuter de votre projet
              </p>
            </motion.div>

            <div className="flex justify-center space-x-6 mb-6">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.url || contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
                >
                  {contact.isHeroIcon ? (
                    <contact.icon className={`h-8 w-8 ${contact.color} mb-2`} />
                  ) : (
                    <contact.icon className={`h-8 w-8 ${contact.color} mb-2`} />
                  )}
                  <span className="text-sm font-medium">{contact.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto border-t border-gray-800"
            />
          </div>
        </section>
      </Tooltip.Provider>
    </>
  );
} 