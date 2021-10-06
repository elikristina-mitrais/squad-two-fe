import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getDriverDetail } from '../../store/actions/driver'
import Navbar from '../../components/Navbar'

class DriverDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getDriverDetail(this.props.match.params.id)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
          {this.props.driver && Object.keys(this.props.driver).map((key, idx) => (
              <Row className="col-md-12" key={idx}>
                <Col className="col-md-4">{key}</Col>
                {this.props.driver[key] && (key === 'sim_upload' || key === 'ktp_upload') ? 
                <img src={this.props.driver[key]} alt={key} /> :
                <Col className="col-md-8">: {(key === 'sim_upload' || key === 'ktp_upload') ? '-' : this.props.driver[key]}</Col>}
              </Row>
          ))}
          
          <Row>&nbsp;</Row>
          <Row className="col-md-12">
            <Col className="col-md-4">&nbsp;</Col>
            <Col className="col-md-8">
              <Link to={'/drivers'}>
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
  { driver: state.drivers.driver }
)

const mapDispatchToProps = { getDriverDetail }

export default connect(mapStateToProps, mapDispatchToProps)(DriverDetail)