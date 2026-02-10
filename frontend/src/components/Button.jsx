export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    ghost: 'btn-ghost',
  };

  const sizes = {
    sm: 'px-2.5 sm:px-3 py-2 sm:py-1.5 text-xs sm:text-sm',
    md: 'px-3 sm:px-4 py-2.5 sm:py-2.5 text-sm',
    lg: 'px-4 sm:px-6 py-3 sm:py-3 text-base min-h-[44px] sm:min-h-auto',
  };

  return (
    <button
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner" />}
      {children}
    </button>
  );
}
