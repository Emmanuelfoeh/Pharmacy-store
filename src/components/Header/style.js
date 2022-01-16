// import { makeStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { alpha } from "@mui/system";

export default makeStyles((theme) => ({
  
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "69.5rem",
    // backgroundColor:'green',
    margin: '0 auto',
    paddingLeft:'0 !important',
    paddingRight:'0 !important',
  },
  logo: {
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
    "& p:hover": { color: "blue" },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menuIcon: {
    display: "none !important",
    [theme.breakpoints.down("md")]: {
      display: "block !important",
    },
  },
}));
