import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getDriverDetail, updateDriverData } from '../../store/actions/driver'
import Navbar from '../../components/Navbar'
import history from '../../utils/history'

class DriverUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver_name: '',
      phone_number: '',
      ktp_upload: '',
      sim_upload: ''
    }
  }

  componentDidMount() {
    this.props.getDriverDetail(this.props.match.params.id)
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
			'driver_name': this.state.driver_name,
			'phone_number': this.state.phone_number,
      'ktp_upload': this.state.ktp_upload,
      'sim_upload': this.state.sim_upload
		}

    const headers = {
			'Content-Type': 'application/json',
		}

    updateDriverData(this.props.match.params.id, payload, headers)
    history.push('/drivers')
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
                    defaultValue={this.props.driver ? this.props.driver.driver_name : ''}
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
                    defaultValue={this.props.driver ? this.props.driver.phone_number : ''}
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
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={e => this.setState({ktp_upload: e.target.value})} />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Driver License</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="sim_upload"
                    type="file"
                    className="form-control"
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={e => this.setState({sim_upload: e.target.value})} />
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

const mapStateToProps = state => (
  { driver: state.drivers.driver }
)

const mapDispatchToProps = { getDriverDetail }

export default connect(mapStateToProps, mapDispatchToProps)(DriverUpdate)