import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import style from '../assets/css/AddTruck.module.css'
import { editTruck } from '../store/actions/transporter'
import { Link } from "react-router-dom";


class EditTruck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseNumber: '',
      plateType: '',
      truckType: '',
      productionYear: '',
      stnk: '',
      kir: '',
    }
  }

  submitData = (e) => {
    e.preventDefault();
    const { licenseNumber, truckType, plateType, productionYear, stnk, kir } = this.state
    this.props.editTruck(licenseNumber, truckType, plateType, productionYear, stnk, kir, this.props.match.params.id)
  }

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
          </Col>
          <Col>
            <div className={style.container}>
              <h1>Edit Truck</h1>
              <Container>
                <Form>
                  <Form.Group className="my-5">
                    <Form.Label>License Number</Form.Label>
                    <Form.Control name="licenseNumber" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group className="my-5">
                    <Form.Label>Truck Type</Form.Label>
                    <select className="form-control" name="truckType" onChange={this.changeText}>
                      <option selected>Select truck type</option>
                      <option value="Tronton">Tronton</option>
                      <option value="Container">Container</option>
                      <option value="CDE">CDE</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="my-5">
                    <Form.Label>Plate Type</Form.Label>
                    <select className="form-control" name="plateType" onChange={this.changeText}>
                      <option selected>Select plate type</option>
                      <option value="Black">Black</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="my-5">
                    <Form.Label>Production Year</Form.Label>
                    <Form.Control name="productionYear" onChange={(event) => this.changeText(event)} type="text" placeholder="Optional" />
                  </Form.Group>
                  <Form.Group className="my-5">
                    <Form.Label>STNK (Optional)</Form.Label>
                    <Row>
                      <input className={style.addFileButton} type="file" name="stnk" onChange={(event) => this.changeText(event)}>
                      </input>
                    </Row>
                  </Form.Group>
                  <Form.Group className="my-5">
                    <Form.Label>KIR (Optional)</Form.Label>
                    <Row>
                      <input className={style.addFileButton} type="file" name="kir" onChange={(event) => this.changeText(event)}>
                      </input>
                    </Row>
                  </Form.Group>
                  {this.state.licenseNumber == '' || this.state.plateType == '' || this.state.truckType == '' ? <Button disabled className={style.submitButton} variant='secondary'>Edit unit</Button> : <Button className={style.submitButton} variant='secondary' onClick={this.submitData}>Edit unit</Button>}
                  <Link className={style.cancelButton} to={"/trucks"}>
                    <Button variant='secondary'>Cancel</Button>
                  </Link>
                </Form>
              </Container>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = { editTruck }

export default connect(null, mapDispatchToProps)(EditTruck)
