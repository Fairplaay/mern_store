/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Nav
 * @description component for Navbar, show only in mobile device
 * @param {Boolean} props.handleDrawerToggle
 * @module app/src/components/dashboard/appbar/Nav.jsx
 */
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';

import {
	AppBar,
	Typography,
	IconButton,
	makeStyles,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	ListItemIcon,
	ListItemText,
	Divider,
	MenuItem,
	MenuList
} from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import TabIcon from '@material-ui/icons/Tab';
import UserIcon from '@material-ui/icons/AccountCircle';
import { withRouter, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	list: {
		width: '100%',
		paddingBottom: 0
	}
}));

const NavBar = ({ open, handleToggleButtom, location: { pathname } }) => {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<ExpansionPanel expanded={open}>
				<ExpansionPanelSummary
					style={{ display: 'flex' }}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography
						variant="h5"
						component="h1"
						style={{
							paddingTop: 5,
							fontWeight: 'bold',
							color: 'rgba(0, 12, 78, 1)',
							fontFamily: '"Notable", sans-serif',
							flexGrow: 1
						}}
					>
						Mywebsite
					</Typography>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						edge="start"
						onClick={handleToggleButtom}
					>
						<MenuIcon />
					</IconButton>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails style={{ padding: '8px 0 0' }}>
					<MenuList className={classes.list}>
						<MenuItem
							component={Link}
							to="/"
							selected={'/' === pathname}
							onClick={handleToggleButtom}
						>
							<ListItemIcon>
								<InboxIcon style={{ color: 'yellow' }} />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</MenuItem>
						<MenuItem onClick={handleToggleButtom}>
							<ListItemIcon>
								<TabIcon style={{ color: 'cyan' }} />
							</ListItemIcon>
							<ListItemText primary="Icons" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/maps"
							selected={'/maps' === pathname}
							onClick={handleToggleButtom}
						>
							<ListItemIcon>
								<MapIcon style={{ color: 'orange' }} />
							</ListItemIcon>
							<ListItemText primary="Map" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/profile"
							selected={'/profile' === pathname}
							onClick={handleToggleButtom}
						>
							<ListItemIcon>
								<UserIcon style={{ color: 'purple' }} />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</MenuItem>
					</MenuList>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</AppBar>
	);
};

export default withRouter(NavBar);
