import React from 'react';
import { Grid } from '@material-ui/core';
const Profile = () => {
	return (
		<Grid container spacing={8}>
			<Grid item xs={4}>
				item 1
			</Grid>
			<Grid item xs={4}>
				item 2
			</Grid>
			<Grid item xs={4}>
				item 3
			</Grid>
		</Grid>
	);
};

export default Profile;
