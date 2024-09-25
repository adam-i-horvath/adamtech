import React, { useEffect, useState } from 'react';

const PageLoadTime = () => {
  const [PageLoadTime, setPageLoadTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    window.addEventListener('load', () => {
      const endTime = Date.now();
      const loadDuration = (endTime - startTime) / 1000; // Change to second
      setPageLoadTime(loadDuration.toFixed(3)); // Formatting to 4 decimal places
    });

    return () => window.removeEventListener('load', () => {});
  }, []);

  return (
    <div>
      <h1>The page load time: {PageLoadTime} sec</h1>
    </div>
  );
};

export default PageLoadTime;
