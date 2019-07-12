import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, CardContent, makeStyles } from '@material-ui/core';
import RenderTextField from '../common/renderTextField_component.jsx';
import { emailRegex, passwordRegex } from '../../../plugins/regex';
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
			height: 340
		}
	}
}));

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

const SingIn = ({ handleSubmit, pristine, submitting }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const submit = values => {
		console.log(values);
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
			</form>
		</CardContent>
	);
};

export default reduxForm({ form: 'my-signin-form', validate })(SingIn);
