import ApiService from "../../services/apiService";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const getCategoriesRequest = () => {
	return {
		type: GET_CATEGORIES_REQUEST,
	};
};

export const selectCategory = (payload?: number) => {
	return {
		type: SELECT_CATEGORY,
		payload,
	};
};

export const getCategoriesSuccess = (payload: any) => {
	return {
		type: GET_CATEGORIES_SUCCESS,
		payload,
	};
};

export const getCategoriesAction = () => {
	return (dispatch: any) => {
		dispatch(getCategoriesRequest());
		return ApiService.GetCommodityCategories().then((result) => {
			dispatch(getCategoriesSuccess(result));
		});
	};
};
