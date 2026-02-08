
import React from 'react';

export const Footer = () => {
  return (
    <footer className="p-6 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold gradient-text text-center">Umesh Kotwal</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <p className="text-sm font-medium text-gray-400">
          Handcrafted with ❤️ & React
        </p>
      </div>
    </footer>
  );
};
