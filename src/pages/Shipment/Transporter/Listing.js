import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTransporterShipment } from '../../../store/actions/shipment'
import TransporterTable from './Table';
import Navbar from '../../../components/Navbar'

class TransporterListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getTransporterShipment()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
            <TransporterTable users={this.props.shipments} />
        </Container>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => (
  { shipments: state.shipments.shipments }
)

const mapDispatchToProps = { getTransporterShipment }

export default connect(mapStateToProps, mapDispatchToProps)(TransporterListing)