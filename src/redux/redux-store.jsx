import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import catalogReducer from "./catalog_reducer";
import thunkMiddleware from "redux-thunk"
import popularProductsReducer from "./popularProducts_reducer";
import feedbackReducer from "./feedback_reducer";
import newsReducer from "./news_reducer";
import promoReducer from "./promo_reducer";
import breadcrumbsReducer from "./breadcrumbs_reducer";
import contactsRequestReducer from "./contactsRequest_reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    form: formReducer,
    popularProducts: popularProductsReducer,
    catalog: catalogReducer,
    feedback: feedbackReducer,
    news: newsReducer,
    promo: promoReducer,
    breadcrumbs: breadcrumbsReducer,
    contactsRequest: contactsRequestReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;