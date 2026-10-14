import React from 'react';

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const colors = {
    primary: 'text-accent-500',
    secondary: 'text-secondary-500'
  };

  return (
    <span className={`${colors[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;