/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Dashboard
 * @description container for all dashboard
 * @param {Object} props
 * @module components/dashboard/Dashboard.jsx
 */
import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import Nav from './appbar/Nav.jsx';
import Info from './cards/Info.jsx';
import SearchBar from './searchbar/SearchBar.jsx';
import { Hidden, Container, makeStyles } from '@material-ui/core';

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
			overflowX: 'hidden'
		}
	}
}));
const Dashboard = ({ history }) => {
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
				<Nav handleDrawerToggle={handleModalToggle} />
			</Hidden>
			<Hidden xsDown implementation="css">
				<Sidebar />
			</Hidden>
			<div className={classes.container}>
				<Container>
					<SearchBar />
					<Info />
				</Container>
			</div>
		</div>
	);
};
export default Dashboard;
