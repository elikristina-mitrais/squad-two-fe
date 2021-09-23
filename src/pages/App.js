import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
      </React.Fragment >
    )
  }
}

export default App