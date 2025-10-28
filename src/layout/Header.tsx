import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8 md:mb-12">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
        Aplikasi Todo List✨
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Kelola tugas dan rencana kamu dengan rekomendasi bertenaga AI. Lebih produktif, lebih efisien!
      </p>
    </div>
  );
};