import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import MailDetails from './MailDetails'
import axios from 'axios'

export default class Mails extends Component {

  constructor(props) {
    super(props)
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      addClass: false,
      bgColor : 'red',
      selectedMail: 1
    }
  }


  toggle() {
    this.setState({
      addClass: !this.state.addClass
    });
  }

 handleClick(index) {

    this.setState({
      bgColor: 'blue'
    })
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getMailData();
  }

  //Function to get the Mail Data from json
  getMailData() {
    axios.get('assets/json/maillist.json').then(response => {
      this.setState({mailList: response})
    })
  };
  

  render() {
    let boxClass = ["box"];
    if (this.state.addClass) {
      boxClass.push('active');
    }

    if (!this.state.mailList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.mailList.data.map(mail => 
          <Panel bsStyle="info" key={mail.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{mail.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{mail.email}</p>
              <p>{mail.date}</p>
              < Button bsStyle = "info"
              key = {
                mail.id
              }
              className = {
                boxClass.join(' ')
              }
              onClick = {
                () => this.setState({
                  selectedMail: mail.id,
                  addClass: !this.state.addClass[this.props.key]
                })
                // toggle()
                // this.toggle.bind(this)
                // this.handleClick.bind(this)
              } >

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <MailDetails val={this.state.selectedMail}/>
      </div>
    </div>)
  }

}
