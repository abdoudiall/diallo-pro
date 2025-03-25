'use client';

export function Footer() {
  return (
    <footer className="py-4 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="flex justify-center items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>© 2024</span>
          <span>Halinia Consulting</span>
          <span>•</span>
          <span className="text-xs">
            Développé avec{' '}
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              Cursor AI
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
