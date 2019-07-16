/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Auth
 * @description wrapper for the login and register
 * @param {Object} props
 * @module app/src/components/auth/Auth.jsx
 */
import React from 'react';
import SignIn from './signin/Signin.jsx';
import SignUp from './signup/Signup.jsx';
import {
	Tab,
	Tabs,
	Grid,
	Typography,
	CardActions,
	AppBar,
	Card,
	makeStyles,
	Link
} from '@material-ui/core';
import './background.css';

const useStyles = makeStyles(theme => ({
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: 1
	},
	card: {
		[theme.breakpoints.down('sm')]: {
			height: '100vh'
		},
		[theme.breakpoints.up('sm')]: {
			height: 'auto'
		}
	}
}));

const Auth = props => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="root">
			<Grid className={classes.content} container justify="center" alignItems="center">
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card className={classes.card}>
						<AppBar position="static" color="primary">
							<Tabs
								value={value}
								onChange={handleChange}
								style={{ margin: '0 auto' }}
								indicatorColor="secondary"
							>
								<Tab value={0} label="Ingresar" />
								<Tab value={1} label="Registrarse" />
							</Tabs>
						</AppBar>
						{value === 0 && <SignIn />}
						{value === 1 && <SignUp />}
						{value === 0 && (
							<CardActions>
								<Grid container>
									<Grid item xs>
										<Typography>no tienes cuenta?</Typography>
									</Grid>
									<Grid item>
										<Link onClick={() => setValue(1)} variant="body2">
											{'Registrate'}
										</Link>
									</Grid>
								</Grid>
							</CardActions>
						)}
					</Card>
				</Grid>
			</Grid>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
			<div className="cube"></div>
		</div>
	);
};

export default Auth;
