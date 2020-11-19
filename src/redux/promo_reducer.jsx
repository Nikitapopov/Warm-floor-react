import {promoAPI} from "../api/api";

const SET_PROMOTIONS = 'promo/SET_PROMOTIONS';
const SET_PROMOTIONS_SUCCESS = 'promo/SET_PROMOTIONS_SUCCESS';
const SET_PROMOTION = 'promo/SET_PROMOTION';
const SET_PROMOTION_SUCCESS = 'promo/SET_PROMOTION_SUCCESS';
const SET_CURRENT_PROMOTION_NUMBER = 'promo/SET_CURRENT_PROMOTION_NUMBER';
const SET_CURRENT_PAGE = 'promo/SET_CURRENT_PAGE';

let initialState = {
    promotions: null,
    promotion: null,
    isPromotionsDownloaded: false,
    isPromotionDownloaded: false,
    currentPromotionNumber: null,
    currentPage: 1,

};

const promoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROMOTIONS:
        case SET_PROMOTIONS_SUCCESS:
        case SET_PROMOTION:
        case SET_PROMOTION_SUCCESS:
        case SET_CURRENT_PROMOTION_NUMBER:
        case SET_CURRENT_PAGE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setPromotions = (promotions) => ({ type: SET_PROMOTIONS, payload: {promotions} });
const setPromotionsSuccess = (isPromotionsDownloaded) =>
    ({ type: SET_PROMOTIONS_SUCCESS, payload: {isPromotionsDownloaded} });
const setPromotion = (promotion) => ({ type: SET_PROMOTION, payload: {promotion} });
const setPromotionSuccess = (isPromotionDownloaded) =>
    ({ type: SET_PROMOTION_SUCCESS, payload: {isPromotionDownloaded} });
export const setCurrentPromotionNumber = (currentPromotionNumber) =>
    ({ type: SET_CURRENT_PROMOTION_NUMBER, payload: {currentPromotionNumber} });
export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, payload: {currentPage} });

export const setNecessaryPromotions = () => async (dispatch, getState) => {
    try {
        if (getState().promo.currentPromotionNumber) {
            let response = await promoAPI.getPromotion(getState().promo.currentPromotionNumber);
            if (response.data.resultCode === 0) {
                dispatch(setPromotion(response.data.data));
                dispatch(setPromotionSuccess(true));
                dispatch(setPromotionsSuccess(false));
            } else {
                window.location.replace("/404");
            }
        } else {
            let response = await promoAPI.getPromotions();
            if (response.data.resultCode === 0) {
                dispatch(setPromotions(response.data.data));
                dispatch(setPromotionsSuccess(true));
                dispatch(setPromotionSuccess(false));
            } else {
                dispatch(setPromotions(null));
                dispatch(setPromotionsSuccess(true));
                dispatch(setPromotionSuccess(false));
            }
        }
    } catch (e) {
        console.log(e);
    }
};
export default promoReducer;