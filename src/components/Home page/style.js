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
    maxWidth: "83.3125rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "#FEF3F2",
    margin: "4rem 0",
    padding: "5rem 1rem",
  },
  text_section_text: {},
  logo_div: {
    // display:'flex',
    "& span": { marginRight: "1rem" },
  },

  intro_section_img: {
    position: "relative",
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
    right: "-5rem",
    zIndex: "3",
    overflow: "hidden",
    borderRadius: "20px",
  },
  heroImg: {
    width: "100%",
  },

  //   Service Section css
  services: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "6rem",
    // backgroundColor: "#a44be1",
  },
  services_box: {
    display: "flex",
    marginLeft: "1rem",
    gap: "1.2rem",
    padding: "2rem 1rem",
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
  },

  service_text: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  // medicine section
  medicine: {},
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
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "2rem",
    
  },
  card1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FDE7E4 !important",
    position: "relative",
    transition: "all 5s ease",

    "& img": { width: "60%", margin: "0 auto",position: "absolute" ,top:'0.8rem'},

    "&:hover":{transform: 'scale(0.8) !important'},

  },
  card2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FDE7E4 !important",
    position: "relative",

    "& img": { width: "60%", margin: "0 auto",position: "absolute" ,top:'0.8rem'},

  },
  card3: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#FDE7E4 !important",
    position: "relative",

    "& img": { width: "60%", margin: "0 auto",position: "absolute" ,top:'0.8rem'},

  },
  circle: {
    width: "9rem", height:'9rem',
    display:'flex',
    justifyContent: 'center',
    marginTop:'1rem',
    backgroundColor: "red",
    borderRadius: "50%",
  },
}));