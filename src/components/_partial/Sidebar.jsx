import React, {Component} from 'react';

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // this.getMailData();
  }


  render() {
    return ( 
        <div class="sidebar" id="sidebar">
            <div class="center" style={{  marginTop:'10px' }}>
                <button class="btn btn-new ">
                    <i class="fa fa-envelope-o"></i>
                    New Mail 
                </button>
            </div>
            <hr/>
            <ul class="sidebar-menu">
                <li class="count">
                    <a href="#"> <i class="fa fa-comment-o txt-primary"></i> Inbox</a>
                </li>
                <li>
                    <a href="#"> <i class="fa fa-paper-plane-o txt-secondary"></i> Sent</a>
                </li>
                <li class="count">
                    <a href="#"> <i class="fa fa-star-o txt-warning"></i> Marked</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-file-o txt-success"></i> Drafts</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-trash-o txt-danger"></i> Deleted</a>
                </li>
            </ul>

            <hr/>
                <h3> Labels </h3>

            <ul class="sidebar-menu small-menu">
                <li>
                    <a href="#"> <i class="fa fa-circle-o txt-primary"></i> Work</a>
                </li>
                <li>
                    <a href="#"> <i class="fa fa-circle-o txt-danger"></i> Personal</a>
                </li>
                <li>
                    <a href="#"> <i class="fa fa-circle-o txt-warning"></i> Family</a>
                </li>
                <li>
                    <a href="#" class="txt-disable"> <i class="fa fa-plus "></i> New Label</a>
                </li>
            </ul>
            <hr/>
            <div class="center">
                <h4>Mehdi All <br/>
                    <small>Mehdi.all.go@gmail.com</small>
                </h4>

                <div class="progressbar">
                    <div data-min="" data-max="" style={{ width:'45%' }}></div>
                </div>
                <span class="desc">73/150 Gb</span>  
            </div>
            <br/>
            <div class="flex-row center">
                <div>
                    <div class="stat-number">41</div>
                    <div class="stat-title">Uploads</div>
                </div>
                <div>
                    <h4 class="stat-number">62</h4>
                    <div class="stat-title">Messages</div>
                </div>
                <div>
                    <h4 class="stat-number">84</h4>
                    <div class="stat-title">Contacts</div>
                </div>
            </div>

            <ul class="sidebar-menu small-menu center last-btn">
                <li>
                    <a href="#"> <i class="fa fa-sliders"></i> Settings</a>
                </li>
            </ul>
        </div>

        )
  }

}
