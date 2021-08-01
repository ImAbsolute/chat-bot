import { ADD_CHAT } from "../Actions/chats";

const initialState = {
    list: [],
};

export const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                list: [
                    ...state.list,
                    { id: `id${state.list.length}`, title: action.payload.title },
                ],
            };
        default:
            return state;
    }
};