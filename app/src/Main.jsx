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
import Auth from './components/auth/Auth.jsx';
import Dashboard from './components/dashboard/dashboard_component.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './store';

/**
 * component wrapper for the private routes
 * @param {Object} Component
 * @param {*} rest
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			store.getState().isLogin === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/authentication" />
			)
		}
	/>
);

const Main = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/" component={Dashboard} />
			<Route path="/authentication" component={Auth} />
		</Switch>
	);
};

export default Main;
