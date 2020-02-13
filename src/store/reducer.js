import * as HttpStatus from "http-status-codes";

const initialState = {
    researchButtonPressed: false,
    offerDetailsClicked:false,
    offerDetailsId: null,
    researchType: null,
    tourismResults: [],
    filteredTourismResults: [],
    filterMinMax: null,
    hotTourismOffers: [],
    omraResults: [],
    authInfo: null,
    offerManagementStatus: null,
    selectedQuickViewOffer: null,
    preorderID: null,
    preorderData: {}
}

const
    reducer  = (state = initialState, action) => {

    if (action.type === 'SEARCH_BUTTON_CLICKED') {
        console.log("SEARCH_BUTTON_CLICKED clicked");
        let newValue = !state.researchButtonPressed;

        return {
            ...state,
            researchButtonPressed: newValue
        };
    }

    if (action.type === "RESEARCH_RESPONSE_RECEIVED") {

        // Process to get min and max values
        const results = action.payload.results;
        console.log(" *** RESEARCH_RESPONSE_RECEIVED results: ", results);
        if ( results !== undefined && results.length > 0) {
        let durationMin = Number.parseInt(results[0].travelDuration, 10);
        let durationMax = Number.parseInt(results[0].travelDuration, 10);
        let priceMin = Number.parseInt(results[0].offerPrice, 10);
        let priceMax = Number.parseInt(results[0].offerPrice, 10);
        let starsMin = Number.parseInt(results[0].hotelStars, 10);
        let starsMax = Number.parseInt(results[0].hotelStars, 10);
        let durationValue, priceValue, starsValue = 0;

        results.map((element, index) => {
            durationValue = Number.parseInt(element.travelDuration, 10);
            priceValue = Number.parseInt(element.offerPrice, 10);
            starsValue = Number.parseInt(element.hotelStars, 10);

            if (durationValue < durationMin) {
                durationMin = durationValue;
            } else if (durationValue > durationMax) {
                durationMax = durationValue;
            }

            if (priceValue < priceMin) {
                priceMin = priceValue;
            } else if (priceValue > priceMax) {
                priceMax = priceValue;
            }

            if (starsValue < starsMin) {
                starsMin = starsValue;
            } else if (starsValue > starsMax) {
                starsMax = starsValue;
            }
        });

        if (priceMin === priceMax) {
            priceMin = 0;
        }
        if (durationMin === durationMax) {
            durationMin = 0;
        }
        if (starsMin === starsMax) {
            starsMin = 0;
        }

        let filterMinMax = {
            duration: {
                min: durationMin,
                max: durationMax
            },
            price: {
                min: priceMin,
                max: priceMax
            },
            stars: {
                min: starsMin,
                max: starsMax
            }
        };


        console.log(" ------- RESEARCH_RESPONSE_RECEIVED action.payload: ", filterMinMax);

        return {
            ...state,
            offerDetailsClicked: false,
            offerDetailsId: null,
            researchType: action.payload.researchType,
            tourismResults: action.payload.results,
            filteredTourismResults: action.payload.results,
            filterMinMax: filterMinMax
        }
    }
    }

    if (action.type === "FILTER_VALUES_CHANGED") {
        // Apply all filters
        console.log(" ******* FILTER_VALUES_CHANGED paylod: ", action.payload);
        const priceThreshold = action.payload.priceFilterValue;
        const durationThreshold = action.payload.durationFilterValue;
        const hotelStarsThreshold = action.payload.hotelStarsValue;
        const items = [];
        let durationValue, priceValue, starsValue = 0;
        let tourismElements = state.tourismResults;
        console.log(" ******* FILTER_VALUES_CHANGED tourismElements: ", state);

        tourismElements.map((tourismResult, index) => {
            durationValue = Number.parseInt(tourismResult.travelDuration, 10);
            priceValue = Number.parseInt(tourismResult.offerPrice, 10);
            starsValue = Number.parseInt(tourismResult.hotelStars, 10);
            console.log(" ------- PRICE_FILTER_CHANGED item 1: ", durationValue, priceValue, starsValue);

            if( priceValue <= priceThreshold
                && durationValue <= durationThreshold
                && starsValue <= hotelStarsThreshold ) {
                //console.log(" ------- PRICE_FILTER_CHANGED item 2: ", tourismResult);

                items.push(tourismResult);
            }
        });

        console.log(" ******* FILTER_VALUES_CHANGED filtered state: ", items);
        return {
            ...state,
            filteredTourismResults: items
        }
    }

    if (action.type === "MAIN_PAGE_LAUNCHED") {
        console.log(" ******* MAIN_SCREEN_LAUNCHED payload: ", action.payload);

        return {
            ...state,
            tourismResults: null,
            researchType: action.payload.researchType,
            hotTourismOffers: action.payload
        }
    }


    if (action.type === "OFFER_DETAILS_CLICKED") {
        console.log("OFFER_DETAILS_CLICKED clicked");

        return {
            ...state,
            offerDetailsClicked: true,
            offerDetailsId: action.payload
        };
    }

    if (action.type === "OFFER_QUICK_VIEW_CLICKED") {
        console.log("OFFER_QUICK_VIEW_CLICKED clicked: ", action.payload);
        let filteredTourismResults = state.filteredTourismResults;
        let selectedQuickViewOffer = null;

        for (let i = 0; i < filteredTourismResults.length; i++) {
            if (filteredTourismResults[i].offerReference === action.payload){
                console.log("OFFER_QUICK_VIEW_CLICKED found offer: ", filteredTourismResults[i]);
                selectedQuickViewOffer = filteredTourismResults[i];
                break;
            }
        }

        return {
            ...state,
            selectedQuickViewOffer: selectedQuickViewOffer
        };
    }

    if (action.type === "CLEAR_SELECTED_QUICK_VIEW_OFFER") {
        console.log("CLEAR_SELECTED_QUICK_VIEW_OFFER clicked: ", action.payload);
        return {
            ...state,
            selectedQuickViewOffer: null
        };
    }
    if (action.type === 'AUTH_USER') {
        console.log("reducer AUTH_USER payload: ", action.payload);
        let isAuthenticated = false;
        let token = null;
        let authData;

        if(action.payload.httpResponse.responseCode === HttpStatus.OK && action.payload.httpResponse.responseMessage === "OK") {
            isAuthenticated = true;
            token = action.payload.authData.token;
        }
        authData = {
            isAuthenticated: isAuthenticated,
            token: token
        };

        return {
            ...state,
            authInfo: authData
        };
    }

    if (action.type === 'AUTH_UNMOUNTING') {
        return {
            ...state,
            authInfo: null
        };
    }

    if (action.type === 'ADD_TOURISM_OFFER') {
        console.log("reducer ADD_TOURISM_OFFER payload: ", action.payload);
        let offerManagementStatus = {};
        console.log("reducer ADD_TOURISM_OFFER payload: ", action.payload.responseCode);
        if(action.payload.responseCode === HttpStatus.CREATED) {
            offerManagementStatus.isOfferAddedSuccessfully = true;
        } else {
            offerManagementStatus.isOfferAddedSuccessfully = false;
        }

        return {
            ...state,
            offerManagementStatus: offerManagementStatus
        };

    }

    if (action.type === 'ADMIN_PAGE_UNMOUNTING') {
        return {
            ...state,
            offerManagementStatus: null
        };
    }

    if (action.type === 'GENERATE_PREORDER') {
        console.log("reducer GENERATE_PREORDER payload: ", action.payload);
        return {
            ...state,
            preorderID: action.payload.id
        };
    }

    if (action.type === 'PREORDER_DATA') {
        console.log("reducer GENERATE_PREORDER_BUTTON_CLICKED payload: ", action.payload);
        return {
            ...state,
            preorderData: action.payload.preorderData
        };
    }



    return state;
}

export default reducer;
