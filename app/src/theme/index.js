import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		common: { black: 'rgba(0, 0, 0, 1)', white: '#fff' },
		background: { paper: '#fff', default: '#fafafa' },
		primary: {
			light: 'rgba(67, 61, 168, 1)',
			main: 'rgba(0, 12, 78, 1)',
			dark: '#303f9f',
			contrastText: 'rgba(255, 255, 255, 1)'
		},
		secondary: {
			light: '#ff4081',
			main: 'rgba(251, 0, 105, 1)',
			dark: '#c51162',
			contrastText: '#fff'
		},
		error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
		text: {
			primary: 'rgba(10, 0, 0, 0.87)',
			secondary: 'rgba(8, 15, 211, 0.54)',
			disabled: 'rgba(145, 145, 145, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	}
});

export default theme;
