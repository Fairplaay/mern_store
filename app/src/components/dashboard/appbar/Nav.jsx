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
import DraftsIcon from '@material-ui/icons/Drafts';
import {
	AppBar,
	Typography,
	IconButton,
	makeStyles,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	list: {
		width: '100%'
	}
}));

const Nav = ({ open }) => {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<ExpansionPanel>
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
						onClick={open}
					>
						<MenuIcon />
					</IconButton>
				</ExpansionPanelSummary>
				<Divider />
				<ExpansionPanelDetails>
					<List
						className={classes.list}
						component="nav"
						aria-label="Main mailbox folders"
					>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon style={{ color: 'cyan' }} />
							</ListItemIcon>
							<ListItemText primary="Inbox" />
						</ListItem>
						<Divider />
						<ListItem button>
							<ListItemIcon>
								<DraftsIcon style={{ color: 'orange' }} />
							</ListItemIcon>
							<ListItemText primary="Drafts" />
						</ListItem>
					</List>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</AppBar>
	);
};

export default Nav;
