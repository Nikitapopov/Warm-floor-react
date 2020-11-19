import {newsAPI} from "../api/api";

const SET_NEWS = 'news/SET_NEWS';
const SET_NEWS_SUCCESS = 'news/SET_NEWS_SUCCESS';
const SET_ONE_NEWS = 'news/SET_ONE_NEWS';
const SET_ONE_NEWS_SUCCESS = 'news/SET_ONE_NEWS_SUCCESS';
const SET_CURRENT_NEWS_NUMBER = 'news/SET_CURRENT_NEWS_NUMBER';
const SET_CURRENT_PAGE = 'news/SET_CURRENT_PAGE';
const SET_TOTAL_NEWS_COUNT = 'news/SET_TOTAL_NEWS_COUNT';

let initialState = {
    news: null,
    oneNews: null,
    isNewsDownloaded: false,
    isOneNewsDownloaded: false,
    currentNewsNumber: null,
    currentPage: 1,
    pageSize: 6,
    totalNewsCount: null,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
        case SET_NEWS_SUCCESS:
        case SET_ONE_NEWS:
        case SET_ONE_NEWS_SUCCESS:
        case SET_CURRENT_NEWS_NUMBER:
        case SET_CURRENT_PAGE:
        case SET_TOTAL_NEWS_COUNT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setNews = (news) => ({ type: SET_NEWS, payload: {news} });
const setNewsSuccess = (isNewsDownloaded) =>
    ({ type: SET_NEWS_SUCCESS, payload: {isNewsDownloaded} });
const setOneNews = (oneNews) => ({ type: SET_ONE_NEWS, payload: {oneNews} });
const setOneNewsSuccess = (isOneNewsDownloaded) =>
    ({ type: SET_ONE_NEWS_SUCCESS, payload: {isOneNewsDownloaded} });
export const setCurrentNewsNumber = (currentNewsNumber) =>
    ({ type: SET_CURRENT_NEWS_NUMBER, payload: {currentNewsNumber} });
export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, payload: {currentPage} });
const setTotalNewsCount = (totalNewsCount) =>
    ({ type: SET_TOTAL_NEWS_COUNT, payload: {totalNewsCount} });

export const setNecessaryNews = () => async (dispatch, getState) => {
    try {
        if (getState().news.currentNewsNumber) {
            let response = await newsAPI.getOneNews(getState().news.currentNewsNumber);
            if (response.data.resultCode === 0) {
                dispatch(setOneNews(response.data.data));
                dispatch(setOneNewsSuccess(true));
                dispatch(setNewsSuccess(false));
            } else {
                window.location.replace("/404");
            }
        } else {
            let response = await newsAPI.getNews(getState().news.currentPage,
                getState().news.pageSize);
            if (response.data.resultCode === 0) {
                dispatch(setNews(response.data.data));
                dispatch(setNewsSuccess(true));
                dispatch(setOneNewsSuccess(false));
                dispatch(setTotalNewsCount(response.data.count));
            } else {
                window.location.replace("/404");
            }
        }
    } catch (e) {
        console.log(e);
    }
};

export default newsReducer;