import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getDrivers } from '../../store/actions/drivers'
import DriverListing from './Listing';

class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getDriver()
    }

    render() {
        return (
            <React.Fragment>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <DriverListing users={this.props.drivers} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { staffs: state.drivers.drivers }
)

const mapDispatchToProps = { getDrivers }

export default connect(mapStateToProps, mapDispatchToProps)(Driver)