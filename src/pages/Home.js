import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Welcome, Squad Two Here</h1>
                <Link to={"/trucks"}>
                    <Button>Go to table list page</Button>
                </Link>
            </React.Fragment >
        )
    }
}

export default Home