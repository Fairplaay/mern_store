import axios from 'axios';
import decode from 'jwt-decode';

export const login = async (data, history) => {
	const url = 'http://localhost:3001/api/auth/signin';
	try {
		const response = await axios.post(url, data);
		await setToken(response.data.token);
		history.push('/');
	} catch (err) {
		throw err;
	}
};

export const register = async (data, history) => {
	const url = 'http://localhost:3001/api/auth/signup';
	try {
		const response = await axios.post(url, data);
		await setToken(response.data.token);
		history.push('/');
	} catch (err) {
		throw err;
	}
};

export const setToken = idToken => {
	// Saves user token to localStorage
	localStorage.setItem('id_token', idToken);
};

export const getToken = () => {
	// Retrieves the user token from localStorage
	return localStorage.getItem('id_token');
};

export const loggedIn = () => {
	// Checks if there is a saved token and it's still valid
	const token = getToken(); // GEtting token from localstorage
	return !!token && !isTokenExpired(token); // handwaiving here
};

export const logout = () => {
	// Clear user token and profile data from localStorage
	localStorage.removeItem('id_token');
};

export const getProfile = () => {
	// Using jwt-decode npm package to decode the token
	return decode(getToken());
};

export const isTokenExpired = token => {
	try {
		const decoded = decode(token);
		if (decoded.exp < Date.now() / 1000) {
			// Checking if token is expired. N
			return true;
		} else return false;
	} catch (err) {
		return false;
	}
};
