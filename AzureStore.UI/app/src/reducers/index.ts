import { combineReducers } from "redux";
import { catalog } from "./catalog";
import { categories } from './categories';
import { product } from './product';
import { orders } from './orders';

export default combineReducers({ catalog, categories, product, orders });