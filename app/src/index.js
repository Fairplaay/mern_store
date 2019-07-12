import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<CssBaseline />
			<Router>
				<Main />
			</Router>
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
