import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);