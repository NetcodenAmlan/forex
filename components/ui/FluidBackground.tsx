import React from 'react';

export const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      <style>{`
        @keyframes blob-float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-blob-1 { animation: blob-float 20s infinite ease-in-out alternate; }
        .animate-blob-2 { animation: blob-float 25s infinite ease-in-out alternate-reverse; }
        .animate-blob-3 { animation: blob-float 30s infinite ease-in-out alternate; }
      `}</style>
      
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#050505] to-[#020202]" />

      {/* Optimized CSS Blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-teal-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob-1 will-change-transform" />
      <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob-2 will-change-transform" />
      <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen animate-blob-3 will-change-transform" />
      
      {/* Vignette & Noise Interaction */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] opacity-80" />
    </div>
  );
};