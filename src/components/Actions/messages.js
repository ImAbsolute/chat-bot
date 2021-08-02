export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export function addMessageToState({ message, chatId }) {
    return {
        type: ADD_MESSAGE,
        payload: {
            message,
            chatId,
        },
    };
}