// import { makeStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { alpha } from "@mui/system";

export default makeStyles((theme) => ({

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5rem",
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
  },
  menuIcon: {
    
  }
}));
