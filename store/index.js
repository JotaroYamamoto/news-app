import { createStore, combineReducers } from 'redux';
import userRedercer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userRedercer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
