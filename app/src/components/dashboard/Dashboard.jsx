import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import Nav from './appbar/Nav.jsx';
import Hidden from '@material-ui/core/Hidden';

const Dashboard = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	/**
	 * change state for mobileOpen
	 * @return {Boolean}
	 */
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
