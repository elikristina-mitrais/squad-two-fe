import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { updateDriverData } from '../../store/actions/driver'

const { SearchBar } = Search

const handleStatus = (id) => {
    confirmAlert({
        title: 'Set to Inactive',
        message: 'Are you sure to do this?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
                const payload = {
                    'driver': {        
                        'status': 'Inactive'
                    }
                }
                    
                const headers = {
                    'Content-Type': 'application/json',
                }

                updateDriverData(id, payload, headers).then(res => {
                    if (res.status === 200 && res.data.error === 0) {
                        window.location.reload()
                    }
                });
            }
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
    });
}

const columns = [
    {
        dataField: 'id',
        text: 'No.',
        sort: true,
        headerStyle: {
            width: '10%',
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'driver_name',
        text: 'Driver Name',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'phone_number',
        text: 'Phone Number',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'created_at',
        text: 'Created At',
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
    }, {
        text: 'Action',
        sort: false,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
        formatter: (rowContent, row) => {
            return (    
                <div>
                    <Link to={`/drivers/detail/${row.id}`}>
                        <Button className="btn btn-primary">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </Button>
                    </Link>
                    &nbsp;
                    <Link to={`/drivers/update/${row.id}`}>
                        <Button className="btn btn-warning">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </Link>
                    &nbsp;
                    {row.status === 'Inactive' ? '' :
                    <Button className="btn btn-danger" onClick={handleStatus.bind(null, row.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    }
                </div>
            )
        }
    }];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const DriverTable = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4 keyField='id' data={props.users} columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <div className="float-right">
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

export default DriverTable