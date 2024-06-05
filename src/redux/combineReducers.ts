import { Reducers, Reducer, Action, State } from './types';

export const combineReducers = (reducers: Reducers) => {
	const reducerKeys = Object.keys(reducers);
	const finalReducers: { [key: string]: Reducer<any, any> } = {};

	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];

		if (typeof reducers[key] === 'function') {
			finalReducers[key] = reducers[key];
		}
	}
	const finalReducerKeys = Object.keys(finalReducers);

	return (state: State, action: Action) => {
		let hasChanged = false;
		const nextState: State = {};
		for (let i = 0; i < finalReducerKeys.length; i++) {
			const key = finalReducerKeys[i];
			const reducer = finalReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);

			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
		return hasChanged ? nextState : state;
	};
};
