import {stopSubmit, reset} from "redux-form";
import {mailAPI} from "../api/api";

const SET_SENDING_IN_PROCESS = 'contactsRequest/SET_SENDING_IN_PROCESS';
const SET_SEND_MAIL_SUCCESS = 'contactsRequest/SET_SEND_MAIL_SUCCESS';
const SET_SENDING_ACCOMPLISHED =
    'contactsRequest/SET_SENDING_ACCOMPLISHED';

let initialState = {
    sendMailSuccess: null,
    isSendingInProcess: false,
    isSendingAccomplished: false
};

const contactsRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SENDING_IN_PROCESS:
        case SET_SEND_MAIL_SUCCESS:
        case SET_SENDING_ACCOMPLISHED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setSendingInProcess = (isSendingInProcess) =>
    ({ type: SET_SENDING_IN_PROCESS, payload: {isSendingInProcess} });
const setSendMailSuccess = (sendMailSuccess) =>
    ({ type: SET_SEND_MAIL_SUCCESS, payload: {sendMailSuccess} });
export const setSendingAccomplished = (isSendingAccomplished) =>
    ({ type: SET_SENDING_ACCOMPLISHED, payload: {isSendingAccomplished} });

export const sendMail = (phone, name, comment) => async (dispatch) => {
    try {
        dispatch(setSendingInProcess(true));
        let response = await mailAPI.sendMail(phone, name, comment);
        if (response.data.resultCode === 0) {
            dispatch(setSendMailSuccess(true));
        } else {
            // if (response.data.resultCode === 10) {
            //     dispatch(getCaptchaUrl());
            // }
            let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
            dispatch(setSendMailSuccess(false));
            dispatch(stopSubmit('contactsRequest', {_error: message}));
        }
    } catch (e) {
        dispatch(setSendMailSuccess(false));
        throw e;
    } finally {
        dispatch(setSendingInProcess(false));
        dispatch(setSendingAccomplished(true));
    }
};

export default contactsRequestReducer;