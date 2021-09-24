import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router'
import history from '../utils/history'
import NavbarShipper from './Navbar/Shipper'
import NavbarTransporter from './Navbar/Transporter'
import { getRole, removeUserSession } from '../utils/Common';

const handleLogout = () => {
    removeUserSession();    
    history.push('/login');
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: getRole()
        }
    }

    render() {
        if (this.state.role === '') {
            return <Redirect to='/'/>;
        } else {
            const isShipper = (this.state.role === 'shipper') ? true : false

            return (
                <React.Fragment>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between">
                        {isShipper 
                        ? <NavbarShipper />
                        : <NavbarTransporter />
                        }

                        <ul class="nav navbar-nav">
                        
                            <li class="nav-item">
                            <span class="badge rounded-pill bg-light text-dark">{this.state.role}</span> <Button type="button" className="btn btn-danger btn-logout" onClick={() => handleLogout()}>Logout</Button>
                            </li>
                        </ul>
                    </nav>
                </React.Fragment >
            )
        }
    }
}

export default Home