import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      {children}
    </section>
  );
};