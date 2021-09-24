import React from 'react'
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'


const { SearchBar } = Search

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const columns = [
    {
        dataField: 'license_number',
        text: 'Licence Number',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'truck_type',
        text: 'Truck Type',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'plate_type',
        text: 'Plate Type',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'production_year',
        text: 'Production Year',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'status',
        text: 'Status',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    },
    {
        dataField: 'link',
        text: 'Action',
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"trucks/detail/" + row.id}>
                        <Button className="mr-2" variant='secondary'>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </Button>
                    </Link>
                    <Link to={"trucks/update/" + row.id}>
                        <Button className="m-2" variant='secondary'>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </Link>
                    <Button variant='secondary'>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                </div>
            )
        }
    }];

const TruckListTable = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4 keyField='id' data={props.users} columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <div>
                                <SearchBar {...props.searchProps} className="color-grep my-3" placeholder="Search .." />
                            </div>
                            <BootstrapTable
                                {...props.baseProps} defaultSorted={defaultSorted} rowStyle={{ textAlign: 'center' }} noDataIndication="No data" pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}

export default TruckListTable