import { createStore, applyMiddleware } from "redux";
import * as reduxLogger from "redux-logger";
import { thunk } from "redux-thunk";
import allReducers from "./reducers";
const logger = reduxLogger.createLogger();
const store = createStore(allReducers, applyMiddleware(thunk));

export { store };
