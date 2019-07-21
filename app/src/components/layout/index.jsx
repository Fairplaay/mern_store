import React, { useState } from 'react';
import Sidebar from 'components/layout/sidebar';
import SearchBar from 'components/layout/searchbar';
import NavBar from 'components/layout/navbar';
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

const Layout = props => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	/**
	 * change state for mobileOpen
	 * @return {Boolean}
	 */
	const handleModalToggle = () => setMobileOpen(!mobileOpen);
	return (
		<div className={classes.background}>
			<Hidden smUp>
				<NavBar handleDrawerToggle={handleModalToggle} />
			</Hidden>
			<Hidden xsDown implementation="css">
				<Sidebar />
			</Hidden>
			<div className={classes.container}>
				<Container>
					<Grid container spacing={8}>
						<Grid item xs={12}>
							<SearchBar />
						</Grid>
					</Grid>
					{props.children}
				</Container>
			</div>
		</div>
	);
};

export default Layout;
