/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file index
 * @description root component
 * @module index.jsx
 */
import React from 'react';
import theme from 'theme';
import store from 'store';
import ReactDOM from 'react-dom';
import Main from 'Main.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from 'serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * wrapper themeProvider for style theme in the app
 * wrapper Router for routes inthe app
 * wrapper Provider for store in the app
 * app mount in dom 'root' element
 */
ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline />
				<Main />
			</Provider>
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
