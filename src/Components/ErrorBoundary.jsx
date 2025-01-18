import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, info) => {
    console.error("Error caught:", error, info);
    setHasError(true);
  };

  useEffect(() => {
    const errorHandler = (error, info) => handleError(error, info);
    window.onerror = errorHandler; // Global error handler (or use try-catch around async code)

    return () => {
      window.onerror = null; // Cleanup on unmount
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>We are working on fixing it.</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
