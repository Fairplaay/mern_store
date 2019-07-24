/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Dashboard
 * @description container for all dashboard
 * @param {Object} props
 * @module components/dashboard/Dashboard.jsx
 */
import React from 'react';
import Table from 'components/dashboard/table';
import Charts from 'components/dashboard/charts/LineChart';
import Cards from 'components/dashboard/cards';
import BarChart from 'components/dashboard/charts/BarChart';
import PieChart from 'components/dashboard/charts/PieChart';
import { Grid } from '@material-ui/core';
const Dashboard = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<Cards />
			</Grid>
			<Grid item xs={12} sm={12} lg={8}>
				<Charts />
			</Grid>
			<Grid item xs={12} sm={6} lg={4}>
				<BarChart />
			</Grid>
			<Grid item xs={12} sm={12} lg={8} style={{ marginBottom: 64 }}>
				<Table />
			</Grid>
			<Grid item xs={12} sm={12} lg={4} style={{ marginBottom: 64 }}>
				<PieChart />
			</Grid>
		</Grid>
	);
};
export default Dashboard;
