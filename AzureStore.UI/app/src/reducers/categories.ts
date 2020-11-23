import { GET_CATEGORIES_SUCCESS, SELECT_CATEGORY } from "../actions/categories";
import Category from "../models/category";

const initialState = {
	categories: new Map<number, Category>(),
	current: undefined,
};

export function categories(state: any = initialState, action: any) {
	switch (action?.type) {
		case GET_CATEGORIES_SUCCESS: {
			return {
				...state,
				categories: new Map(
					action.payload.map(function (obj: Category) {
						return [obj.id, obj];
					})
				),
			};
		}
		case SELECT_CATEGORY: {
			return {
				...state,
				current: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}
