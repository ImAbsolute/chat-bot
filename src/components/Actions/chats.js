export const ADD_CHAT = "CHATS::ADD_NEW_CHAT";

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        payload: { title },
    };
};