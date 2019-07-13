/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */

/**
 * @file SingIn
 * @description component for user login
 * @param {Object} props
 * @module app/src/components/auth/signin/signin_component
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, CardContent, makeStyles, CircularProgress } from '@material-ui/core';
import RenderTextField from '../common/RenderTextField.jsx';
import { emailRegex, passwordRegex } from '../../../plugins/regex';

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
			height: 380
		}
	},
	buttonProgress: {
		color: theme.palette.secondary,
		position: 'absolute',
		bottom: 20,
		width: 310,
		margin: theme.spacing(3, 0, 3, 18)
	}
}));

/**
 * validate inputs
 * @param {Object} values
 * @return {Object} errors
 */
const validate = values => {
	const errors = {};
	const requiredFields = ['email', 'password'];
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

const SingIn = ({ handleSubmit, pristine, submitting, history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	/**
	 * dispact action for submit form
	 * @param {Object} values
	 */
	const submit = values => {
		const isRegister = false;
		dispatch(auth(values, history, isRegister));
	};

	return (
		<CardContent className={classes.cardContent}>
			<form className={classes.form} onSubmit={handleSubmit(submit)}>
				<Field
					id="email"
					label="Correo eletrónico"
					name="email"
					component={RenderTextField}
					type="email"
					margin="normal"
					fullWidth
				/>
				<Field
					id="password"
					label="Password"
					name="password"
					component={RenderTextField}
					type="password"
					margin="normal"
					fullWidth
					autoComplete="current-password"
				/>
				<Button
					disabled={pristine || submitting}
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Ingresar
				</Button>
				{submitting && <CircularProgress size={24} className={classes.buttonProgress} />}
			</form>
		</CardContent>
	);
};

/**
 * HOC redux form for validations
 * HOC withRouter for access to history router
 */
export default reduxForm({ form: 'my-signin-form', validate })(withRouter(SingIn));
