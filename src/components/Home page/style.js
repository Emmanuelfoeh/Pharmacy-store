import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  // Home main
  home: {
    // height:'calc(100vh - 64px)',
    // backgroundColor:'bisque',
    overflowX: "hidden",
  },
  //   intro-section
  intro_section: {
    // backgroundColor: "gray",
    paddingTop: "4rem",
    // backgroundColor:'green',
  },
  container: {
    maxWidth: "69.5rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "4rem",
    // backgroundColor: "yellow",
    // margin: "4rem 0",
    // padding: "5rem 1rem",
  },
  intro_section_text: {},
  logo_div: {
    // display:'flex',
    "& span": { marginRight: "1rem" },
  },

  intro_section_img: {
    position: "relative",
    // backgroundColor:'blue',
  },
  sideBall: {
    position: "absolute",
    right: "-8rem",
    bottom: "-8rem",
    width: "90%",
    height: "150%",
    backgroundColor: "#BFECFF",
    borderRadius: "60%",
  },
  bigBall: {
    position: "absolute",
    top: "-3rem",
    width: "12rem",
    height: "12rem",
    backgroundColor: "#F99E94",
    borderRadius: "50%",
    zIndex: "1",
  },
  smallBall: {
    position: "absolute",
    left: "-4rem",
    top: "11rem",
    width: "6rem",
    height: "6rem",
    backgroundColor: "#FEB517",
    borderRadius: "50%",
  },
  hero_img: {
    width: "100%",
    position: "absolute",
    right: "-7rem",
    zIndex: "3",
    overflow: "hidden",
    borderRadius: "20px",
  },
  heroImg: {
    width: "120%",
  },

  //   Service Section css
  services: {},
  services_container: {
    width: "69.5rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "6rem",
    // backgroundColor: "#a44be1",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      justifyContent: "center",
    },
  },
  services_box: {
    display: "flex",
    marginLeft: "1rem",
    gap: "1.2rem",
    padding: "2rem 1rem",
    [theme.breakpoints.down("md")]: {
      // flexDirection: "column",
      justifyContent: "center",
      marginLeft: "0",
      order: "1",
      gap: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "red",
    },
    // backgroundColor: "#F99E94",
  },

  boxItem: {
    width: "16rem",
    height: "16rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    borderRadius: "1rem",
    // rowGap:'1rem',
    // backgr/oundColor: "#10BFC1",
    textAlign: "center",

    "& img": {
      width: "3rem",
      // marginBottom: '1rem',
    },
  },
  "col1,col2": {
    display: "flex",
    flexDirection: "column",
  },

  col1: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.2rem",
  },

  col2: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1.4rem",
    rowGap: "1.2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "0",
    },
  },

  service_text: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      marginLeft: "1rem",
    },
  },
  // medicine section
  medicine: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  medicine_container:{
width: "69.5rem",
margin:'0 auto',
  },
  medicine_header: {
    display: "flex",
    justifyContent: "space-between",
    "& h1": { fontSize: "3rem" },
    marginBottom: "0.5rem",
  },
  buttonView: {
    borderRadius: "4rem !important",
    padding: "0 2rem !important",
  },
  horizontal_line: {
    width: "99%",
    margin: "0 auto",
  },
  medicine_card: {
    display: "grid",
    gridTemplateColumns: "20rem 20rem 20rem",
    // width: "90%",
    justifyContent: "center",
    columnGap: "3rem !important",
    padding: "2rem 1rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "20rem",
    },
  },
  card1: {
    // width: "30%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FEF3F1 !important",
    position: "relative",
    transition: "transform 100ms ease-in",

    "& img": {
      width: "60%",
      margin: "0 auto",
      position: "absolute",
      top: "0.8rem",
    },

    "&:hover": {
      transform: "scale(1.07)",
      boxShadow: "0px 6px 18px -9px rgba(0,0,0,0.75)",
    },
  },
  card2: {
    // width:'18rem',
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FDFAEB !important",
    position: "relative",
    transition: "transform 100ms ease-in",

    "& img": {
      width: "60%",
      margin: "0 auto",
      position: "absolute",
      top: "0.8rem",
    },
    "&:hover": {
      transform: "scale(1.07)",
      boxShadow: "0px 6px 18px -9px rgba(0,0,0,0.75)",
    },
  },
  card3: {
    // width: "18rem",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#EDEFFC !important",
    transition: "transform 100ms ease-in",
    position: "relative",

    "& img": {
      width: "60%",
      margin: "0 auto",
      position: "absolute",
      top: "0.8rem",
    },
    "&:hover": {
      transform: "scale(1.07)",
      boxShadow: "0px 6px 18px -9px rgba(0,0,0,0.75)",
    },
  },
  circle: {
    width: "14rem",
    height: "14rem",
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    backgroundColor: "#FDC0BB",
    borderRadius: "50%",
  },
  circle2: {
    width: "14rem",
    height: "14rem",
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    backgroundColor: "#FDE8B1",
    borderRadius: "50%",
  },
  circle3: {
    width: "14rem",
    height: "14rem",
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    backgroundColor: "#AEACF7",
    borderRadius: "50%",
  },
  about: {
   
  },

  about__container:{
    width: "69.5rem",
    margin: "0 auto",
     display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    padding: "2rem",
  },
  about__text: {
    // backgroundColor: "gray",
    marginRight: "4rem",
  },
  about__text__heading: {
    color: "#FF827A",
    fontSize: "1.5rem",
  },
  about__text__header: {
    color: "#1B426A",
    fontSize: "2.5rem",
    fontWeight: "900",
    fontFamily: "Roboto sans-serif",
  },
  about__text__article: {
    color: "#8DA1B5",
    fontSize: "1rem",
    margin: "1rem 0",
    backgroundColor: "green",
  },
  aboutImage: {
    display: "flex",
    columnGap: "1rem",
    justifyContent: "flex-end",
    position: "relative",
    // backgroundColor:'red',
  },
  aboutImg1: {
    width: "19rem",
    marginTop: "5rem",
    position: "relative",
    borderRadius: "0.8rem",
    boxShadow: "0px 6px 18px -9px rgba(0,0,0,0.75)",
  },
  aboutImg2: {
    width: "19rem",
    position: "relative",
    left: "1rem",
    borderRadius: "0.8rem",
    boxShadow: "0px 6px 18px -9px rgba(0,0,0,0.75)",
  },
}));