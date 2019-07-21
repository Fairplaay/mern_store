/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Sidebar
 * @description Sidebar showing only in desktop
 * @param {Object} props
 * @module components/dashboard/sidebar/Sidebar.jsx
 *
 */
import React from 'react';
import {
	Typography,
	Drawer,
	Hidden,
	ListItemIcon,
	ListItemText,
	MenuList,
	MenuItem,
	makeStyles
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MapIcon from '@material-ui/icons/Map';
import TabIcon from '@material-ui/icons/Tab';
import UserIcon from '@material-ui/icons/AccountCircle';
import { withRouter, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	logo: {
		textAlign: 'center'
	},
	drawerPaper: {
		width: drawerWidth
	}
}));

const Sidebar = props => {
	const classes = useStyles();
	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<Typography
					variant="h5"
					component="h1"
					style={{
						fontWeight: 'bold',
						color: 'rgba(0, 12, 78, 1)',
						fontFamily: '"Notable", sans-serif'
					}}
				>
					Mywebsite
				</Typography>
			</div>
			<MenuList>
				<MenuItem component={Link} to="/" selected={'/' === props.location.pathname}>
					<ListItemIcon>
						<InboxIcon style={{ color: 'yellow' }} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<TabIcon style={{ color: 'cyan' }} />
					</ListItemIcon>
					<ListItemText primary="Icons" />
				</MenuItem>
				<MenuItem
					component={Link}
					to="/maps"
					selected={'/maps' === props.location.pathname}
				>
					<ListItemIcon>
						<MapIcon style={{ color: 'orange' }} />
					</ListItemIcon>
					<ListItemText primary="Map" />
				</MenuItem>
				<MenuItem
					component={Link}
					to="/profile"
					selected={'/profile' === props.location.pathname}
				>
					<ListItemIcon>
						<UserIcon style={{ color: 'purple' }} />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</MenuItem>
			</MenuList>
		</div>
	);

	return (
		<div className={classes.root}>
			<nav className={classes.drawer} aria-label="Mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
};

export default withRouter(Sidebar);
