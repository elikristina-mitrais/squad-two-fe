import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getDriverListing } from '../../store/actions/driver'
import DriverTable from './Table';
import Navbar from '../../components/Navbar'

class DriverListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getDriverListing()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
          <Link to={"drivers/new"}>
            <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055', float: 'right', marginRight: '12px' }}>Add new</Button>
          </Link>
          <DriverTable users={this.props.drivers} />
        </Container>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => (
  { drivers: state.drivers.drivers }
)

const mapDispatchToProps = { getDriverListing }

export default connect(mapStateToProps, mapDispatchToProps)(DriverListing)