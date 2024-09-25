import React from 'react';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div div className="center-div">
      <div className="text">
        <p className="text__bio">Hi,</p>
        <p className="text__bio">my name is Adam!</p>
        <p className="text__bio">I'm a full-stack developer</p>
      </div>
      <Button color="secondary" variant="outlined">
        Contact me
      </Button>
    </div>
  );
};

export default Home;
