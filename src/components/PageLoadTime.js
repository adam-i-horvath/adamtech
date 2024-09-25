import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const PageLoadTime = () => {
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startTime = performance.timing.navigationStart;
    const endTime = performance.timing.loadEventEnd;
    const loadTimeInSeconds = (endTime - startTime) / 1000;
    setLoadTime(loadTimeInSeconds);
  }, []);

  return <Box mb={2}>Page load time: {loadTime.toFixed(3)} seconds</Box>;
};

export default PageLoadTime;
