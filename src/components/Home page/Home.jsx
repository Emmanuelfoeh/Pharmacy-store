import { Grid } from '@mui/material';
import React from 'react';

import useStyle from './style';
const Home = () => {
	const classes = useStyle();
	return (
    <Grid container className={classes.home}>
		the home component
      {/* <Grid item xs={12} md={8}>
        first section
      </Grid>
      <Grid item xs={12} md={4}>
        2nd section
      </Grid>
      <Grid item xs={12} md={4}>
        third section
      </Grid>
      <Grid item xs={12} md={8}>
        fouth section
      </Grid> */}
    </Grid>
  );
};

export default Home;
