import React from 'react';
import { Avatar, makeStyles, Grid, Chip, Typography, Tooltip, Hidden } from '@material-ui/core';
import Search from './Search.jsx';
import { logout } from 'services/auth';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: 8
	},
	chip: {
		marginTop: 8
	},
	typographyTitle: {
		marginTop: 14,
		color: 'white',
		fontWeight: 'bold'
	}
}));
const SearchBar = ({ name }) => {
	const classes = useStyles();

	const handleCloseSesion = async () => {
		await logout();
		window.location.reload();
	};
	return (
		<Grid container spacing={2} className={classes.root}>
			<Hidden smDown>
				<Grid item md={3} lg={6}>
					<Typography className={classes.typographyTitle}>{name}</Typography>
				</Grid>
			</Hidden>
			<Grid item xs={8} md={6} lg={4}>
				<Search />
			</Grid>
			<Grid item xs={4} md={3} lg={2}>
				<Tooltip title="Cerrar sesión" className={classes.chip}>
					<Chip
						avatar={
							<Avatar
								alt="avatar"
								src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.23007132.jpg"
							/>
						}
						label="Jessica Arroyo"
						onDelete={() => {
							handleCloseSesion();
						}}
						color="primary"
					/>
				</Tooltip>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
