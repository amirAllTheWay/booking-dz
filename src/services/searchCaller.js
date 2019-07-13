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

const onMainPage = (response) => {

    console.log(" ++++ getHotTourismResults: response: ", response);

    let hotTourismOffers = {
        researchType: "tourism",
        results: response.data.tourismOffers
    };

    return {
        type: "MAIN_PAGE_LAUNCHED",
        payload: hotTourismOffers
    };
};


export const getTourismResults = (payload) => {

    //"http://localhost:8000/getOffers/getOfferByCity/" + payload.departureCity + "/" + payload.destinationCity
    let route = '';

    if(payload.departureCity == null  || payload.destinationCity == null) {
        route = "https://cors-anywhere.herokuapp.com/https://sama-djazair.herokuapp.com/getOffers/allTourismOffers";
    }
    else{
        route = route.concat('https://cors-anywhere.herokuapp.com/https://sama-djazair.herokuapp.com/getOffers/getOfferByCity/', payload.departureCity, '/', payload.destinationCity);
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

    let route = 'https://cors-anywhere.herokuapp.com/https://sama-djazair.herokuapp.com/getHotTourismOffers';

    return dispatch => {
        axios.get(route).then(
            response => dispatch(onMainPage(response)),
            (error) => { console.log("ERROR hot tourism offers: ", error.toString()) }
        )

    };
};