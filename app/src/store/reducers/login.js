export const isLogin = (state = false, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return action.isLogin;
		default:
			return state;
	}
};
