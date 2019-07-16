/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */

/**
 * @file Singup
 * @description component for user register
 * @param {Object} props
 * @module app/src/components/auth/signup/Signup.jsx
 */
import React from 'react';
import RenderTextField from 'components/auth/common/RenderTextField.jsx';
import { withRouter } from 'react-router-dom';
import { register } from 'services/auth';
import { Field, reduxForm } from 'redux-form';
import { emailRegex, passwordRegex } from 'plugins/regex';
import { Button, CardContent, makeStyles, Grid } from '@material-ui/core';

/**
 * style for component
 */
const useStyles = makeStyles(theme => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		[theme.breakpoints.up('sm')]: {
			position: 'absolute',
			bottom: 20,
			width: 310
		}
	},
	cardContent: {
		[theme.breakpoints.up('sm')]: {
			height: 420
		}
	}
}));

/**
 * validate inputs
 * @param {Object} values
 * @return {Object} errors
 */
const validate = values => {
	const errors = {};
	const requiredFields = ['firstName', 'lastName', 'email', 'password'];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Campo requerido';
		}
	});
	if (values.email && !emailRegex.test(values.email)) {
		errors.email = 'Correo electrónico invalido';
	}
	if (values.password && !passwordRegex.test(values.password)) {
		errors.password = 'Contraseña invalida';
	}
	return errors;
};

const Signup = ({ handleSubmit, pristine, submitting, history }) => {
	const classes = useStyles();

	return (
		<CardContent className={classes.cardContent}>
			<form
				className={classes.form}
				onSubmit={handleSubmit(values => register(values, history))}
				noValidate
			>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<Field
							id="firstName"
							label="Nombre"
							name="firstName"
							component={RenderTextField}
							type="text"
							margin="normal"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<Field
							id="lastName"
							label="Apellido"
							name="lastName"
							component={RenderTextField}
							type="text"
							margin="normal"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Field
							id="email"
							label="Correo eletrónico"
							name="email"
							component={RenderTextField}
							type="email"
							margin="normal"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Field
							id="password"
							label="Password"
							name="password"
							component={RenderTextField}
							type="password"
							margin="normal"
							required
							autoComplete="current-password"
							fullWidth
						/>
					</Grid>
				</Grid>

				<Button
					disabled={pristine || submitting}
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Registrar
				</Button>
			</form>
		</CardContent>
	);
};

/**
 * HOC redux form for validations
 * HOC withRouter for access to history router
 */
export default reduxForm({ form: 'my-signup-form', validate })(withRouter(Signup));
