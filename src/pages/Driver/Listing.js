import React from 'react'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

const { SearchBar } = Search

const columns = [
    {
        dataField: 'driver_name',
        text: 'Driver Name',
        sort: true,
        headerStyle: {
            width: '10%',
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
            console.log(row);
            return (    
                <div>
                    <Link to={`/drivers/detail/${row.id}`}><Button className="btn btn-primary"><FontAwesomeIcon icon={faInfoCircle} /></Button></Link>
                    &nbsp;
                    <Link to={`/drivers/update/${row.id}`}><Button className="btn btn-secondary"><FontAwesomeIcon icon={faEdit} /></Button></Link>
                </div>
            )
        }
    }];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const DriverListing = (props) => {
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

export default DriverListing