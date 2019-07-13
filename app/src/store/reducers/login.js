/**
 * handle state for the boolean isLogin
 * initialize isLogin state in false o change state
 * @param {Objeto} state
 * @param {Boolean} action
 * @return action.isLogon
 * @return state
 */
export const isLogin = (state = false, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return action.isLogin;
		default:
			return state;
	}
};
