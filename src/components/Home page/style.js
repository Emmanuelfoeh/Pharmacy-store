import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
home:{
    height:'calc(100vh - 64px)',
    // backgroundColor:'bisque',
},
intro_section:{
    maxWidth:'83.3125rem',
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    // backgroundColor:'green',
    padding:'1rem 1rem',
},
text_section_text:{},
logo_div:{
    display:'flex',
    "& span":{marginRight:"1rem"},
},
}));