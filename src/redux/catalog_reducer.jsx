import {catalogAPI} from "../api/api";

const SET_SECTIONS = 'catalog/SET_SECTIONS';
const SET_PRODUCTS = 'catalog/SET_PRODUCTS';
const SET_PRODUCT = 'catalog/SET_PRODUCT';
const SET_CURRENT_PAGE = 'catalog/SET_CURRENT_PAGE';
const SET_CURRENT_SECTION_NUMBER = 'catalog/SET_CURRENT_SECTION_NUMBER';
const SET_CURRENT_PRODUCT_NUMBER = 'catalog/SET_CURRENT_PRODUCT_NUMBER';
const SET_SECTIONS_SUCCESS = 'catalog/SET_SECTIONS_SUCCESS';
const SET_PRODUCTS_SUCCESS = 'catalog/SET_PRODUCTS_SUCCESS';
const SET_PRODUCT_SUCCESS = 'catalog/SET_PRODUCT_SUCCESS';

let initialState = {
    sections: null,
    products: null,
    product: null,
    maxItemsOnPage: 10,
    currentPage: 1,
    currentSectionNumber: null,
    currentProductNumber: null,
    isSectionsDownloaded: false,
    isProductsDownloaded: false,
    isProductDownloaded: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTIONS:
        case SET_PRODUCTS:
        case SET_PRODUCT:
        case SET_CURRENT_PAGE:
        case SET_CURRENT_SECTION_NUMBER:
        case SET_CURRENT_PRODUCT_NUMBER:
        case SET_SECTIONS_SUCCESS:
        case SET_PRODUCTS_SUCCESS:
        case SET_PRODUCT_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setSections = (sections) => ({type: SET_SECTIONS, payload: {sections}});
const setProducts = (products) => ({type: SET_PRODUCTS, payload: {products}});
const setProduct = (product) => ({type: SET_PRODUCT, payload: {product}});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: {currentPage}});
export const setCurrentSectionNumber = (currentSectionNumber) =>
    ({type: SET_CURRENT_SECTION_NUMBER, payload: {currentSectionNumber}});
export const setCurrentProductNumber = (currentProductNumber) =>
    ({type: SET_CURRENT_PRODUCT_NUMBER, payload: {currentProductNumber}});
const setSectionsSuccess = (isSectionsDownloaded) =>
    ({type: SET_SECTIONS_SUCCESS, payload: {isSectionsDownloaded}});
const setProductsSuccess = (isProductsDownloaded) =>
    ({type: SET_PRODUCTS_SUCCESS, payload: {isProductsDownloaded}});
const setProductSuccess = (isProductDownloaded) =>
    ({type: SET_PRODUCT_SUCCESS, payload: {isProductDownloaded}});

export const getSections = () => async (dispatch) => {
    try {
        let response = await catalogAPI.getSections();
        if (response.data.resultCode === 0) {
            dispatch(setSections(response.data.data));
            dispatch(setSectionsSuccess(true));
            dispatch(setProductsSuccess(false));
            dispatch(setProductSuccess(false));
        } else {
            window.location.replace("/404");
        }
    } catch (e) {
        console.log(e);
    }
};
export const getProducts = (currentSectionNumber) => async (dispatch) => {
    try {
        let response = await catalogAPI.getProducts(currentSectionNumber);
        if (response.data.resultCode === 0) {
            dispatch(setProducts(response.data.data.products));
            dispatch(setSectionsSuccess(false));
            dispatch(setProductsSuccess(true));
            dispatch(setProductSuccess(false));
        } else {
            window.location.replace("/404");
        }
    } catch (e) {
        console.log(e);
    }
};
export const getProduct = (currentProductNumber) => async (dispatch) => {
    try {
        let response = await catalogAPI.getProduct(currentProductNumber);
        if (response.data.resultCode === 0) {
            let product = response.data.data.products.find((element) => {
                if (element.id == currentProductNumber)
                    return true;
            });
            dispatch(setProduct(product));
            dispatch(setSectionsSuccess(false));
            dispatch(setProductsSuccess(false));
            dispatch(setProductSuccess(true));
        } else {
            window.location.replace("/404");
        }
    } catch (e) {
        console.log(e);
    }
};
export default catalogReducer;