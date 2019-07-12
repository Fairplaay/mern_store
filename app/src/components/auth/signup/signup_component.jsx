import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, CardContent, makeStyles, Grid } from '@material-ui/core';
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
			height: 380
		}
	}
}));

const validate = values => {
	const errors = {};
	const requiredFields = ['name', 'lastname', 'email', 'password'];
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

const SignUp = ({ handleSubmit, pristine, submitting }) => {
	const classes = useStyles();

	const submit = values => {
		console.log(values);
	};

	return (
		<CardContent className={classes.cardContent}>
			<form className={classes.form} onSubmit={handleSubmit(submit)} noValidate>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<Field
							id="name"
							label="Nombre"
							name="name"
							component={RenderTextField}
							type="text"
							margin="normal"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<Field
							id="lastname"
							label="Apellido"
							name="lastname"
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

export default reduxForm({ form: 'my-signup-form', validate })(SignUp);
