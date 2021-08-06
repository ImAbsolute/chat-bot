import { ADD_MESSAGE } from "../Actions/messages";
import { ADD_NEW_MESSAGE_LIST } from "../Actions/newMessageList";

const initialState = {
    1: [{ text: "Привет!", sender: "bot" }],
    2: [{ text: "Здравствуй!", sender: "bot" }],
};

export const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message,
                ],
            };
        case ADD_NEW_MESSAGE_LIST:
            return {
                ...state,
                [action.payload.chatId]: [],
            };
        default:
            return state;
    }
};