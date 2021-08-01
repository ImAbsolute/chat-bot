import { CHANGE_NAME } from "../Actions/profile";

const initialState = {
    age: 27,
    name: "Andrey",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};