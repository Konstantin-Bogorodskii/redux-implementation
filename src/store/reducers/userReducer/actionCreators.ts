import { CREATE_USER } from './constants';
import { UserType } from './types';

export const createUser = (user: UserType) => ({
	type: CREATE_USER,
	payload: user
});
