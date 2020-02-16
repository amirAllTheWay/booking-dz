
import * as searchCaller from '../../services/searchCaller';


export const newResearchRequest = (researchParams) => {

    console.log("actions event: ", researchParams);
    // Do the async call, when answer received dispatch an event
    return searchCaller.getTourismResults(researchParams);
};

export const generatePreorder = (preorder) => {
    // Do the async call, when answer received dispatch an event
    return searchCaller.generatePreorder(preorder);
};

export const notifyGeneratePreorderClicked = (preorder) => {
    return {
        type: "GENERATE_PREORDER_BUTTON_CLICKED",
        payload: preorder
    };
};

export const notifySearchButtonClicked = (preorder) => {
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

export const filterValuesChanged = (filterValues) => {

    return {
        type: "FILTER_VALUES_CHANGED",
        payload: filterValues
    };
};

export const mainScreenLaunched = () => {

    return searchCaller.getHotTourismOffers();
};

export const offerDetailsButtonClicked = (offerId) => {

    return {
        type: "OFFER_DETAILS_CLICKED",
        payload: offerId
    };
};

export const offerQuickViewButtonClicked = (offerId) => {

    return {
        type: "OFFER_QUICK_VIEW_CLICKED",
        payload: offerId
    };
};

export const authenticate = (authData) => {

    console.log("[authenticate] ", authData);
    return searchCaller.authenticateUser(authData);
};

export const addTourismOffer = (tourismOffer) => {

    console.log("[addTourismOffer] ", tourismOffer);
    return searchCaller.addTourismOffer(tourismOffer);
};
