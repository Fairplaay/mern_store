/**
 * handle state for the Object isLogin
 * initialize data state in {} o change state
 * @param {Objeto} state
 * @param {Object} action
 * @return action.data
 * @return state
 */
export const data = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_DATA':
			return action.data;
		default:
			return state;
	}
};
