import { combineReducers } from "redux";
import { catalog } from "./catalog";
import { categories } from './categories';
import { product } from './product';
import { ordering } from './ordering';

export default combineReducers({ catalog, categories, product, ordering });