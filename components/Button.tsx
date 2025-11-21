import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  fullWidth = false
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-none uppercase tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-red-600 focus:ring-red-500 shadow-lg shadow-red-500/30",
    secondary: "bg-secondary text-white hover:bg-blue-900 focus:ring-blue-800 shadow-lg shadow-blue-900/30",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-gray-100 focus:ring-white shadow-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};