import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
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
            <Typography fontSize="2rem">555-789-345</Typography>
          </div>
          <div>
            <Typography fontSize="5rem" variant="1">
              STAY HOME, STAY SAFE!
            </Typography>
            <Typography fontSize="0.8rem" width="80%">
              Purchase medication from legitimate websites online. Search for a
              site to see if it is safe or not recommended. Join 8,405 of happy
              customers from the USA who give us a 99% satisfaction rate. They
              talk about
            </Typography>
            <Button
              className={classes.buttonView}
              variant="contained"
              color="primary"
            >
              UPLOAD PRESCRIPTION
            </Button>
          </div>
        </div>
        {/* second section in the introductiom */}
        <div className={classes.intro_section_img}>
          <div className={classes.bigBall}></div>
          <div className={classes.smallBall}></div>
          <div className={classes.sideBall}></div>
          <div className={classes.hero_img}>
            <img
              className={classes.heroImg}
              src="img/hero-img.jpg"
              alt="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Service section */}
      <section className={classes.services}>
        <div className={classes.services_box}>
          <div className={classes.col1}>
            <div
              style={{ backgroundColor: "#FF8F87" }}
              className={classes.boxItem}
            >
              <img src="img/icon-medication.svg" alt="first aid kit" />
              <Typography mt={1} variant="h5">
                Online Pharmacy
              </Typography>
              <Typography mt={2} component="p">
                Small river named Duden flows by their place and supplies
              </Typography>
            </div>
            <div
              style={{ backgroundColor: "#756EEF" }}
              className={classes.boxItem}
            >
              <img src="img/icon-heart.svg" alt="first aid kit" />
              <Typography mt={1} variant="h5">
                Doctor's Advise
              </Typography>
              <Typography mt={2} component="p">
                Small river named Duden flows by their place and supplies
              </Typography>
            </div>
          </div>
          <div className={classes.col2}>
            <div
              style={{ backgroundColor: "#2EEBEE" }}
              className={classes.boxItem}
            >
              {" "}
              <img src="img/icon-vaccine.svg" alt="first aid kit" />
              <Typography mt={1} variant="h5">
                Covid-19 Vaccine
              </Typography>
              <Typography mt={2} component="p">
                Small river named Duden flows by their place and supplies
              </Typography>
            </div>
            <div
              style={{ backgroundColor: "#FEB517" }}
              className={classes.boxItem}
            >
              <img src="img/icon-first-aid-kit.svg" alt="first aid kit" />
              <Typography mt={1} variant="h5">
                General Health
              </Typography>
              <Typography mt={2} component="p">
                Small river named Duden flows by their place and supplies
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.service_text}>
          <Typography variant="h5" color="#FF8F87" fontSize="1 rem">
            24/7 SERVICE
          </Typography>
          <Typography
            color="#1C416B"
            fontSize="3.5rem"
            fontWeight="bold"
            // width="70%"
            variant="h4"
          >
            The Allrounder Pharmacy Store
          </Typography>
          <Typography color="#B2BCC6" fontSize="1.3rem" component="p">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </Typography>
        </div>
      </section>
      <section className={classes.medicine}>
        <div className={classes.medicine_header}>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontSize="1.7rem"
            color="#1C416B"
          >
            Popular Medicine
          </Typography>
          <Button
            className={classes.buttonView}
            variant="contained"
            color="primary"
          >
            view all
          </Button>
        </div>
        <hr className={classes.horizontal_line} />

        <div className={classes.medicine_card}>
          <Card className={classes.card1} sx={{}}>
            <div className={classes.circle}></div>
            <img src="\img\popular-medicine1.png" alt="medicine" />
            <CardContent>
              <Typography
                textAlign="center"
                marginTop="2rem"
                gutterBottom
                variant="h5"
                component="div"
              >
                Aspirin
              </Typography>
              <Typography
                textAlign="center"
                variant="body2"
                color="#D8D6FA"
                fontSize="0.8rem"
                marginBottom="0.4rem"
              >
                cough, fever, migrain
              </Typography>
              <Typography
                textAlign="center"
                variant="h5"
                color="text.secondary"
                fontSize="1rem"
              >
                $25/30 Pieces
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card2} sx={{ maxWidth: 400 }}>
            <div className={classes.circle2}></div>
            <img src="\img\popular-medicine2.png" alt="medicine" />
            <CardContent>
              <Typography
                textAlign="center"
                marginTop="2rem"
                gutterBottom
                variant="h5"
                component="div"
              >
                Acetaminophen
              </Typography>
              <Typography
                textAlign="center"
                variant="body2"
                color="#D8D6FA"
                fontSize="0.8rem"
                marginBottom="0.4rem"
              >
                dry cough, fever, migrain
              </Typography>
              <Typography textAlign="center" variant="h5" fontSize="1rem">
                $25/30 Pieces
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card3} sx={{ maxWidth: 400 }}>
            <div className={classes.circle3}></div>
            <img src="\img\popular-medicine3.png" alt="medicine" />
            <CardContent>
              <Typography
                textAlign="center"
                marginTop="2rem"
                gutterBottom
                variant="h5"
                component="div"
              >
                Naproxen
              </Typography>
              <Typography
                textAlign="center"
                variant="body2"
                color="#D8D6FA"
                fontSize="0.8rem"
                marginBottom="0.4rem"
              >
                cough, fever, migrain
              </Typography>
              <Typography
                textAlign="center"
                variant="h5"
                color="text.secondary"
                fontSize="1rem"
              >
                $15/30 Pieces
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={classes.about}>
        <div className={classes.about__text}>
          <h5>ABOUT US</h5>
          <h2>THE FUTURE OF PHARMACY</h2>
          <article>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </article>

          <button>More about us</button>
        </div>
        <div className={classes.aboutImage}>
          {/* <div className={classes.bigBall}></div> */}
          <div >
            <img className={classes.aboutImg1} src="\img\pharmacy-imgabout1.jpg" alt="aboutimage1" />
          </div>

          <div >
            <img className={classes.aboutImg2} src="\img\pharmacy-imgabout2.jpg" alt="aboutimage2" />
          </div>
        </div>
      </section>

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
