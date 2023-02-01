import { combineReducers } from "redux";
import TodoReducer from './todolist'

const RootReducer = combineReducers({TodoReducer});

export default RootReducer