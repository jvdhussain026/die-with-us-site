import type { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ 
  children, 
  className = '',
  glowColor = '#5CFF7A',
}: GlowCardProps) {
  return (
    <div 
      className={`group relative bg-[#131316] border border-[#1F1F24] rounded-2xl p-6 transition-all duration-300 hover:border-[#2A2A30] ${className}`}
      style={{
        transitionProperty: 'border-color, box-shadow',
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          boxShadow: `0 0 30px ${glowColor}10`,
        }}
      />
      {children}
    </div>
  );
}
