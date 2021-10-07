import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTruckDetail, updateTruckData } from '../../store/actions/truck'
import Navbar from '../../components/Navbar'
import history from '../../utils/history'

class TruckUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      license_number: '',
      truck_type: '',
      plate_type: '',
      production_year: '',
      stnk_upload: '',
      kir_upload: ''
    }
  }

  componentDidMount() {
    this.props.getTruckDetail(this.props.match.params.id)
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      'truck': {
        'license_number': (this.state.license_number === '') ? this.props.truck.license_number : this.state.license_number,
        'truck_type': (this.state.truck_type === '') ? this.props.truck.truck_type : this.state.truck_type,
        'plate_type': (this.state.plate_type === '') ? this.props.truck.plate_type : this.state.plate_type,
        'production_year': (this.state.production_year === '') ? this.props.truck.production_year : this.state.production_year,
        'stnk_upload': this.state.stnk_upload,
        'kir_upload': this.state.kir_upload
      }
		}

    const headers = {
			'Content-Type': 'application/json',
		}

    updateTruckData(this.props.match.params.id, payload, headers).then(res => {
      if (res.status === 200 && res.data.error === 0) {
        history.push('/trucks')
      } else {
        console.log('there error when update data')
      }
    })
  }

  handleFileRead = async(ev) => {
    const file = ev.target.files[0]
    const base64 = await this.convertBase64(file)

    if (ev.target.name === 'stnk_upload') {
      this.setState({stnk_upload: base64})
    } else if (ev.target.name === 'kir_upload') {
      this.setState({kir_upload: base64})
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
                <Form.Label className="control-label col-md-3">License Number</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="license_number"
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({license_number: e.target.value})}
                    defaultValue={this.props.truck ? this.props.truck.license_number : ''}
                    required="true" />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Truck Type</Form.Label>
                <Col className="col-md-8">
                  <Form.Select 
                    name="truck_type"
                    className="form-control"
                    onChange={e => this.setState({truck_type: e.target.value})}
                    defaultValue={this.props.truck ? this.props.truck.truck_type : ''}
                    required="true"
                  >
                    <option>- Select One -</option>
                    <option value="Container" selected={this.props.truck && this.props.truck.truck_type === 'Container' ? 'true' : 'false'}>Container</option>
                    <option value="Tronton" selected={this.props.truck && this.props.truck.truck_type === 'Tronton' ? 'true' : 'false'}>Tronton</option>
                    <option value="City" selected={this.props.truck && this.props.truck.truck_type === 'City' ? 'true' : 'false'}>City</option>
                  </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Plate Type</Form.Label>
                <Col className="col-md-8">
                  <Form.Select 
                    name="plate_type"
                    className="form-control"
                    onChange={e => this.setState({plate_type: e.target.value})}
                    defaultValue={this.props.truck ? this.props.truck.plate_type : ''}
                    required="true"
                  >
                    <option>- Select One -</option>
                    <option value="Black" selected={this.props.truck && this.props.truck.plate_type === 'Black' ? 'true' : 'false'}>Black</option>
                    <option value="Yellow" selected={this.props.truck && this.props.truck.plate_type === 'Yellow' ? 'true' : 'false'}>Yellow</option>
                  </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">Production Year</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="production_year"
                    type="number"
                    pattern="[0-9]"
                    className="form-control"
                    onChange={e => this.setState({production_year: e.target.value})}
                    defaultValue={this.props.truck ? this.props.truck.production_year : ''}
                    required="true" />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">STNK</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="stnk_upload"
                    type="file"
                    className="form-control"
                    inputProps={{ accept: 'image/*' }}
                    onChange={e => this.handleFileRead(e)} />
                </Col>
            </Form.Group>
            <Form.Group className="form-group row mt-3">
                <Form.Label className="control-label col-md-3">KIR</Form.Label>
                <Col className="col-md-8">
                  <Form.Control 
                    name="kir_upload"
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
                <Link to={'/trucks'}>
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
  { truck: state.trucks.truck }
)

const mapDispatchToProps = { getTruckDetail }

export default connect(mapStateToProps, mapDispatchToProps)(TruckUpdate)