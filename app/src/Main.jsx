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
import Dashboard from 'components/dashboard';
import Maps from 'components/maps';
import Profile from 'components/profile';
import Auth from 'components/auth';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from 'components/404';
import Layout from 'components/layout';
import { loggedIn } from 'services/auth';

const AppRoute = ({ component: Component, layout: Layout, name, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			<Layout name={name}>
				{loggedIn() === true ? <Component {...props} /> : <Redirect to="/authentication" />}
			</Layout>
		)}
	/>
);

const Main = props => {
	return (
		<Switch>
			<AppRoute exact path="/" layout={Layout} component={Dashboard} name="dashboard" />
			<AppRoute path="/profile" layout={Layout} component={Profile} name="profile" />
			<AppRoute path="/maps" layout={Layout} component={Maps} name="maps" />
			<Route path="/dashboard" render={() => <Redirect to="/" />} />
			<Route path="/authentication" component={Auth} />
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Main;
