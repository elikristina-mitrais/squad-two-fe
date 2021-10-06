import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import history from '../utils/history'
import { setRole, getRole } from '../utils/session'
import NavbarShipper from './Navbar/Shipper'
import NavbarTransporter from './Navbar/Transporter'

const handleLogout = () => {
  setRole('')
  history.push('/')
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: getRole()
    }
  }

  render() {
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
              <Button type="button" onClick={() => handleLogout()}>Logout</Button>
            </li>
          </ul>
        </nav>
      </React.Fragment >
    )
  }
}

export default Navbar