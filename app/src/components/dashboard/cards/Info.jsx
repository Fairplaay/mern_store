/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Info
 * @description container info cards
 * @param {Object} props
 * @module components/dashboard/cards/Info.jsx
 */
import React from 'react';
import { Typography, Grid, Card } from '@material-ui/core';

const Info = () => {
	return (
		<Grid container spacing={10}>
			<Grid item xs={12} md={6} lg={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">TRAFFIC</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">NEW USER</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Card
					style={{
						marginTop: '140px',
						padding: '10px'
					}}
				>
					<Typography color="textSecondary">SALES</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
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
