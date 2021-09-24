import React, { useState } from 'react';
import axios from 'axios';
import { Form, Col } from 'react-bootstrap';
import { setRoleSession } from '../utils/Common';

function Login(props) {
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);

    if (role === 'transporter' || role === 'shipper'){
        setLoading(false);
        setRoleSession(role);
        props.history.push('/home');
    }else{
        setLoading(false);
        props.history.push('/login');
        setError('Please choose your roles');
    }
    
    
  }

  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <div>
      <h3>Login</h3><br /><br />
      <div>
        <p>Please select your roles:</p>
          <Col sm={6}>
            <Form.Check
                type="radio"
                label="Transporter"
                name="role"
                id="role_transporter"
                value="transporter"
                onChange={e => setRole(e.target.value)}
            />
            <Form.Check
                type="radio"
                label="Shipper"
                name="role"
                id="role_shipper"
                value="shipper"
                onChange={e => setRole(e.target.value)}
            />
          </Col>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" className="btn btn-primary" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
    </div>
    </div>
  );
}


export default Login;