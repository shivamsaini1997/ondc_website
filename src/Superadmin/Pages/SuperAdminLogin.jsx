import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function SuperAdminLogin(){
    return(
        <>
            <div className="formadmin padding-y superform">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-7 padding-form">
                            <div className="text-center mb-5">
                                <h4> Admin Login</h4>
                            </div>
                            <div className="adminform">
                            <Form noValidate>
                                <Row className="mb-3 admin-fm">
                            
                                  
                                    <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                        <Form.Label>Eamil</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type="email"
                                        />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                        <Form.Label>Password</Form.Label>
                                        <div className="position-relative">
                                        <Form.Control className=""
                                            required
                                            type="Password"
                                            
                                        />
                                        <FontAwesomeIcon icon={faEyeSlash} className="iconpass" />
                                        </div>
                                       
                                      
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    
                                    
                                <a href="\" className="formbtn mt-3 w-100">Login</a>
                                </Row>
                                

                               
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SuperAdminLogin;