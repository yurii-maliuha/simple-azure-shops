import { combineReducers } from "redux";
import { catalog } from "./catalog";
import { categories } from './categories';

export default combineReducers({ catalog, categories });