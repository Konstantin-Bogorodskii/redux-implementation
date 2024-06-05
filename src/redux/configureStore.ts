import { Reducer, Action, SubscribeListener } from './types';

export const configureStore = (reducer: Reducer) => {
	let state = reducer({}, { type: '__INITIAL__' });
	const subscribers: SubscribeListener[] = [];

	return {
		getState: () => state,
		dispatch: (action: Action) => {
			state = reducer(state, action);

			subscribers.forEach(cb => cb());
		},
		subscribe: (cb: SubscribeListener) => subscribers.push(cb)
	};
};
