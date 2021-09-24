import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
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
        this.props.getDrivers()
    }

    render() {
        console.log(this.props.drivers)
        return (
            <React.Fragment>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <Link to={"drivers/new"}>
                        <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055', float: 'right', marginRight: '12px' }}>Add new Driver</Button>
                    </Link>
                    <DriverListing users={this.props.drivers} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { drivers: state.drivers.drivers }
)

const mapDispatchToProps = { getDrivers }

export default connect(mapStateToProps, mapDispatchToProps)(Driver)