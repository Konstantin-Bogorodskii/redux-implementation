import { State, Action } from '../../../redux/types';
import { CREATE_USER } from './constants';
import { UserType } from './types';

type InitialState = {
	user: UserType | null;
};

const initialState: InitialState = {
	user: null
};

export const userReducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case CREATE_USER: {
			return {
				...state,
				user: action.payload
			};
		}

		default:
			return state;
	}
};
