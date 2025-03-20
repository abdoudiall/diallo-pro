'use client';

import { motion } from 'framer-motion';
import { 
  SiDotnet,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiDatadog,
  SiGrafana,
  SiMongodb,
  SiMysql,
  SiSnowflake,
  SiPrometheus
} from 'react-icons/si';
import { 
  CreditCardIcon, 
  ServerIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowPathIcon,
  SignalIcon
} from '@heroicons/react/24/outline';
import { IconType } from 'react-icons';
import { FC } from 'react';

interface IconWrapperProps {
  icon: IconType | FC;
  color: string;
  isHeroIcon: boolean;
}

const IconWrapper: FC<IconWrapperProps> = ({ icon: Icon, color, isHeroIcon }) => {
  if (isHeroIcon) {
    const HeroIcon = Icon as FC<{ className?: string }>;
    return (
      <div className={`${color} mb-2 transition-transform group-hover:scale-110`}>
        <HeroIcon className="h-8 w-8" />
      </div>
    );
  }
  
  const ReactIcon = Icon as IconType;
  return (
    <div className={`${color} mb-2 transition-transform group-hover:scale-110`}>
      <ReactIcon size={32} />
    </div>
  );
};

interface TechItem {
  name: string;
  icon: IconType | FC;
  isHeroIcon: boolean;
  color: string;
}

interface Domain {
  category: string;
  items: TechItem[];
}

const domains: Domain[] = [
  {
    category: 'Développement',
    items: [
      { name: '.NET', icon: SiDotnet, isHeroIcon: false, color: 'text-purple-600' },
      { name: 'Node.js', icon: SiNodedotjs, isHeroIcon: false, color: 'text-green-600' },
      { name: 'Paiement en ligne', icon: CreditCardIcon, isHeroIcon: true, color: 'text-blue-600' }
    ]
  },
  {
    category: 'Architecture cloud',
    items: [
      { name: 'AWS', icon: SiAmazon, isHeroIcon: false, color: 'text-orange-500' },
      { name: 'Microservices', icon: ServerIcon, isHeroIcon: true, color: 'text-blue-500' },
      { name: 'Terraform', icon: SiTerraform, isHeroIcon: false, color: 'text-purple-500' }
    ]
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'SQL', icon: SiMysql, isHeroIcon: false, color: 'text-blue-600' },
      { name: 'MongoDB', icon: SiMongodb, isHeroIcon: false, color: 'text-green-500' },
      { name: 'Snowflake', icon: SiSnowflake, isHeroIcon: false, color: 'text-blue-500' }
    ]
  },
  {
    category: 'Plateforme & outils',
    items: [
      { name: 'Kubernetes', icon: SiKubernetes, isHeroIcon: false, color: 'text-blue-500' },
      { name: 'Docker', icon: SiDocker, isHeroIcon: false, color: 'text-blue-400' },
      { name: 'GitHub Actions', icon: SiGithubactions, isHeroIcon: false, color: 'text-gray-600' }
    ]
  },
  {
    category: 'Transformation',
    items: [
      { name: 'Leadership', icon: UserGroupIcon, isHeroIcon: true, color: 'text-green-500' },
      { name: 'Agilité', icon: ArrowPathIcon, isHeroIcon: true, color: 'text-blue-500' },
      { name: 'Organisation', icon: UserGroupIcon, isHeroIcon: true, color: 'text-purple-500' }
    ]
  },
  {
    category: 'Observabilité',
    items: [
      { name: 'Datadog', icon: SiDatadog, isHeroIcon: false, color: 'text-purple-400' },
      { name: 'Grafana', icon: SiGrafana, isHeroIcon: false, color: 'text-orange-500' },
      { name: 'Prometheus', icon: SiPrometheus, isHeroIcon: false, color: 'text-red-500' }
    ]
  }
];

export function Technologies() {
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
          <h2 className="text-3xl font-bold mb-4">Domaines d'expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Compétences techniques et organisationnelles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <IconWrapper icon={tech.icon} color={tech.color} isHeroIcon={tech.isHeroIcon} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 