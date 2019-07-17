import React from 'react';
import { Avatar, makeStyles, Grid, Chip, Typography, Tooltip } from '@material-ui/core';
import Search from './Search.jsx';
import { logout } from 'services/auth';
const useStyles = makeStyles(theme => ({
	root: {
		margin: 8
	},
	chip: {
		marginTop: 8
	},
	typographyTitle: {
		color: 'white',
		fontWeight: 'bold'
	}
}));
const SearchBar = () => {
	const classes = useStyles();

	const handleCloseSesion = async () => {
		await logout();
		window.location.reload();
	};
	return (
		<Grid container spacing={2} className={classes.root}>
			<Grid item xs={6}>
				<Typography className={classes.typographyTitle}>DASHBOARD</Typography>
			</Grid>
			<Grid item xs={4}>
				<Search />
			</Grid>
			<Grid item xs={2}>
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
