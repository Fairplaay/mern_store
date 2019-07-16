import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import Nav from './appbar/Nav.jsx';
import Info from './cards/Info.jsx';
import { Hidden, Container, makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	backgroud: {
		height: '400px',
		backgroundImage: 'linear-gradient(87deg,#11cdef,#1171ef)'
	},
	container: {
		[theme.breakpoints.up('sm')]: {
			marginLeft: drawerWidth
		},
		[theme.breakpoints.down('sm')]: {
			width: 'auto'
		}
	}
}));
const Dashboard = () => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);
	/**
	 * change state for mobileOpen
	 * @return {Boolean}
	 */
	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
	return (
		<div className={classes.backgroud}>
			<Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
			<Hidden smUp implementation="css">
				<Nav handleDrawerToggle={handleDrawerToggle} />
			</Hidden>
			<div className={classes.container}>
				<Container>
					<Info />
				</Container>
			</div>
		</div>
	);
};
export default Dashboard;
