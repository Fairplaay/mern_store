import axios from 'axios';

/**
 * Async function for the login user
 * call to api for the login with the method POST using axios.
 * Dispatch action for save user and change isLogin to true.
 * Redirect to dashboard.
 * @param {object} data
 * @param {object} history
 */
export const auth = (data, history, isRegister) => {
	const url = isRegister
		? 'http://localhost:3001/api/user/signup'
		: 'http://localhost:3001/api/user/signin';

	return async dispatch => {
		try {
			const response = await axios.post(url, data);
			await dispatch({
				type: 'SAVE_USER',
				user: response.data
			});
			await dispatch({
				type: 'SIGN_IN',
				isLogin: true
			});
			history.push('/');
		} catch (err) {
			console.error(err.message);
		}
	};
};

export const closeSesion = history => {
	return async dispatch => {
		await history.push('/login');

		await dispatch({
			type: 'SIGN_IN',
			isLogin: false
		});
		await dispatch({
			type: 'SAVE_DATA',
			data: {}
		});
		await dispatch({
			type: 'USER',
			user: {}
		});
	};
};
