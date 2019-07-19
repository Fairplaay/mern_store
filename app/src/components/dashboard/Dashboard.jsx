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
import Sidebar from 'components/dashboard/sidebar/Sidebar';
import SearchBar from 'components/dashboard/searchbar/SearchBar';
import Nav from 'components/dashboard/appbar/Nav.jsx';
import Charts from 'components/dashboard/charts/LineChart';
import Cards from 'components/dashboard/cards/Cards';
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
					<Grid container spacing={8}>
						<Grid item xs={12}>
							<SearchBar />
						</Grid>
						<Grid item xs={12}>
							<Cards />
						</Grid>
						<Grid item xs={12} sm={12} lg={8}>
							<Charts />
						</Grid>
						<Grid item xs={12} sm={6} lg={4}>
							<Charts />
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};
export default Dashboard;
