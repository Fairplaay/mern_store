import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(1)
	}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

const Menu = ({ open, onClose }) => {
	return (
		<Dialog fullScreen aria-labelledby="customized-dialog-title" open={open} onClose={onClose}>
			<DialogTitle id="customized-dialog-title" onClose={onClose}>
				<Typography
					variant="h5"
					component="h1"
					style={{
						fontWeight: 'bold',
						color: 'rgba(0, 12, 78, 1)',
						fontFamily: '"Notable", sans-serif'
					}}
				>
					Mywebsite
				</Typography>
			</DialogTitle>
			<DialogContent dividers>
				<Typography gutterBottom>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
					facilisis in, egestas
				</Typography>
			</DialogContent>
		</Dialog>
	);
};

export default Menu;
