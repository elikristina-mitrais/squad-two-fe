import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTruckDetail } from '../../store/actions/truck'
import Navbar from '../../components/Navbar'

class TruckDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getTruckDetail(this.props.match.params.id)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
          {this.props.truck && Object.keys(this.props.truck).map((key, idx) => (
              <Row className="col-md-12" key={idx}>
                <Col className="col-md-4">{key}</Col>
                {this.props.truck[key] && (key === 'stnk_upload' || key === 'kir_upload') ? 
                <img src={this.props.truck[key]} alt={key} /> :
                <Col className="col-md-8">: {(key === 'stnk_upload' || key === 'kir_upload') ? '-' : this.props.truck[key]}</Col>}
              </Row>
          ))}
          
          <Row>&nbsp;</Row>
          <Row className="col-md-12">
            <Col className="col-md-4">&nbsp;</Col>
            <Col className="col-md-8">
              <Link to={'/trucks'}>
                <Button className="btn btn-secondary">Back</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment >
    )
      
  }
}

const mapStateToProps = state => (
  { truck: state.trucks.truck }
)

const mapDispatchToProps = { getTruckDetail }

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail)