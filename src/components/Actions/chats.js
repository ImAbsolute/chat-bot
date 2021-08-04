export const ADD_CHAT = "CHATS::ADD_CHAT";

export const addChat = (title, chatId) => {
    return {
        type: ADD_CHAT,
        payload: { title, chatId },
    };
};