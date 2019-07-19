import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Card, Divider, CardHeader, Typography, Button } from '@material-ui/core';
import Chart from 'chart.js';
import './LineChart.css';

/**
 * mock data
 */
const data = {
	current_month_data: [
		40978,
		4916,
		11791,
		38367,
		42566,
		24628,
		40766,
		2715,
		2907,
		35334,
		6613,
		14151,
		31516,
		45561,
		1244,
		34356,
		18978,
		21692,
		24575,
		19644,
		23969,
		28397,
		17251,
		33159,
		24240,
		30103,
		29830,
		43360,
		36188,
		5963
	],
	past_month_data: [
		19044,
		38272,
		11016,
		9650,
		3888,
		2605,
		22118,
		34395,
		21232,
		29047,
		4497,
		36422,
		3391,
		32916,
		38814,
		15848,
		34263,
		31605,
		1940,
		4736,
		15019,
		4330,
		40982,
		3340,
		49986,
		49160,
		37666,
		48530,
		28615,
		4409
	]
};

/**
 * options for chart
 */
const chartOptions = {
	scales: {
		yAxes: [
			{
				ticks: {
					callback: function(label) {
						return label / 1000 + 'k';
					},
					fontColor: '#BBBCC1',
					stepSize: 10000
				}
			}
		],
		xAxes: [
			{
				ticks: {
					fontColor: '#BBBCC1'
				}
			}
		]
	}
};

const LineChart = props => {
	const [toggle, setToggle] = useState(0);
	const [ctx, setCtx] = useState(null);
	const [chart, setChart] = useState({});

	// ref dom element canvas
	const refCanvas = useRef();

	useEffect(() => {
		// get the context of canvas 2d
		// create chart
		setCtx(refCanvas.current.getContext('2d'));
		if (ctx !== null) {
			setChart(
				new Chart(ctx, {
					type: 'line',
					data: {
						labels: [0, 5, 10, 15, 20, 25, 30],
						datasets: [
							{
								label: 'Current month',
								backgroundColor: 'rgba(29, 54, 246, 0.1)',
								borderDash: [5, 5],
								borderWidth: '1',
								borderColor: '#007BFF',
								radius: 0,
								data: data.current_month_data
							}
						]
					},
					options: chartOptions
				})
			);
		}
	}, [ctx]);

	useEffect(() => {
		// if chart.data exist and the toggle is change
		if (chart.data) {
			if (toggle === 1) {
				chart.data.datasets[0].data = data.past_month_data;
				chart.data.datasets[0].label = 'Past month';
			} else {
				chart.data.datasets[0].data = data.current_month_data;
				chart.data.datasets[0].label = 'Current month';
			}
			chart.update();
		}
	}, [toggle]); // eslint-disable-line

	return (
		<div>
			<Card style={{ borderRadius: '9px', backgroundColor: '#32325d' }}>
				<CardHeader
					title={
						<Typography variant="caption" style={{ color: 'white' }}>
							OVERVIEW
						</Typography>
					}
					subheader={
						<Typography variant="h6" style={{ color: 'white' }}>
							Sales value
						</Typography>
					}
					action={
						<Fragment>
							<Button
								onClick={() => setToggle(0)}
								style={{
									borderColor: 'white',
									borderRadius: 10,
									margin: 8,
									textTransform: 'none'
								}}
								variant={toggle === 0 ? 'contained' : 'outlined'}
							>
								Current month
							</Button>
							<Button
								onClick={() => setToggle(1)}
								style={{
									borderColor: 'white',
									borderRadius: 10,
									margin: 8,
									textTransform: 'none'
								}}
								variant={toggle === 0 ? 'outlined' : 'contained'}
							>
								Past month
							</Button>
						</Fragment>
					}
				/>
				<Divider />
				<canvas ref={refCanvas}></canvas>
			</Card>
		</div>
	);
};

export default LineChart;
