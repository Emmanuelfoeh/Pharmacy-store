// import { makeStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { alpha } from "@mui/system";


export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    "& p:hover": { color:'blue' },
  },
}));