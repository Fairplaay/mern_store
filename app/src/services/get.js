import { getProfile, getToken } from './auth';
import axios from 'axios';

export const getUser = async () => {
	try {
		const profile = await getProfile();
		const url = `http://localhost:3001/api/user/getuser?id=${profile._id}`;
		const token = await getToken();
		const response = await axios.get(url, { headers: { 'auth-token': token } });
		console.log(response.data);
	} catch (err) {
		throw err;
	}
};
