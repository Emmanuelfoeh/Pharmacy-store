import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
const materialUItheme = createTheme({
	palette: {
		type: 'light',
	},
});
const Entry = () => {
	return (
		<Router>
			<ThemeProvider theme={materialUItheme}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="contact" element={<ContactUs />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
};

export default Entry;
