export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ... props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-primary text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-secondary text-white hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    green: 'bg-green-500 text-white hover:shadow-lg hover:scale-105',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md:  'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};