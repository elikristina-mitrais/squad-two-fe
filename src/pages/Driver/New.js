import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { addNewDriver } from '../../store/actions/driver'
import Navbar from '../../components/Navbar'
import history from '../../utils/history'

class DriverNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver_name: '',
      phone_number: '',
      ktp_upload: '',
      sim_upload: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      'driver': {
        'driver_name': this.state.driver_name,
        'phone_number': this.state.phone_number,
        'ktp_upload': this.state.ktp_upload,
        'sim_upload': this.state.sim_upload
      }
		}

    const headers = {
			'Content-Type': 'application/json',
		}

    addNewDriver(payload, headers).then(res => {
      if (res.status === 201 && res.data.error === 0) {
        history.push('/drivers')
      } else {
        console.log('there error when added data')
      }
    });
  }

  handleFileRead = async(ev) => {
    const file = ev.target.files[0]
    const base64 = await this.convertBase64(file)

    if (ev.target.name === 'ktp_upload') {
      this.setState({ktp_upload: base64})
    } else if (ev.target.name === 'sim_upload') {
      this.setState({sim_upload: base64})
    }
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
          <Form className="form-horizontal" onSubmit={e => this.handleSubmit(e)}>
            <Form.Group className="form-group row">
                <Form.Label className="control-label col-md-3">Driver Name</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="driver_name"
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({driver_name: e.target.value})}
                    required="true" />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Phone Number</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="phone_number"
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({phone_number: e.target.value})}
                    required="true" />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">ID Card</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="ktp_upload"
                    type="file"
                    className="form-control"
                    inputProps={{ accept: 'image/*' }}
                    onChange={e => this.handleFileRead(e)} />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Driver License</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="sim_upload"
                    type="file"
                    className="form-control"
                    inputProps={{ accept: 'image/*' }}
                    onChange={e => this.handleFileRead(e)} />
                </Col>
            </Form.Group>
            <Row className="card-footer mt-3">
              <Col className="col-md-3">&nbsp;</Col>
              <Col className="col-md-8">
                <Button type="submit" className="btn btn-primary">Submit</Button>
                &nbsp;
                <Link to={'/drivers'}>
                  <Button className="btn btn-secondary">Back</Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Container>
      </React.Fragment >
    )
      
  }
}

export default DriverNew