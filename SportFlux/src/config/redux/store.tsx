import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

// store = state global (bisa digunakan dimana saja)
export const store = createStore(reducer, applyMiddleware(thunk));