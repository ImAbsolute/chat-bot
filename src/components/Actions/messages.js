export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export function addMessageToState(message, chatId) {
    return {
        type: ADD_MESSAGE,
        payload: {
            message,
            chatId,
        },
    };
}

export function addMessage(message, chatId) {
    return async(dispatch, getState) => {
        dispatch(addMessageToState(message, chatId));
    };
}