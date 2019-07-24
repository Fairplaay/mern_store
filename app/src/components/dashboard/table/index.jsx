import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	CardContent,
	CardHeader,
	Typography,
	Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	}
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				title={<Typography variant="h6">Page visits</Typography>}
				action={
					<Button size="small" variant="contained" color="secondary">
						see all
					</Button>
				}
			/>
			<CardContent>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
