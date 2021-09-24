import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addNewDriver } from '../../store/action/transporter'

class AddDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driverName: '',
            phoneNumber: '',
            idCard: '',
            driverLicense: '',
        }

    }

    submitData = (e) => {
        e.preventDefault();
        const { driverName, phoneNumber, idCard, driverLicense } = this.state
        this.props.addNewDriver(driverName, phoneNumber, idCard, driverLicense)
        
    }

    changeText = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onFileChange = event => { 
        this.setState({ [event.target.name]: event.target.files[0] }); 
      }; 

    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <React.Fragment>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Driver Name</Form.Label>
                            <Form.Control name="driverName" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phoneNumber" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ID Card</Form.Label>
                            <Form.Control name="idCard" onChange={(event) => this.onFileChange(event)} type="file" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Driver License</Form.Label>
                            <Form.Control name="driverLicense" onChange={(event) => this.onFileChange(event)} type="file" placeholder="" />
                        </Form.Group>
                        <br />
                        <Button className="btn btn-primary" onClick={this.submitData}>Save Driver</Button>
                        &nbsp;<Link className="btn btn-secondary" to={"/drivers"}>Cancel</Link>
                    </Form>
                </Container>
            </React.Fragment>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = { addNewDriver }

export default connect(null, mapDispatchToProps)(AddDriver)