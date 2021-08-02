import { createStore, combineReducers } from "redux";
import { chatsReduser } from "./Reducers/chats";
import { messageReduser } from "./Reducers/messages";
import { profileReducer } from "./Reducers/profiele";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReduser,
    messages: messageReduser,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);