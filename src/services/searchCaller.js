import axios from 'axios'


const notifySearchButtonClicked = (payload, response) => {

    let researchResults = {
        researchType: "tourism",
        results: [
            {
                flyingCompany: "Air Algérie",
                flyingCompanyLogo: "",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hotel Hilton",
                price: "380€"
            },
            {
                flyingCompany: "Air France",
                departureCity: "Paris",
                destinationCity: "New York",
                hotel: "Hotel Sofitel",
                price: "550€"
            },
            {
                flyingCompany: "Alitalia",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hotel El Mourradia",
                price: "180€"
            },
            {
                flyingCompany: "Vueling",
                departureCity: "Alger",
                destinationCity: "Prague",
                hotel: "Hotel Marriott",
                price: "475€"
            }
        ]
    };


    let serverTourismResults = {
        researchType: "tourism",
        results: response.data.tourismOffers
    };

    console.log("getTourismResults: ", payload, " response: ", serverTourismResults, " researchResults: ", researchResults);


    return {
        type: "RESEARCH_RESPONSE_RECEIVED",
        payload: serverTourismResults
    };
};


export const getTourismResults = (payload) => {

    //"http://localhost:8000/getOffers/getOfferByCity/" + payload.departureCity + "/" + payload.destinationCity
    let route = '';

    route = route.concat('http://localhost:8000/getOffers/getOfferByCity/', payload.departureCity, '/', payload.destinationCity);
    console.log('*** route', route);

    //"http://localhost:8000/getOffers/allTourismOffers"
    return dispatch => {
        axios.get(route).then(
            response => dispatch(notifySearchButtonClicked(payload, response)),
            (error) => { console.log("ERROR: ", error.toString()) }
        )

    };
};