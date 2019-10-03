import React, {Component} from 'react';

//This Component is a child Component of Mails Component
export default class MailDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mailDetails : true
    }
  }

  render() {
    if (!this.state.mailDetails)
      return (<p>Loading Data</p>)
    return (
      <div class="content" id="mail">
        <div class="mail">
          <div class="mail-header">
            <div class="mail-nav">
              <a href=""> <i class="fa fa-angle-left"></i> </a>
              <a href=""> <i class="fa fa-angle-right"></i> </a>
            </div>
            <div class="date">27th March 2018</div>
            <div class="object">
              <span class="avatar success">A</span>
              <h3>I'm your new English teacher.</h3>
              <div class="grp-btn small">
                <a href="#"> <i class="fa fa-reply"></i> </a>
                <a href="#"> <i class="fa fa-print"></i> </a>
              </div>  
            </div>
            <ul class="tags">
              <li> <a href="">English </a> </li>
              <li> <a href="">Lorem </a> </li>
            </ul>
          </div>
          <div class="mail-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam at ducimus odit quo iure quibusdam dicta. Ratione, ipsa
           officia. Voluptatem tempore architecto delectus assumenda debitis dolor ad reiciendis, dolore quasi.
                     Lorem ipsum dolor <span data-tooltip="Lorem <b>ipsum</b> tooltip text">Lorem ipsum</span> sit amet consectetur, adipisicing elit. Totam at ducimus odit quo iure quibusdam dicta. Ratione, ipsa
officia. Voluptatem tempore architecto delectus assumenda debitis dolor ad reiciendis, dolore quasi.
                    <br /><br />
                Cordialement
                    <br/>
                  Mehdi All
                </div>
                <div class="mail-footer">
                  <textarea name="" id="" rows="5" placeholder="Write something..."></textarea>
                  <div class="right">
                    <button class="btn default"> <i class="fa fa-paperclip"></i> Attach files</button>
                    <button class="btn primary"> <i class="fa fa-send"></i> Send </button>
                  </div>
                </div>


            </div>
        </div>

    )
  }
}
