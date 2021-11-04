import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

import useStyle from './style';
const Header = () => {
const classes = useStyle()

    return (
      <AppBar position="static" color="transparent" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h" className={classes.logo}>
            PHARMACY
          </Typography>

          <Box className={classes.navbar}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Medicine</Typography>
            <Typography>Medicine Details</Typography>
            <Typography>Gallery</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
}

export default Header;