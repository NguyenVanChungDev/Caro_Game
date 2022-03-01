const initStateUser = {
    namePlayerOne: "",
    namePlayerTwo: "",
};

const userReducer = (state = initStateUser, actionUser) => {
    if (actionUser.payload === undefined) return state;

    // console.log("at UserReducer state: ", state);
    return {
        ...state,
        namePlayerOne: actionUser.payload.namePlayerOne,
        namePlayerTwo: actionUser.payload.namePlayerTwo,
    };
};

export default userReducer;
