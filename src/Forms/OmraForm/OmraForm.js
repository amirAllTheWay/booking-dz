import {Component} from "react";
import React from "react";
import {Button, Form, Row, Col, Alert, Tabs, Tab} from 'react-bootstrap';
import DatePicker from "react-datepicker/es";
import * as actionCreators from "../../store/actions/actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

class OmraForm extends Component{

    constructor(props) {
        super(props);
        this.offerTitle = React.createRef();
        this.departureCity = React.createRef();
        this.destinationCity = React.createRef();
        this.distanceDuHaram = React.createRef();
        this.departureDate = React.createRef();
        this.returnDate = React.createRef();
        this.travelDuration = React.createRef();
        this.hotelName = React.createRef();
        this.hotelStars = React.createRef();
        this.flyingCompany = React.createRef();
        this.offerPrice = React.createRef();
        this.offerDescription = React.createRef();
        this.offerAgency = React.createRef();
        this.agencyAddress =  React.createRef();
        this.agencyPhone = React.createRef();
        this.agencyEmail = React.createRef();
        this.offerPhotos = React.createRef();

        this.state = {
            departureDate: new Date(),
            returnDate: new Date(),
            file: [],
            offerPhoto: ""
        };
        this.handleDepartureChange = this.handleDepartureChange.bind(this);
        this.handleReturnChange = this.handleReturnChange.bind(this);
    }

    getFiles(files){
        this.setState({ files: files });
    }

    handleDepartureChange(date) {
        this.setState({
            departureDate: date
        });
    }
gdnchhfhff
    handleReturnChange(date) {
        this.setState({
            returnDate: date
        });
    }


    onSubmitNewOfferClicked() {

        this.props.onAddOmraOfferClicked({ isHotOffer: false, offerTitle: this.offerTitle.current.value, departureCity: this.departureCity.current.value, destinationCity: this.destinationCity.current.value,
            distanceDuHaram: this.distanceDuHaram.current.value, departureDate: this.state.departureDate.toISOString().split("T")[0], returnDate: this.state.returnDate.toISOString().split("T")[0],
            travelDuration: parseInt(this.travelDuration.current.value, 10), hotelName: this.hotelName.current.value, hotelStars: parseInt(this.hotelStars.current.value, 10), flyingCompany: this.flyingCompany.current.value,
            offerPrice: this.offerPrice.current.value, offerDescription: this.offerDescription.current.value, travelAgency: this.offerAgency.current.value,
            agencyAddress: this.agencyAddress.current.value, agencyPhone: this.agencyPhone.current.value, agencyEmail: this.agencyEmail.current.value, hotelImage: this.state.files.base64});


    }

    render() {

        let addOfferResponseMsg = null;

        if (this.props.offerManagementStatus != null) {
            if(this.props.offerManagementStatus.isOfferAddedSuccessfully === false) {


                addOfferResponseMsg = (
                    <Alert variant={'danger'}>
                        L'ajout de l'offre a échoué
                    </Alert>

                );
            } else {
                addOfferResponseMsg = (
                    <Alert variant={'success'}>
                        L'offre a été ajoutée avec succès
                    </Alert>
                );
            }

        }
        return(
                <div>
                    <h3 className="p-4">Ajouter une offre de Omra</h3>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Titre de l'offre
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.offerTitle} placeholder="Titre" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Ville de départ
                            </Form.Label>
                            <Col  sm={10}>
                                <Form.Control type="text" ref={this.departureCity} placeholder="Ville de départ" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Ville d'arrivée
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.destinationCity} placeholder="Ville d'arrivée" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Distance du Haram
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.distanceDuHaram} placeholder="Distance du Haram" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Date du départ
                            </Form.Label>
                            <Col className="DPF" sm={10}>
                                <DatePicker
                                    className="AgencyDatePicker"
                                    selected={this.state.departureDate}
                                    onChange={this.handleDepartureChange}
                                />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Date du retour
                            </Form.Label>
                            <Col className="DPF" sm={10}>
                                <DatePicker
                                    className="AgencyDatePicker"
                                    selected={this.state.returnDate}
                                    onChange={this.handleReturnChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Durée
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.travelDuration} placeholder="Durée du séjour" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Nom de l'hotel
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.hotelName} placeholder="Nom de l'hotel" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Nombre d'étoiles
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.hotelStars} placeholder="Nombre d'étoiles de l'hotel" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Compagnie aérienne
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.flyingCompany} placeholder="Nom de la compagnie aérienne" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Prix
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.offerPrice} placeholder="Prix du séjour" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10} className="OfferDescriptionAdminContainer">
                                <textarea className="OfferDescriptionAdmin" ref={this.offerDescription} rows="4" cols="80" placeholder="Description de l'offre">
                                </textarea>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Agence
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.offerAgency} placeholder="Nom de l'agence" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Adresse de l'agence
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.agencyAddress} placeholder="Adresse de l'agence" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Téléphone
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" ref={this.agencyPhone} placeholder="Téléphone de l'agence" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" ref={this.agencyEmail} placeholder="Email de l'agence" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Photos
                            </Form.Label>
                            <Col sm={10} className="PhotosColumnContainer">
                                <FileBase64
                                    multiple={ false }
                                    onDone={ this.getFiles.bind(this) } />
                            </Col>
                        </Form.Group>
                    </Form>

                    <Col className="Padding" sm={{ span: 10, offset: 1, padding: 3 }}>
                        <Button className="btn-lg" type="submit" onClick={() => this.onSubmitNewOfferClicked()}>Ajouter l'offre Omra</Button>

                        <div className="Padding">
                            {addOfferResponseMsg}
                        </div>

                    </Col>
                </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        onAddOmraOfferClicked: (offer) => {
            dispatch(actionCreators.addTourismOffer(offer));
        }

    };
};

const mapStateToProps = (state) => {
    return {
        offerManagementStatus: state.offerManagementStatus

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OmraForm));
