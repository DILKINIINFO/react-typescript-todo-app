import React from 'react';

export const GlobalStyles: React.FC = () => {
  return (
    <style jsx global>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-30px) rotate(120deg); }
        66% { transform: translateY(-60px) rotate(240deg); }
      }
      
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-float {
        animation: float linear infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 0.6s ease-out forwards;
      }
      
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      
      .particles div {
        position: absolute;
        display: block;
        pointer-events: none;
      }
    `}</style>
  );
};