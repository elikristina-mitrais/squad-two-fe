import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getTruckList } from '../store/actions/transporter'
import TruckListTable from './TruckListTable';
import { Link } from "react-router-dom";


class TruckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getTruckList()
    }

    render() {
        return (
            <React.Fragment>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <Link to={"/trucks/new"}>
                        <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055', float: 'right', marginRight: '12px' }}>Add new truck</Button>
                    </Link>
                    <TruckListTable users={this.props.truckList} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { truckList: state.transporter.truckList }
)

const mapDispatchToProps = { getTruckList }

export default connect(mapStateToProps, mapDispatchToProps)(TruckList)