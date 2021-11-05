import { Button, Typography } from '@mui/material';
import React from 'react';

import useStyle from './style';
const Home = () => {
	const classes = useStyle();
	return (
    <main className={classes.home}>
      <section className={classes.intro_section}>
        <div className={classes.intro_section_text}>
          <div className={classes.logo_div}>
            <span className={classes.logo}>
              <img src="img\icon-ambulance.svg" alt="logo" />
            </span>

            <Typography display="inline" variant="h5">
              NEED AMBULANCE?
            </Typography>
          </div>
          <div>
             <Typography fontSize="5rem" variant="1">STAY HOME, STAY SAFE!</Typography>
          <p>
            Purchase medication from legitimate websites online. Search for a
            site to see if it is safe or not recommended. Join 8,405 of happy
            customers from the USA who give us a 99% satisfaction rate. They
            talk about
          </p>
          <Button color="primary">UPLOAD PRESCRIPTION</Button>
          </div>
         
        </div>
        <div>second section</div>
      </section>

      <section className={classes.services}>
        thi is the services section
      </section>
      <section className={classes.medicine}>The medicine section</section>
      <section className={classes.about}>this is the about section</section>

      <section className={classes.medicine_serve}>
        medicine serve section
      </section>
      <section className={classes.testimonial}>
        this is the testimonial section
      </section>

      <section className={classes.subscribe}>get lastest news section</section>

      <footer className={classes.footer}>this is the footer section</footer>
    </main>
  );
};

export default Home;
