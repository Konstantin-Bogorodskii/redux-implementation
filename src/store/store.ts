import { configureStore } from '../redux/configureStore';
import { combineReducers } from './../redux/combineReducers';

import { countReducer } from './reducers/countReducer/countReducer';
import { userReducer } from './reducers/userReducer/userReducer';

const rootReducer = combineReducers({
	count: countReducer,
	user: userReducer
});

export const store = configureStore(rootReducer);
