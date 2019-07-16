import React from 'react';
import {
	Typography,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	useTheme,
	Fab
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MapIcon from '@material-ui/icons/Map';
import TabIcon from '@material-ui/icons/Tab';
import Menu from './Menu.jsx';

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

const Sidebar = ({ container, handleDrawerToggle, mobileOpen }) => {
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
				<Fab color="secondary" aria-label=".com" size="small">
					<Typography variant="overline">.com</Typography>
				</Fab>
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
					<ListItemText primary="icons" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MapIcon style={{ color: 'orange' }} />
					</ListItemIcon>
					<ListItemText primary="map" />
				</ListItem>
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<Hidden smUp implementation="css">
				<Menu open={mobileOpen} onClose={handleDrawerToggle} />
			</Hidden>
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
