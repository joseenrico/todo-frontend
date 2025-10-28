import React from 'react';
import { Divider } from '@nextui-org/react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 md:mt-12 text-center">
      <Divider className="mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Jose Enrico</span>. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <p className="text-sm flex items-center gap-1">
            <LightBulbIcon className="w-4 h-4" />
            Goodeva 2025
          </p>
        </div>
      </div>
    </footer>
  );
};