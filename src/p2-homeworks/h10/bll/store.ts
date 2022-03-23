import { themeReducer } from './../../h12/bll/themeReducer';
import { combineReducers, createStore } from 'redux';
import { loadingReducer } from './loadingReducer';
import { requestReducer } from '../../h13/request-reducer';

const reducers = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  request: requestReducer,
});

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store; // for dev
