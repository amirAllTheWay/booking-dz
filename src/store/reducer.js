const initialState = {
    researchButtonPressed: false,
    researchType: null,
    tourismResults: [],
    omraResults: []
}

const reducer  = (state = initialState, action) => {

    if (action.type === 'SEARCH_BUTTON_CLICKED') {
        console.log("SEARCH_BUTTON_CLICKED clicked");
        let newValue = !state.researchButtonPressed;

        return {
            ...state,
            researchButtonPressed: newValue
        };
    }

    if (action.type === "RESEARCH_RESPONSE_RECEIVED") {
        console.log("RESEARCH_RESPONSE_RECEIVED requested: ", action.payload);

        return {
            ...state,
            researchType: action.payload.researchType,
            tourismResults: action.payload.results
        }
    }
    return state;
}

export default reducer;