/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Menu
 * @description Dialog Menu showing only in mobile device
 * @param {Object} props
 * @module components/dashboard/sidebar/Menu.jsx
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

export default function SimpleCard({ open, onClose }) {
	const classes = useStyles();

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
				<Typography className={classes.heading}>Expansion Panel 1</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
					lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}
