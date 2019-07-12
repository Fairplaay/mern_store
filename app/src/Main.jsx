import React from 'react';
import Auth from './components/auth/auth_component.jsx';
import Dashboard from './components/dashboard/dashboard_component.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			props.isLogin === true ? <Component {...props} /> : <Redirect to="/authentication" />
		}
	/>
);

function App() {
	const isLogin = useSelector(state => state.isLogin);
	return (
		<Switch>
			<PrivateRoute exact path="/" component={Dashboard} state={isLogin} />
			<Route path="/authentication" component={Auth} />
		</Switch>
	);
}

export default App;
