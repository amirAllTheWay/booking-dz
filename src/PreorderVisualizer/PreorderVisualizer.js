import {Component} from "react";
import React from "react";
import './PreorderVisualizer.css';
import { StyleSheet } from '@react-pdf/renderer';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import {connect} from "react-redux";
import {ClipLoader} from "react-spinners";

Moment.globalLocale = 'fr';
Moment.globalFormat = 'DD MMMM YYYY';
Moment.globalLocal = true;

class PreorderVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state ={
            offer: null,
            preorder: null
        };
    }

    render() {

        // Create styles
        const styles = StyleSheet.create({
            page: {
                flexDirection: 'column',
                backgroundColor: 'white'
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            },
            header: {
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '20px',
                height: '15%',
                backgroundColor: '#E4E4F5'
            },
            img: {
                height: '120px',
                width: '100px'
            }
        });

        let selectedView = null;
        if(this.props.preorder === null ||  this.props.preorder === undefined) {
            selectedView = (
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#808080'}
                    />
                </div>
            );

        } else {
            const dateToFormat = '1976-07-19T12:59-0500';
            selectedView = (
                <div className="preorder-body">
                    <Table striped bordered className="table-secondary">
                        <tbody>
                        <tr>
                            <td align="left" className="preorder-title">
                                <div className="preorder-header">
                                    <div>
                                        <img style={styles.img}
                                             src={`data:image/jpeg;base64,${this.props.selectedQuickViewOffer.agencyLogo}`}/>
                                    </div>
                                    <div>
                                        <h3>Pré-réservation</h3>
                                    </div>
                                    <div id="siyahaLogo">
                                        <img style={styles.img}
                                             src={`data:image/jpeg;base64,${this.props.selectedQuickViewOffer.agencyLogo}`}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" className="preorder-title">Détails de la préreservation</td>
                        </tr>
                        <tr>
                            <td align="left" className="reference-body">
                                <h6>Référence:</h6>
                                <h5 className="reference-style">ALG-056-789 {this.props.selectedQuickViewOffer.offerReference}</h5>
                            </td>
                        </tr>

                        <tr>
                            <td align="left">
                                <h5 className="font-weight-bold">{this.props.selectedQuickViewOffer.offerTitle}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" className="reference-body">
                                <h6>Prix:</h6>
                                <h5 className="reference-style">{this.props.selectedQuickViewOffer.offerPrice} DA</h5>
                            </td>
                            <td align="left" className="reference-body">
                                <h6>Remise:</h6>
                                <h5 className="reference-style">10.000 DA</h5>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" className="table-row">
                                <h4 className="text-uppercase">&nbsp;{this.props.preorder.userFirstName}&nbsp;{this.props.preorder.userLastName}</h4>
                            </td>
                        </tr>

                        <tr>
                            <td align="left" className="table-row">
                                <h6>Nombre de personnes: {this.props.preorder.numberAdults + this.props.preorder.numberChildren + this.props.preorder.numberBabies}</h6>
                            </td>
                        </tr>

                        <tr>
                            <td align="left" className="table-row">

                                <div className="hotel-row">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex flex-row align-items-start">
                                            <h5 className="font-weight-bold text-secondary">{this.props.selectedQuickViewOffer.hotelName}</h5>
                                        </div>
                                        <div className="d-flex flex-row"><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i>
                                        </div>

                                        <div className="d-flex flex-row mt-2">
                                            <i className="fas fa-map-marked-alt"></i>&nbsp;&nbsp;
                                            <h6>Hotel address</h6>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <i className="fas fa-phone"></i>&nbsp;&nbsp;
                                            <h6>Hotel Phone</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column ml-5">
                                        <div className="d-flex flex-row">
                                            <i className="fas fa-clock"></i>&nbsp;&nbsp;<h6
                                            className="font-weight-bold text-secondary">Enregistrement</h6>
                                        </div>
                                        <h6 className="font-weight-bold">24 Fev 2020 </h6>
                                        <h6 className="text-secondary">Après 14h</h6>
                                    </div>
                                    <div className="d-flex flex-column ml-5">
                                        <div className="d-flex flex-row">
                                            <i className="fas fa-clock"></i>&nbsp;&nbsp;<h6
                                            className="font-weight-bold text-secondary">Départ</h6>
                                        </div>
                                        <h6 className="font-weight-bold">5 Mars 2020</h6>
                                        <h6 className="text-secondary">Avant 12h</h6>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td align="left" className="table-row">
                                <h5>Valide jusqu'au: &nbsp; <Moment locale="fr">{dateToFormat}</Moment></h5>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" className="table-row">
                                <div className="hotel-row">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex flex-row align-items-start">
                                            <h5>Agence &nbsp; Agency Name</h5>
                                        </div>
                                        <div className="d-flex flex-row mt-2">
                                            <i className="fas fa-map-marked-alt"></i>&nbsp;&nbsp;
                                            <h6>Agency address</h6>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <i className="fas fa-phone"></i>&nbsp;&nbsp;
                                            <h6>Agency Phone</h6>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </div>);
        }


        return (
            <div className="preorder-container" id="preorder-container">
                {selectedView}
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        preorderData: state.preorderData,
        selectedQuickViewOffer: state.selectedQuickViewOffer
    }
};


export default connect(mapStateToProps, null)(PreorderVisualizer);

