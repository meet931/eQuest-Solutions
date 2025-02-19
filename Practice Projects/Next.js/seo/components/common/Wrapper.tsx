import React from "react";

interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<WrapperProps & { children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
