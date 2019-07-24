import React, { useState, useEffect, useRef } from 'react';
import { Card, Divider, CardHeader, Typography } from '@material-ui/core';
import Chart from 'chart.js';

/**
 * options for chart
 */
const chartOptions = {
	responsive: true,
	legend: {
		display: true,
		position: 'bottom',
		labels: {
			fontColor: '#333',
			fontSize: 16
		}
	}
};
const PieChart = props => {
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
				type: 'pie',
				data: {
					labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
					datasets: [
						{
							label: 'Total orders',
							data: [40, 19, 40, 42, 10],
							backgroundColor: [
								'#C6FF00',
								'#1D36F6',
								'#00E676',
								'#7B1FA2',
								'#C2185B'
							],

							borderWidth: [5, 5, 5, 5, 5]
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

export default PieChart;
