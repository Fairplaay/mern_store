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
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MapIcon from '@material-ui/icons/Map';
import TabIcon from '@material-ui/icons/Tab';
import UserIcon from '@material-ui/icons/AccountCircle';

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

const Sidebar = ({ container }) => {
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
			<List>
				<ListItem button>
					<ListItemIcon>
						<InboxIcon style={{ color: 'yellow' }} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<TabIcon style={{ color: 'cyan' }} />
					</ListItemIcon>
					<ListItemText primary="Icons" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MapIcon style={{ color: 'orange' }} />
					</ListItemIcon>
					<ListItemText primary="Map" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<UserIcon style={{ color: 'purple' }} />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
			</List>
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

export default Sidebar;
