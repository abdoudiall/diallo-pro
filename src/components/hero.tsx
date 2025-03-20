'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
            Abdoulaye Diallo
          </h1>
          <h2 className="text-2xl mb-4 text-gray-200">
            Consultant expert en systèmes complexes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert technique polyvalent, j'interviens sur vos projets complexes en alliant vision stratégique et expertise opérationnelle.
          </p>
          <br />
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/abdoudiall"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006399] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.malt.fr/profile/abdoudiall"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC5757] text-white px-6 py-3 rounded-lg hover:bg-[#E54E4E] transition-colors"
            >
              Malt
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 