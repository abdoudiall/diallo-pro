import {
  FaEnvelope,
  FaPhoneAlt,
  FaTruckMoving,
  FaMapMarkerAlt,
  FaPeopleCarry,
  FaUserTie,
  FaQuoteLeft,
} from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const services = [
  {
    icon: <FaPeopleCarry size={36} className="text-blue-600" />,
    title: 'Déménagement',
    desc: 'Un accompagnement professionnel pour vos déménagements, avec soin et efficacité, partout en France et les villes frontalières.',
  },
  {
    icon: (
      <MdLocalShipping
        size={40}
        className="text-white bg-green-600 rounded-full p-1 shadow-lg border-2 border-white"
      />
    ),
    title: 'Livraison nationale',
    desc: 'Livraison rapide et sécurisée sur toute la France et les villes frontalières. Suivi et ponctualité garantis.',
  },
  {
    icon: <FaUserTie size={36} className="text-blue-500" />,
    title: 'Pros & Particuliers',
    desc: 'Des solutions sur-mesure pour les professionnels et les particuliers, adaptées à chaque besoin.',
  },
];

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function BZTransportsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-green-400 relative overflow-hidden">
      {/* Decorative SVG background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1e40af"
          fillOpacity="0.3"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      <div className="relative z-10 max-w-2xl w-full mx-auto p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30">
        <div className="flex flex-col items-center">
          {/* Truck Illustration (static) */}
          <div className="mb-6">
            <FaTruckMoving
              size={64}
              className="text-blue-700 drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 4px 16px #1e40af44)' }}
            />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-sm">
            BZ Transports
          </h1>
          {/* Motto (simple, no shine) */}
          <div className="mb-8 flex items-center gap-3 bg-gradient-to-r from-blue-100/80 to-green-100/80 px-5 py-3 rounded-xl shadow-sm border border-blue-200">
            <FaQuoteLeft className="text-blue-400 text-2xl" />
            <span className="italic text-lg text-gray-700 font-medium">
              <span className="font-semibold text-blue-800">
                Votre confiance, notre route. Chaque trajet compte, chaque client est unique.
              </span>
            </span>
          </div>
          <p className="text-xl text-gray-700 mb-8 font-medium flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-600" /> Livraison nationale (France) · Pros &
            Particuliers
          </p>

          {/* Service Cards */}
          <div className="w-full flex flex-col md:flex-row gap-6 mb-10">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-white/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200 group"
                style={{
                  background:
                    idx === 0
                      ? 'linear-gradient(135deg, #3b82f6 0%, #a7f3d0 100%)'
                      : idx === 1
                        ? 'linear-gradient(135deg, #059669 0%, #60a5fa 100%)'
                        : 'linear-gradient(135deg, #38bdf8 0%, #34d399 100%)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                }}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-base font-medium">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="w-full bg-white/90 rounded-2xl shadow-lg p-6 mb-8 flex flex-col items-center border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>Contactez-nous</span>
            </h2>
            <div className="flex flex-col gap-3 text-lg w-full max-w-md">
              <div className="flex items-center gap-3 bg-blue-100/80 rounded-lg px-3 py-2">
                <FaEnvelope className="text-blue-600" />
                <span className="text-gray-800 font-semibold">
                  Email :{' '}
                  <a
                    href="mailto:boubzic@gmail.com"
                    className="text-blue-800 font-bold hover:underline"
                  >
                    boubzic@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 bg-green-100/80 rounded-lg px-3 py-2">
                <FaPhoneAlt className="text-green-600" />
                <span className="text-gray-800 font-semibold">
                  Téléphone :{' '}
                  <a href="tel:+33767783793" className="text-green-800 font-bold hover:underline">
                    07 67 78 37 93
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold px-4 py-1 rounded-full shadow animate-pulse text-base">
                  Service disponible 24/7
                </span>
              </div>
            </div>
            <a
              href="mailto:boubzic@gmail.com"
              className="mt-6 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-green-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Demander un devis
            </a>
          </div>
          {/* Decorative delivery truck icon */}
          <div className="mt-2">
            <MdLocalShipping
              size={48}
              className="text-green-600 drop-shadow-lg bg-white rounded-full p-2 border-2 border-blue-200"
              title="Camion de livraison"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
