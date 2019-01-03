import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Mails from './components/Mails/Mails'
import Header from './components/_partial/Header'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/maillist"/>
                )}/>
                <Route exact path='/maillist' component={Mails} />
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
