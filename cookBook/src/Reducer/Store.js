import { combineReducers, createStore } from "redux";
import * as reducers from './Reducer';

const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default store;