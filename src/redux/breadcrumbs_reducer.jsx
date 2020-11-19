import {breadcrumbsAPI} from "../api/api";

const SET_SECTION_NAMES_BY_ID = 'breadcrumbs/SET_SECTION_NAMES_BY_ID';
const SET_NEWS_NAMES_BY_ID = 'breadcrumbs/SET_NEWS_NAMES_BY_ID';
const SET_PROMOTIONS_NAMES_BY_ID = 'breadcrumbs/SET_PROMOTIONS_NAMES_BY_ID';

let initialState = {
    sectionNamesById: null,
    newsNamesById: null,
    promotionsNamesById: null,
};

const breadcrumbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION_NAMES_BY_ID:
        case SET_NEWS_NAMES_BY_ID:
        case SET_PROMOTIONS_NAMES_BY_ID:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setSectionNamesById = (sectionNamesById) =>
    ({ type: SET_SECTION_NAMES_BY_ID, payload: {sectionNamesById} });
const setNewsNamesById = (newsNamesById) =>
    ({ type: SET_NEWS_NAMES_BY_ID, payload: {newsNamesById} });
const setPromotionsNamesById = (promotionsNamesById) =>
    ({ type: SET_PROMOTIONS_NAMES_BY_ID, payload: {promotionsNamesById} });

export const getSectionNamesById = () => async (dispatch) => {
    try {
        let response = await breadcrumbsAPI.getSectionNamesById();
        if (response.data.resultCode === 0) {
            dispatch(setSectionNamesById(response.data.data));
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getNewsNamesById = () => async (dispatch) => {
    try {
        let response = await breadcrumbsAPI.getNewsNamesById();
        if (response.data.resultCode === 0) {
            dispatch(setNewsNamesById(response.data.data));
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getPromotionsNamesById = () => async (dispatch) => {
    try {
        let response = await breadcrumbsAPI.getPromotionsNamesById();
        if (response.data.resultCode === 0) {
            dispatch(setPromotionsNamesById(response.data.data));
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};
export default breadcrumbsReducer;