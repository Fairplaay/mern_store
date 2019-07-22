import React, { useState } from 'react';
import Sidebar from 'components/layout/sidebar';
import SearchBar from 'components/layout/navbar-desktop';
import NavBar from 'components/layout/navbar-mobile';
import { Hidden, Container, makeStyles, Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	background: {
		height: '400px',
		backgroundImage: 'linear-gradient(87deg,#11cdef,#1171ef)'
	},
	container: {
		overflow: 'hidden',
		[theme.breakpoints.up('sm')]: {
			marginLeft: drawerWidth
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			overflow: 'hidden'
		}
	}
}));

const Layout = ({ children, name }) => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	/**
	 * change state for mobileOpen
	 * @return {Boolean}
	 */
	const handleToggleButtom = () => setMobileOpen(!mobileOpen);
	return (
		<div className={classes.background}>
			<Hidden smUp>
				<NavBar open={mobileOpen} handleToggleButtom={handleToggleButtom} />
			</Hidden>
			<Hidden xsDown implementation="css">
				<Sidebar />
			</Hidden>
			<div className={classes.container}>
				<Container>
					<Grid container spacing={8}>
						<Grid item xs={12}>
							<SearchBar name={name.toUpperCase()} />
						</Grid>
					</Grid>
					{children}
				</Container>
			</div>
		</div>
	);
};

export default Layout;
