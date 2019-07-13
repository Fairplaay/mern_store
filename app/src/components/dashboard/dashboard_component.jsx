import React, { useState } from 'react';
import Sidebar from './sidebar/sidebar_component.jsx';
import Nav from './appbar/nav_component.jsx';
import Hidden from '@material-ui/core/Hidden';

const Dashboard = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	return (
		<div>
			<Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
			<Hidden smUp implementation="css">
				<Nav handleDrawerToggle={handleDrawerToggle} />
			</Hidden>
		</div>
	);
};

export default Dashboard;
