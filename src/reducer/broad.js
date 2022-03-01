const initState = {
    isEnd: false,
    winer: ""
};

const broadReducer = (state = initState, action) => {
    if (action.payload === undefined) return state;

    //     console.log("state: ", state);
    //     console.log("action: ", action);
    //     console.log("action.payload: ", action.payload);
    return {
        ...state,
        isEnd: action.payload.isEnd,
        winer: action.payload.winer,
    };
};

export default broadReducer;
