import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Mails from './components/Mails/Mails'
import MailDetails from './components/Mails/MailDetails'
import Header from './components/_partial/Header'
import Sidebar from './components/_partial/Sidebar'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div class="wrapper">
          <Header/>
          <Sidebar/>
          <Mails/>
          <MailDetails/>
        </div>
      </Router>
    );
  }
}

export default App;
