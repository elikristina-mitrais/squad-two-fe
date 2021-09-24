import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getDriverDetail } from '../../store/actions/drivers'
import style from '../../assets/css/TruckDetails.module.css'

class DriverDetails extends Component {
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
            <div>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div className={style.container}>
                            <h1>Driver Details</h1>
                            <br />
                            <br />
                            <p><b>Driver Name:</b> {this.props.driver && this.props.driver.driver_name}</p>
                            <p><b>Phone Number:</b> {this.props.driver && this.props.driver.phone_number}</p>
                            <p><b>Created At:</b> {this.props.driver && this.props.driver.created_at}</p>
                            <p><b>Status:</b> {this.props.driver && this.props.driver.status}</p>
                            <br/>
                            <Link to={'/drivers'}>
                                <Button className="btn btn-secondary">Back</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { driver: state.drivers.driver }
)

const mapDispatchToProps = { getDriverDetail }

export default connect(mapStateToProps, mapDispatchToProps)(DriverDetails)