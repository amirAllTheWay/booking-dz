import axios from 'axios'


const notifySearchButtonClicked = (response) => {

    let serverTourismResults = {
        researchType: "tourism",
        results: response.data.tourismOffers
    };

    console.log(" ++++ getTourismResults: response: ", serverTourismResults);


    return {
        type: "RESEARCH_RESPONSE_RECEIVED",
        payload: serverTourismResults
    };
};

const onyMainPage = (response) => {

    let hotTourismOffers = {
        researchType: "tourism",
        results: response.data.tourismOffers
    };

    console.log(" ++++ getTourismResults: response: ", hotTourismOffers);

    return {
        type: "MAIN_PAGE_LAUNCHED",
        payload: hotTourismOffers
    };
};


export const getTourismResults = (payload) => {

    //"http://localhost:8000/getOffers/getOfferByCity/" + payload.departureCity + "/" + payload.destinationCity
    let route = '';

    if(payload.departureCity == null  || payload.destinationCity == null) {
        route = "http://localhost:8000/getOffers/allTourismOffers";
    }
    else{
        route = route.concat('http://localhost:8000/getOffers/getOfferByCity/', payload.departureCity, '/', payload.destinationCity);
    }

    console.log('*** getTourismResults route', route);

    //"http://localhost:8000/getOffers/allTourismOffers"
    return dispatch => {
        axios.get(route).then(
            response => dispatch(notifySearchButtonClicked(response)),
            (error) => { console.log("ERROR: ", error.toString()) }
        )

    };
};

export const getHotTourismOffers = () => {

    let route = 'http://localhost:8000/getHotTourismOffers'

    return dispatch => {
        axios.get(route).then(
            response => dispatch(onyMainPage(response)),
            (error) => { console.log("ERROR hot tourism offers: ", error.toString()) }
        )

    };
};