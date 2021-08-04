import { ADD_CHAT } from "../Actions/chats";

const initialState = {
    // chats: {
    //     1: { title: "Чат 1", messageList: [1] },
    //     2: { title: "Чат 2", messageList: [2] },
    // },
    1: { title: "Chat 1" },
    2: { title: "Chat 2" },
};

export const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.chatId]: { title: action.payload.title },
            };
        default:
            return state;
    }
};