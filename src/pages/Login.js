import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap';
import history from '../utils/history'
import { setRole } from '../utils/session'

const handleLogin = (state) => {
  if (state.role !== '') {
    setRole(state.role)
    history.push('/home')
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div>
              <h3>Login</h3>
              <div>
                <p>Please select your roles:</p>
                  <Col sm={6}>
                    <Form.Check
                        type="radio"
                        label="Transporter"
                        name="role"
                        id="role_transporter"
                        value="transporter"
                        onChange={e => this.setState({role: e.target.value})}
                    />
                    <Form.Check
                        type="radio"
                        label="Shipper"
                        name="role"
                        id="role_shipper"
                        value="shipper"
                        onChange={e => this.setState({role: e.target.value})}
                    />
                  </Col>
              </div>
              <input type="button" className="btn btn-primary" value='Login' onClick={() => handleLogin(this.state)} /><br />
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default Login