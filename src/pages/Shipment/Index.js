import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { getShipmentsForShipper } from '../../store/actions/shipments'
import ShipmentListing from './Listing';

class Shipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getShipmentsForShipper()
    }

    render() {
        return (
            <React.Fragment>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <Link to={"shipments/new"}>
                        <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055', float: 'right', marginRight: '12px' }}>Add new Driver</Button>
                    </Link>
                    <ShipmentListing users={this.props.shipments} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { shipments: state.shipments.shipments }
)

const mapDispatchToProps = { getShipmentsForShipper }

export default connect(mapStateToProps, mapDispatchToProps)(Shipment)