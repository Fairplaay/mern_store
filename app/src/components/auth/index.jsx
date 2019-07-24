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
import React, { useEffect, useState } from 'react';
import SignIn from './signin/Signin.jsx';
import SignUp from './signup/Signup.jsx';
import { loggedIn } from 'services/auth';
import Toast from 'components/toast';
import {
	Typography,
	Tabs,
	Tab,
	makeStyles,
	Link,
	Grid,
	CardActions,
	Card,
	AppBar,
	CardHeader,
	Snackbar
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

const Auth = ({ history }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [error, setErrorMessage] = useState('');
	const [handleSnakbar, setHandleSnackBar] = useState(false);

	useEffect(() => {
		if (loggedIn()) history.replace('/');
	}, [history]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="root">
			<Grid className={classes.content} container justify="center" alignItems="center">
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card className={classes.card}>
						{/** card header */}
						<CardHeader
							style={{
								backgroundColor: '#11cdef',
								padding: 0
							}}
							title={
								<Typography
									variant="h5"
									component="h1"
									style={{
										fontWeight: 'bold',
										color: 'rgba(0, 12, 78, 1)',
										fontFamily: '"Notable", sans-serif',
										padding: 16,
										textAlign: 'center'
									}}
								>
									Mywebsite
								</Typography>
							}
							subheader={
								<AppBar position="static" color="default">
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
							}
						></CardHeader>
						{/** card contents */}
						{value === 0 && (
							<SignIn
								setErrorMessage={setErrorMessage}
								handleSnackBar={setHandleSnackBar}
							/>
						)}
						{value === 1 && <SignUp />}
						{/** card actions */}
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
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={handleSnakbar}
				onClose={() => setHandleSnackBar(false)}
				autoHideDuration={6000}
			>
				<Toast onClose={() => setHandleSnackBar(false)} variant="error" message={error} />
			</Snackbar>
		</div>
	);
};

export default Auth;
