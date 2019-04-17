
import * as searchCaller from '../../services/searchCaller';


export const newResearchRequest = () => {

    // Do the async call, when answer received dispatch an event
    return searchCaller.getTourismResults();

};

export const notifySearchButtonClicked = () => {
    return {
        type: "SEARCH_BUTTON_CLICKED"
    };
};


export const searchButtonClicked = () => {

    return dispatch => {
        setTimeout(() => {
            dispatch(notifySearchButtonClicked())
        }, 1500);
    };
};

