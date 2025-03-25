'use client';

import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';

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

export function Hero() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <section className="pt-16 pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-2 sm:text-5xl">
              Abdoulaye Diallo
            </h1>
            <h2 className="text-2xl mb-2 text-gray-200">
              Consultant expert en systèmes d'information
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert technique polyvalent, j'interviens sur vos projets complexes en alliant vision stratégique et expertise opérationnelle.
            </p>

            {/* Section Références */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-lg font-medium text-gray-400 mb-6">
                Ils m'ont fait confiance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center max-w-3xl mx-auto">
                {companies.map((company, index) => (
                  <Tooltip.Root key={company.name}>
                    <Tooltip.Trigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Tooltip.Provider>
  );
} 