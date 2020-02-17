import {Component} from "react";
import React from "react";
import '../BookingForm/BookingForm.css';
import * as actionCreators from "../../store/actions/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";
import PreorderVisualizer from "../../PreorderVisualizer/PreorderVisualizer";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const ModalComponent = ({ handleClose, handlePrint, show, children }) => {
    const showHideClassname = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassname}>
            <section backdrop="true" className="modal-main">
                {children}
                    <button className="btn btn-primary pr-2" onClick={handlePrint}>Enregistrer</button>
                    <button className="btn btn-secondary pl-3" onClick={handleClose}>Fermer</button>
            </section>
        </div>
    );
};

class BookingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            roomsNumber : 1,
            adultsNumber : 1,
            childrenNumber : 0,
            babiesNumber : 0,
            complementaryInfo : null,
            phoneNumber : null,
            email : null,
            confirmationEmail : null,
            href: '/preorder',
            show: false,
            preorder: {},
        };

        //this.handleSubmit = this.handleSubmit.bind(this);

    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    printPreorderAndCloseModal = () => {
        const Element = document.getElementById("preorder-container");
        let pdf = new jsPDF('p','pt','a4');
        html2canvas(Element).then(canvas => {
            const dataURL = canvas.toDataURL();
            const pdf = new jsPDF();

            pdf.addImage(dataURL, 'PNG', 12, 7, 180, 160);

            pdf.save('saved.pdf')
        }).catch(
            error =>{
                console.log("error: ", error);
            }
        )

        setTimeout(
            () => {
                this.setState({ show: false });
            }, 30);

    }

    handleSubmit = (event) => {
        event.preventDefault();

        let preorder = {offerReference: this.props.selectedQuickViewOffer.offerReference,
            userFirstName: this.state.firstName,
            userLastName: this.state.lastName,
            userEmail: this.state.email,
            userPhone: this.state.phoneNumber,
            numberRooms: this.state.roomsNumber,
            numberAdults: this.state.adultsNumber,
            numberChildren: this.state.childrenNumber,
            numberBabies: this.state.babiesNumber,
            complementaryInfo: this.state.complementaryInfo
        };
        this.setState({preorder: preorder},
            () => {
                this.props.onGeneratePreorderClicked(preorder);
                this.showModal();
            }
        );
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

    onComplementaryInfoChange = (event) => {
        this.setState({complementaryInfo: event.target.value});
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
            <div>
                <form id="divToPrint" className="booking-form-container pl-3" >
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
                            <textarea className="form-control" rows="3" onChange={this.onComplementaryInfoChange}></textarea>
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
                        <Button className="btn btn-success font-weight-bold" onClick={this.handleSubmit}>Envoyer la pré-réservation
                        </Button>
                    </div>
                </form>
                <ModalComponent show={this.state.show} handlePrint={this.printPreorderAndCloseModal} handleClose={this.hideModal}>
                    <PreorderVisualizer preorder={this.state.preorder} selectedQuickViewOffer={this.props.selectedQuickViewOffer}/>
                </ModalComponent>
            </div>
            );

    }
}



const mapStateToProps = state => {
    return {
        preorderID: state.preorderID
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGeneratePreorderClicked: (preorder) => {
            dispatch(actionCreators.generatePreorder(preorder));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookingForm));
