/**
 * handle state for the Objet user
 * initialize user state in {} o change state
 * @param {Object} state
 * @param {Object} action
 * @return state
 * @return action.user
 */
export const user = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_USER':
			return action.user;
		default:
			return state;
	}
};
