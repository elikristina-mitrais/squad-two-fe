import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getShipperShipment } from '../../../store/actions/shipment'
import ShipperTable from './Table';
import Navbar from '../../../components/Navbar'

class ShipperListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getShipperShipment()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
            <ShipperTable users={this.props.shipments} />
        </Container>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => (
  { shipments: state.shipments.shipments }
)

const mapDispatchToProps = { getShipperShipment }

export default connect(mapStateToProps, mapDispatchToProps)(ShipperListing)