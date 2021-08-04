export const ADD_NEW_MESSAGE_LIST = "MESSAGES::ADD_NEW_MESSAGE_LIST";

export function addNewMessageList(chatId) {
    return {
        type: ADD_NEW_MESSAGE_LIST,
        payload: {
            chatId,
        },
    };
}