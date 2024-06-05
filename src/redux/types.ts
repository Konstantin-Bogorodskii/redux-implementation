export type State = any;

export interface Action {
	readonly type: string;
	readonly payload?: any;
}

interface AnyAction extends Action {
	[extraProps: string]: any;
}

export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

export type SubscribeListener = () => void;

export type Reducers = {
	[key: string]: Reducer<any, any>;
};
