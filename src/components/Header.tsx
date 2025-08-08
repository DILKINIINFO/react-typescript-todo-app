import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
        ✨ Todo Magic
      </h1>
      <p className="text-slate-300 text-lg">Transform your productivity with style</p>
    </div>
  );
};