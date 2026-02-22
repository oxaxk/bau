import type { ReactNode } from 'react';
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950';
  
  const variants = {
    primary:
      'bg-[#0b1b30] text-white border border-slate-500 shadow-[0_14px_40px_rgba(15,23,42,0.85)] hover:bg-[#020617] hover:border-slate-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.95)]',
    secondary:
      'bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 hover:border-slate-400',
    outline:
      'bg-transparent text-slate-900 border border-slate-500 hover:bg-slate-900/5 hover:border-slate-400'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
