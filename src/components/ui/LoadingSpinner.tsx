import React from 'react';
import { Spinner } from '@nextui-org/react';

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-4">
      <Spinner size="lg" color="primary" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
};