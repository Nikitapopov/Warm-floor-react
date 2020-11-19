import {popularProductsAPI} from "../api/api";

const SET_POPULAR_PRODUCTS = 'popPr/SET_POPULAR_PRODUCTS';
const GET_CATALOG_SUCCESS = 'catalog/GET_CATALOG_SUCCESS';

let initialState = {
    products: null,
    isProductsDownloaded: false,
};

const popularProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG_SUCCESS:
        case SET_POPULAR_PRODUCTS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setPopularProducts = (products) =>
    ({ type: SET_POPULAR_PRODUCTS, payload: {products}});
export const getPopularProductsSuccess = (isProductsDownloaded) =>
    ({ type: GET_CATALOG_SUCCESS, payload: {isProductsDownloaded}});

export const getPopularProducts = () => async dispatch => {
    try {
        let response = await popularProductsAPI.getPopularProducts();
        if (response.data.resultCode === 0) {
            dispatch(setPopularProducts(response.data.data));
            dispatch(getPopularProductsSuccess(true));
        } else {
            window.location.replace("/404");
        }
    } catch (e) {
        dispatch(getPopularProductsSuccess(false));
        console.log(e);
    }
};

export default popularProductsReducer;