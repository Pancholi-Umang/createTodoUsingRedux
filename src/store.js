import { createStore } from "redux";

import todoRootReducer from './reducer/index'

const store = createStore(todoRootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;