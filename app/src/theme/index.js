import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		common: { black: '#000', white: '#fff' },
		background: { paper: '#fff', default: '#fafafa' },
		primary: {
			light: 'rgba(119, 220, 252, 1)',
			main: '#11cdef',
			dark: 'rgba(1, 72, 110, 1)',
			contrastText: '#fff'
		},
		secondary: {
			light: 'rgba(180, 184, 189, 1)',
			main: '#1D36F6',
			dark: 'rgba(87, 97, 112, 1)',
			contrastText: '#FFFFFF'
		},
		error: {
			light: 'rgba(235, 54, 54, 1)',
			main: 'rgba(255, 0, 0, 1)',
			dark: 'rgba(100, 0, 0, 1)',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(253, 3, 3, 1)'
		}
	}
});

export default theme;
