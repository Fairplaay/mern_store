/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Cards
 * @description container info cards
 * @param {Object} props
 * @module components/dashboard/cards/Cards.jsx
 */
import React from 'react';
import { Grid, Card, CardHeader, Avatar, CardActions } from '@material-ui/core';
import UserSharkIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import DataUsageIcon from '@material-ui/icons/DataUsageRounded';

const Cards = () => {
	return (
		<Grid container spacing={6}>
			{[1, 2, 3, 4].map((item, i) => (
				<Grid key={i} item xs={12} md={6} lg={3}>
					<Card>
						<CardHeader
							style={{ paddingBottom: 0 }}
							action={
								<Avatar style={{ backgroundColor: 'orange', marginTop: 16 }}>
									<UserSharkIcon style={{ color: 'white' }} />
								</Avatar>
							}
							title="350,897"
							subheader="Traffic"
						></CardHeader>
						<CardActions disableSpacing={true}>
							<Grid container>
								<Grid item sm={1}>
									<DataUsageIcon style={{ color: 'green', fontSize: 14 }} />
								</Grid>
								<Grid item sm={3} style={{ color: 'green' }}>
									3.48%
								</Grid>
								<Grid item sm={7}>
									Since last
								</Grid>
							</Grid>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Cards;
