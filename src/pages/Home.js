import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Navbar from '../components/Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.state.role === '') {
            return <Redirect to='/' />;
        } else {
            return (
                <React.Fragment>
                    <Navbar />
                </React.Fragment >
            )
        }
    }
}

export default Home