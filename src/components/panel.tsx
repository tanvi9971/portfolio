export const Panel: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div className={`relative bg-gray-200 rounded-xl shadow-xl ${className}`}>
    {children}
  </div>
);
