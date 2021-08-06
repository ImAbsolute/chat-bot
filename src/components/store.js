import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { chatsReduser } from "./Reducers/chats";
import { messageReduser } from "./Reducers/messages";
import { profileReducer } from "./Reducers/profiele";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReduser,
    messages: messageReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);