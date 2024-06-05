import { INCREMENT, INCREMENT_BY_AMOUNT, DECREMENT, DECREMENT_BY_AMOUNT } from './constants';

export const increment = () => ({
	type: INCREMENT
});

export const incrementByAmount = (amount: number) => ({
	type: INCREMENT_BY_AMOUNT,
	payload: amount
});

export const decrement = () => ({
	type: DECREMENT
});

export const decrementByAmount = (amount: number) => ({
	type: DECREMENT_BY_AMOUNT,
	payload: amount
});
