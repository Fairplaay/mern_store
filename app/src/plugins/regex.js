export const emailRegex = new RegExp( // eslint-disable-next-line
	/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ 
);

export const passwordRegex = new RegExp(/^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/);
