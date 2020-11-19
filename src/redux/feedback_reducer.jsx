import {feedbackAPI} from "../api/api";

const SET_FEEDBACKS = 'feedback/SET_FEEDBACKS';
const SET_FEEDBACKS_SUCCESS = 'feedback/SET_FEEDBACKS_SUCCESS';

let initialState = {
    feedbacks: null,
    isFeedbacksDownloaded: false,
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEEDBACKS:
        case SET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setFeedbacks = (feedbacks) => ({ type: SET_FEEDBACKS, payload: {feedbacks} });
export const setFeedbacksSuccess = (isFeedbacksDownloaded) =>
    ({ type: SET_FEEDBACKS_SUCCESS, payload: {isFeedbacksDownloaded} });

export const getFeedbacks = () => async (dispatch) => {
    try {
        let response = await feedbackAPI.getFeedbacks();
        if (response.data.resultCode === 0) {
            dispatch(setFeedbacks(response.data.data));
            dispatch(setFeedbacksSuccess(true));
        }
    } catch (e) {
        console.log(e);
    }
};
export default feedbackReducer;