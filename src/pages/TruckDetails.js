import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTruckListDetail } from '../store/actions/transporter'
import style from '../assets/css/TruckDetails.module.css'

class TruckDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getTruckListDetail()
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div className={style.container}>
                            <h1>Truck Details</h1>
                            <br />
                            <br />
                            <p><b>Truck license Number:</b> {this.props.truckDetailList.license_number}</p>
                            <p><b>Truck type:</b> {this.props.truckDetailList.truck_type}</p>
                            <p><b>Plate type:</b> {this.props.truckDetailList.plate_type}</p>
                            <p><b>Production year:</b> {this.props.truckDetailList.production_year}</p>
                            <p><b>Status:</b> {this.props.truckDetailList.status}</p>
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
    { truckDetailList: state.transporter.truckDetailList }
)

const mapDispatchToProps = { getTruckListDetail }

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetails)