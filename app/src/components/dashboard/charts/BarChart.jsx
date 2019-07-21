import React, { useState, useEffect, useRef } from 'react';
import { Card, Divider, CardHeader, Typography } from '@material-ui/core';
import Chart from 'chart.js';

/**
 * options for chart
 */
const chartOptions = {
	legend: {
		display: false
	},
	scales: {
		yAxes: [
			{
				ticks: {
					fontColor: '#BBBCC1',
					stepSize: 5
				}
			}
		],
		xAxes: [
			{
				ticks: {
					fontColor: '#BBBCC1'
				},
				maxBarThickness: 10
			}
		]
	}
};

const BarChart = props => {
	const [ctx, setCtx] = useState(null);

	// ref dom element canvas
	const refCanvas = useRef();

	useEffect(() => {
		/**
		 * Get the context of canvas 2d
		 * Create chart if ctx its not empty
		 */
		setCtx(refCanvas.current.getContext('2d'));
		if (ctx !== null) {
			new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
					datasets: [
						{
							label: 'Total orders',
							backgroundColor: '#fb6340',
							data: [40, 49, 40, 38, 42, 40, 34]
						}
					]
				},
				options: chartOptions
			});
		}
	}, [ctx]);

	return (
		<div>
			<Card style={{ borderRadius: '9px' }}>
				<CardHeader
					title={<Typography variant="caption">PERFORMANCE</Typography>}
					subheader={<Typography variant="h6">Total orders</Typography>}
				/>
				<Divider />
				<canvas height="322" ref={refCanvas}></canvas>
			</Card>
		</div>
	);
};

export default BarChart;
