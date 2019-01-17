import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Mails Component
export default class MailDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }



  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getMailDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Mail Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getMailDetails(this.props.val)
    }
  }

  //Function to Load the mailDetails data from json.
  getMailDetails(id) {
    axios.get('assets/json/mail' + id + '.json').then(response => {
      this.setState({mailDetails: response})
    })
  };

  render() {
    if (!this.state.mailDetails)
      return (<p>Loading Data</p>)
    return (<div className="maildetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.mailDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.mailDetails.data.name}</p>
          <p>Email : {this.state.mailDetails.data.email}</p>
          <p>Phone : {this.state.mailDetails.data.phone}</p>
          <p>Job Profile : {this.state.mailDetails.data.jobProfile}</p>
          <p>Message : {this.state.mailDetails.data.message}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
