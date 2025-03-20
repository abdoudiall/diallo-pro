'use client';

import { motion } from 'framer-motion';
import { 
  SiDocker
} from 'react-icons/si';
import { UserGroupIcon, CreditCardIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Systèmes de paiement en ligne',
    description: 'De la conception à l\'optimisation, une expertise technique approfondie pour des solutions de paiement en ligne fiables et évolutives.',
    icon: CreditCardIcon,
    color: 'text-blue-500',
  },
  {
    title: 'Leadership technico-fonctionnel',
    description: 'Facilitation et accompagnement des équipes avec une approche pragmatique orientée résultats et efficacité collective.',
    icon: UserGroupIcon,
    color: 'text-green-500',
  },
  {
    title: 'Backend & cloud',
    description: 'Vision globale des architectures techniques, de la conception au déploiement, avec un focus sur la scalabilité et la maintenabilité.',
    icon: SiDocker,
    color: 'text-purple-500',
  },
  {
    title: 'Management & transformation',
    description: 'Accompagnement des équipes dans leur transformation technique et organisationnelle, avec une attention particulière à la collaboration et l\'amélioration continue.',
    icon: ChartBarIcon,
    color: 'text-orange-500',
  },
];

export function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Une approche polyvalente au service de vos projets techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg min-h-[250px]"
            >
              <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2 text-center whitespace-normal">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 