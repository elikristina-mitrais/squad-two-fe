import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTruckListing } from '../../store/actions/truck'
import TruckTable from './Table';
import Navbar from '../../components/Navbar'

class TruckListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getTruckListing()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
          <Link to={"trucks/new"}>
            <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055', float: 'right', marginRight: '12px' }}>Add new</Button>
          </Link>
          <TruckTable users={this.props.trucks} />
        </Container>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => (
  { trucks: state.trucks.trucks }
)

const mapDispatchToProps = { getTruckListing }

export default connect(mapStateToProps, mapDispatchToProps)(TruckListing)