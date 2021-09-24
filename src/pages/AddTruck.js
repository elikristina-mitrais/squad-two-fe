import React, { Component } from 'react'
import TruckForm from './TruckForm'
import { Row, Col } from 'react-bootstrap'
import style from '../assets/css/AddTruck.module.css'

export default class AddTruck extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div className={style.container}>
                            <h1>Add New Truck</h1>
                            <TruckForm />
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
