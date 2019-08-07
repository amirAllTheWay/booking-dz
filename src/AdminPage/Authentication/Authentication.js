import {Component} from "react";
import React from "react";
import { Button, Form, FormGroup, Alert } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as actionCreators from "../../store/actions/actions";

import './Authentication.css';
import AdminPage from "../AdminPage";

class Authentication extends Component {

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();

        this.state = {
            isAuthFailed : true
        };
    }

    componentWillUnmount() {
        if (this.props.authInfo != null && this.props.authInfo.isAuthenticated === false) {
            this.props.onAuthUnMounting();
        }
    }

    logTest = () => {

        console.log("Auth State succeeded");
        //if(state.authInfo != null && state.authInfo.isAuthenticated === true) {

            //this.props.history.push("/auth");
        //}

        //return state.authInfo;
    }
    authButtonClicked = () => {
        this.props.onAuthButtonClicked({email: this.email.current.value, password: this.password.current.value});
    }

    render() {
        let authErrorMessage = null;
        let view = null;

        if (this.props.authInfo != null && this.props.authInfo.isAuthenticated === false) {
            authErrorMessage = (
                <Alert variant={'danger'}>
                    L'email et/ou le mot de passe ne correspond pas
                </Alert>
            );

        }

        if (this.props.authInfo == null || (this.props.authInfo != null && this.props.authInfo.isAuthenticated === false)) {
            view = (
                <div className="Authentication">

                    <div className="FormContainer">
                        <Form className="textFont">
                            <div className="text-center mb-4">
                                <h3>Espace Agence</h3>
                            </div>
                            <FormGroup className="FormGroupCon" controlId="formBasicEmail">
                                <Form.Label>Adresse email</Form.Label>
                                <Form.Control disabled={false} ref={this.email} type="email" placeholder="Email" />
                            </FormGroup>

                            <FormGroup className="FormGroupCon" controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control ref={this.password} type="password" placeholder="Mot de passe" />
                            </FormGroup>
                        </Form>
                        <Button className="btn-dark btn-lg btn-block" variant="primary" disabled={false} type="submit" onClick={this.authButtonClicked}>
                            Envoyer
                        </Button>

                        <div className="text-center AskAccess">
                            Demander un accès Pro
                        </div>

                        <div className="p-3">
                            {authErrorMessage}
                        </div>
                    </div>
                </div>
            );
        } else if(this.props.authInfo != null && this.props.authInfo.isAuthenticated === true) {
            this.logTest();
            view = (
                <div className="AdminPage">
                    <div>
                        <AdminPage/>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {view}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAuthButtonClicked: (authData) => {
            dispatch(actionCreators.authenticate(authData));
        },

        onAuthUnMounting: () => {
            dispatch({type: "AUTH_UNMOUNTING"});
        }
    };
};

const mapStateToProps = (state) => {
    return {
        authInfo: state.authInfo

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));
