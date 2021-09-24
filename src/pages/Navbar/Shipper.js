import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarShipper extends Component {
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
                    <Link className="nav-link" to={"/shipments/shipper"}>Shipments</Link>
                </li>
            </ul>
        )
    }
}

export default NavbarShipper