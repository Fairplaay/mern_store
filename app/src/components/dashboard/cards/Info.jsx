import React from 'react';
import { Typography, Grid, Card } from '@material-ui/core';

const Info = () => {
	return (
		<Grid container spacing={10}>
			<Grid item xs={12} md={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">TRAFFIC</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">NEW USER</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">SALES</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">PERFORMANCE</Typography>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Info;
