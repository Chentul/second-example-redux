import { createStore } from 'redux';
import countReducer from '../reducers/count.reducer';

export default() => createStore(countReducer);