import { ADD_CHAT } from "../Actions/chats";

const initialState = {
    chats: {
        1: { title: "Чат 1", messageList: [1] },
        2: { title: "Чат 2", messageList: [2] },
        3: { title: "Чат 3", messageList: [] },
    },
};

export const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                chats: {
                    ...state.chats,
                    [action.chatId]: { title: action.title, messageList: [] }
                }
            };
        default:
            return state;
    }
};