import React, {Component} from 'react';
import logo from './logo.svg';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      test: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // this.getMailData();
  }


  render() {
    return ( <header className="App-header" >
        <img src = { logo } className="App-logo" alt="logo" />
        <h1 className="App-title" > VMail </h1> 
        </header>
        )
  }

}
