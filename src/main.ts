import { store } from './store/store';
import { increment, incrementByAmount } from './store/reducers/countReducer/actionCreators';
import { createUser } from './store/reducers/userReducer/actionCreators';

console.log('store.getState() ==>', store.getState());

const dispatch = store.dispatch;

// const subscribe = store.subscribe;
// subscribe(() => console.log('subscribed ==>'));

dispatch(increment());
console.log('store.getState() ==>', store.getState());

dispatch(incrementByAmount(3));
console.log('store.getState() ==>', store.getState());

dispatch(createUser({ id: '123', email: 'test@mail.com' }));
console.log('store.getState() ==>', store.getState());
