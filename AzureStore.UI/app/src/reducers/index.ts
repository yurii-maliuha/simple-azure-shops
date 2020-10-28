import { combineReducers } from "redux";
import { catalog } from "./catalog";
import { categories } from './categories';
import { product } from './product';

export default combineReducers({ catalog, categories, product });