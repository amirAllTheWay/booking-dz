import {Component} from "react";
import React from "react";
import '../BookingForm/BookingForm.css';


class BookingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            roomsNumber : null,
            adultsNumber : null,
            childrenNumber : null,
            babiesNumber : null,
            additionalInfo : null,
            phoneNumber : null,
            email : null,
            confirmationEmail : null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.target);
    }

    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    onRoomNumberChange = (event) => {
        this.setState({roomsNumber: event.target.value});
    }

    onAdultsNumberChange = (event) => {
        this.setState({adultsNumber: event.target.value});
    }

    onChildrenNumberChange = (event) => {
        this.setState({childrenNumber: event.target.value});
    }

    onBabiesNumberChange = (event) => {
        this.setState({babiesNumber: event.target.value});
    }

    onAdditionalInformationChange = (event) => {
        this.setState({additionalInfo: event.target.value});
    }

    onPhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onConfirmationEmailChange = (event) => {
        this.setState({confirmationEmail: event.target.value});
    }

    render() {

        return (
                <form className="booking-form-container pl-3" onSubmit={this.handleSubmit}>
                    <div className="form-group row pt-3">
                        <label className="col-sm-1 col-form-label font-weight-bold">Nom</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Nom" onChange={this.onFirstNameChange}/>
                        </div>

                        <label className="col-sm-2 col-form-label font-weight-bold">Prénom</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Prénom" onChange={this.onLastNameChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label font-weight-bold">Nombre de chambres</label>
                        <div className="col-sm-1.9">
                            <select className="custom-select" defaultValue="1" onChange={this.onRoomNumberChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col">
                        <div className="row"><label className="col-sm-4.2 font-weight-bold">Nombre de personnes :</label></div>

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Adultes</label>
                            <div className="col-sm-1.9">
                                <select className="custom-select" defaultValue="1" onChange={this.onAdultsNumberChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <label className="col-sm-2 col-form-label">Enfants</label>
                            <div className="col-sm-1.9">
                                <select className="custom-select" defaultValue="1" onChange={this.onChildrenNumberChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <label className="col-sm-2 col-form-label">Bébés</label>
                            <div className="col-sm-1.9">
                                <select className="custom-select" defaultValue="1" onChange={this.onBabiesNumberChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-6 pl-1 col-form-label font-weight-bold">Informations complémentaires :</label>
                        <div className="col-sm-5">
                            <textarea className="form-control" rows="3" onChange={this.onAdditionalInformationChange}></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label font-weight-bold">Téléphone</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="0661******" onChange={this.onPhoneNumberChange}/>
                        </div>
                    </div>

                    <div className="row pl-1">
                        <div className="form-group col-sm-6">
                            <label className="col col-form-label font-weight-bold formLabel">Email</label>
                            <div className="col-sm-12">
                                <input type="email" className="form-control" placeholder="Email" onChange={this.onEmailChange}/>
                            </div>
                        </div>
                        <div className="form-group col-sm-6">
                            <label className="col col-form-label font-weight-bold formLabel">Confimer l'email</label>
                            <div className="col-sm-12">
                                <input type="email" className="form-control" placeholder="Email" onChange={this.onConfirmationEmailChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 pr-4 flex-row-reverse">
                        <button type="submit" className="btn btn-success font-weight-bold">Envoyer la pré-réservation</button>
                    </div>

                </form>
        );
    }
}


export default BookingForm;


