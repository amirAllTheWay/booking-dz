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
        route = "https://sama-djazair.herokuapp.com/getOffers/allTourismOffers";
    }
    else{
        route = route.concat('https://cors-anywhere.herokuapp.com/https://sama-djazair.herokuapp.com/getOffers/getOfferByCity/', payload.departureCity, '/', payload.destinationCity);
    }

    console.log('*** getTourismResults route', route);

    return dispatch => {
        axios.get(route).then(
            response => dispatch(notifySearchButtonClicked(response)),
            (error) => { console.log("ERROR: ", error.toString()) }
        )

    };
};

export const getHotTourismOffers = () => {

    let route = 'https://sama-djazair.herokuapp.com/getHotTourismOffers';

    return dispatch => {
        axios.get(route).then(
            response => dispatch(onMainPage(response)),
            (error) => { console.log("ERROR hot tourism offers: ", error.toString()) }
        )

    };
};

export const getAllTourismOffers = () => {

    let route = "https://cors-anywhere.herokuapp.com/https://sama-djazair.herokuapp.com/getOffers/allTourismOffers";

    return dispatch => {
        axios.get(route).then(
            response => dispatch(onMainPage(response)),
            (error) => { console.log("ERROR hot tourism offers: ", error.toString()) }
        )

    };
};

export const authenticateUser = (authData) => {

    let route = 'https://sama-djazair.herokuapp.com/authenticate';
    console.log("authenticateUser: ", authData);

    return dispatch => {
        axios.post(route, authData).then(
            response => dispatch({type: "AUTH_USER", payload: response.data}),
            (error) => { console.log("ERROR authenticate user: ", error.toString()) }
        )

    };
};

export const addTourismOffer = (tourismOffer) => {

    let route = 'http://localhost:8000/addTourismOffer';
    console.log("addTourismOffer: ", tourismOffer);

    return dispatch => {
        axios.post(route, tourismOffer).then(
            response => dispatch({type: "ADD_TOURISM_OFFER", payload: response.data}),
            (error) => { console.log("ERROR add tourism offer: ", error.toString()) }
        )

    };
};
export const generatePreorder = (preorder) => {

    //let route = 'http://localhost:8000/generatePreorder';
    let route = 'https://sama-djazair.herokuapp.com/generatePreorder';
    console.log("generatePreorder: ", preorder);

    return dispatch => {
        axios.post(route, preorder).then(
            response => {
                console.log("**** generatePreorder response: ", response);
                dispatch({type: "GENERATE_PREORDER", payload: response.data});
                },
            (error) => { console.log("ERROR GENERATE PREORDER: ", error.toString()) }
        )

    };
};
