const initState = {
    minus: 0,
};

const clockReducer = (state = initState, action) => {
    if (action.payload === undefined) return state;
    console.log("at Clock Redu: action.payload", action.payload);
    return {
        ...state,
        minus: action.payload.minus,
    };
};
export default clockReducer;
