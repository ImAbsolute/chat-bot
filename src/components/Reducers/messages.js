import { ADD_MESSAGE } from "../Actions/messages";

const initialState = {
    messages: {},
};

export const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {};
        default:
            return state;
    }
};