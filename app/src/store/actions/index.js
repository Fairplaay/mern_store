import axios from 'axios';
export const signIn = history => {
	return async dispatch => {
		try {
			const response = await axios.get('http://www.mocky.io/v2/5ba409112f00005b00968a9d');
			await dispatch({
				type: 'SAVE_DATA',
				data: response.data.data
			});
			await dispatch({
				type: 'USER',
				user: {
					notification: response.data.notifications_count,
					userName: response.data.userName
				}
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
