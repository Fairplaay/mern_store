export const data = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_DATA':
			return action.data;
		default:
			return state;
	}
};
