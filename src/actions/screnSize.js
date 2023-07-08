export const setScreenSize = (isSmallScreen) => {
    return {
        type: "SET_SCREEN_SIZE",
        payload: isSmallScreen,
    };
};
