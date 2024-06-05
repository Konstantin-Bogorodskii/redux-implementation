import { State, Action } from '../../../redux/types';
import { INCREMENT, INCREMENT_BY_AMOUNT, DECREMENT, DECREMENT_BY_AMOUNT } from './constants';

type InitialState = {
	count: number;
};

const initialState: InitialState = {
	count: 0
};

export const countReducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case INCREMENT: {
			return {
				...state,
				count: state.count + 1
			};
		}

		case INCREMENT_BY_AMOUNT: {
			return {
				...state,
				count: state.count + action.payload
			};
		}

		case DECREMENT: {
			return {
				...state,
				count: state.count - 1
			};
		}

		case DECREMENT_BY_AMOUNT: {
			return {
				...state,
				count: state.count - action.payload
			};
		}

		default:
			return state;
	}
};
