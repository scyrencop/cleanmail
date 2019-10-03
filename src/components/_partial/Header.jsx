import React, {Component} from 'react';

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
    return ( 
            <div class="header">
              <div class="grp-btn">
                <div class="circle-after txt-danger" onclick="toggle('sidebar')" ></div>
                <div class="circle-after txt-warning" onclick="toggle('mails')"></div>
                <div class="circle-after txt-primary" onclick="toggle('mail')" ></div>
              </div>
              <div class="title">CleanMail</div>
            </div>

        )
  }

}
