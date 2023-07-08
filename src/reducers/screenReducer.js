export const screenSizeReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_SCREEN_SIZE":
            return action.payload;
        default:
            return state;
    }
};
