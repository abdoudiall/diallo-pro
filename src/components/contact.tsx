'use client';

import { motion } from 'framer-motion';
import { 
  SiLinkedin, 
  SiMalt, 
  SiGmail,
  SiGithub
} from 'react-icons/si';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

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
    href: 'mailto:abdoulaye.diallo.pro@gmail.com',
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

export function Contact() {
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
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            N'hésitez pas à me contacter pour discuter de votre projet
          </p>
        </motion.div>

        <div className="flex justify-center space-x-6">
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
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
      </div>
    </section>
  );
} 