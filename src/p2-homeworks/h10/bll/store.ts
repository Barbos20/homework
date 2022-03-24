import { themeReducer } from './../../h12/bll/themeReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { loadingReducer } from './loadingReducer';
import { requestReducer } from '../../h13/request-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  request: requestReducer,
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;

export type AppStoreType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store; // for dev
