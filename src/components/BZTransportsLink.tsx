import Link from 'next/link';

const BZTransportsLink = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="/bzt"
        className="inline-flex items-center px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
          color: 'white',
        }}
      >
        <span className="font-semibold">BZ Transports</span>
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
};

export default BZTransportsLink;
