


const notifySearchButtonClicked = () => {

    let researchResults = {
        researchType: "tourism",
        results: [
            {
                flyingCompany: "Air Algérie",
                flyingCompanyLogo: "./logo_air_algerie.jpg",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hilton",
                price: "380€"
            },
            {
                flyingCompany: "Air France",
                departureCity: "Paris",
                destinationCity: "New York",
                hotel: "Hilton",
                price: "550€"
            },
            {
                flyingCompany: "Alitalia",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hilton",
                price: "180€"
            },
            {
                flyingCompany: "Vueling",
                departureCity: "Alger",
                destinationCity: "Prague",
                hotel: "Hilton",
                price: "475€"
            }
        ]
    };

    return {
        type: "RESEARCH_RESPONSE_RECEIVED",
        payload: researchResults
    };
};


export const getTourismResults = (payload) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(notifySearchButtonClicked(payload));
        }, 5000);
    };
};