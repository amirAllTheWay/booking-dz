const initialState = {
    researchButtonPressed: false,
    offerDetailsClicked:false,
    offerDetailsId: null,
    researchType: null,
    tourismResults: [],
    filteredTourismResults: [],
    filterMinMax: null,
    hotTourismOffers: [],
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

        // Process to get min and max values
        const results = action.payload.results;
        console.log(" *** RESEARCH_RESPONSE_RECEIVED results: ", results);
        let durationMin = Number.parseInt(results[0].travelDuration, 10);
        let durationMax = Number.parseInt(results[0].travelDuration, 10);
        let priceMin = Number.parseInt(results[0].price, 10);
        let priceMax = Number.parseInt(results[0].price, 10);
        let starsMin = Number.parseInt(results[0].hotelStars, 10);
        let starsMax = Number.parseInt(results[0].hotelStars, 10);
        let durationValue, priceValue, starsValue = 0;

        // Duration
        results.map((element, index) => {
            durationValue = Number.parseInt(element.travelDuration, 10);
            priceValue = Number.parseInt(element.price, 10);
            starsValue = Number.parseInt(element.hotelStars, 10);

            if(durationValue < durationMin) {
                durationMin = durationValue;
            }else if(durationValue > durationMax) {
                durationMax = durationValue;
            }

            if(priceValue < priceMin) {
                priceMin = priceValue;
            }else if(priceValue > priceMax) {
                priceMax = priceValue;
            }

            if(starsValue < starsMin) {
                starsMin = starsValue;
            }else if(starsValue > starsMax) {
                starsMax = starsValue;
            }
        });

        if(priceMin === priceMax) { priceMin = 0;}
        if(durationMin === durationMax) { durationMin = 0;}
        if(starsMin === starsMax) { starsMin = 0;}

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


        console.log(" ------- RESEARCH_RESPONSE_RECEIVED Duration: ", filterMinMax);

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

    if (action.type === "FILTER_VALUES_CHANGED") {
        // Apply all filters
        console.log(" ******* FILTER_VALUES_CHANGED paylod: ", action.payload);
        const priceThreshold = action.payload.priceFilterValue;
        const durationThreshold = action.payload.durationFilterValue;
        const hotelStarsThreshold = action.payload.hotelStarsValue;
        const items = [];
        let durationValue, priceValue, starsValue = 0;
        let tourismElements = state.tourismResults;

        tourismElements.map((tourismResult, index) => {
            durationValue = Number.parseInt(tourismResult.travelDuration, 10);
            priceValue = Number.parseInt(tourismResult.price, 10);
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


    if (action.type === 'OFFER_DETAILS_CLICKED') {
        console.log("OFFER_DETAILS_CLICKED clicked");

        return {
            ...state,
            offerDetailsClicked: true,
            offerDetailsId: action.payload
        };
    }

    return state;
}

export default reducer;