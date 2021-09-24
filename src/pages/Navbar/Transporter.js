import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarTransporter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>LMS |</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/shipments/transporter"}>Shipments</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/trucks"}>Trucks</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/drivers"}>Drivers</Link>
                </li>
            </ul>
        )
    }
}

export default NavbarTransporter