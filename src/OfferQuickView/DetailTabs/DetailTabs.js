import {Component} from "react";
import React from "react";
import './DetailTabs.css';
import {Tab, Tabs} from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";


class DetailTabs extends Component {

    render() {

        return (
            <div className="DetailsTabContainer">
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                    <Tab eventKey="description" title="Description" className="font-weight-bold">
                        <div className="pl-5 pt-4 font-weight-bold d-flex row justify-content-left align-items-left">
                            <div><h5>- Vol aller et retour avec Turkish Airlines</h5></div>
                            <div><h5>- Assitance et accueil à l'aéroport</h5></div>
                            <div><h5>- 07 nuits dans un hotel 4* Grans Asian</h5></div>
                            <div><h5>- Transferts Aéroport - Hôtel - Aéroport</h5></div>
                            <div><h5>- Visites guidée avec un guide professionnel arabophone</h5></div>
                        </div>

                    </Tab>
                    <Tab eventKey="book" title="Réserver">
                        <BookingForm/>
                    </Tab>
                    <Tab eventKey="flightPlan" title="Plan du vol">
                        <div className="pl-5 d-table pt-4 font-weight-bold row justify-content-left">
                            <h6>Aller: Alger - Istanbul   22H30</h6>
                            <h6>Retour: Istanbul -Alger 4H30</h6>
                        </div>
                    </Tab>
                    <Tab eventKey="program" title="Programme">
                        <div className="pl-5 d-table pt-4 font-weight-bold row justify-content-left">
                            <h5>- Aller: Alger - Istanbul   22H30</h5>
                            <h5>- Retour: Istanbul -Alger 4H30</h5>
                        </div>
                    </Tab>
                    <Tab eventKey="price" title="Tarifs">
                        <div className="pl-5 d-table pt-4 font-weight-bold justify-content-left">
                           <h5>Prix: {this.props.selectedQuickViewOffer.offerPrice} DA</h5>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}


export default DetailTabs;


