/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file Main
 * @description wrapper for the app routes
 * @param {Object} props
 * @module app/src/Main.jsx
 */
import React from 'react';
import Dashboard from 'components/dashboard/Dashboard.jsx';
import Auth from 'components/auth/Auth.jsx';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { loggedIn } from 'services/auth';
import NoMatch from 'components/404';
/**
 * component wrapper for the private routes
 * @param {Object} Component
 * @param {*} rest
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			loggedIn() === true ? <Component {...props} /> : <Redirect to="/authentication" />
		}
	/>
);

const Main = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/" component={Dashboard} />
			<Route path="/dashboard" render={() => <Redirect to="/" />} />
			<Route path="/authentication" component={Auth} />
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Main;
