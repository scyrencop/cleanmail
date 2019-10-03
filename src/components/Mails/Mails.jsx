import React, {Component} from 'react';

import Mail from './Mail'

export default class Mails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mailList : {}
    }
  }

  render() {

    if (!this.state.mailList)
      return (<p>Loading data</p>)
    return (

      <div class="mails" id="mails">
            <div class="search">
                <input type="text" class="" placeholder="Search"/>
            </div>
            <div class="sub-menu">
                <a href="javascript:void(0)" onclick="sort()"> <i class="fa fa-sort-amount-desc " id="sort"></i>  Newest </a>    
            </div>

            <a href="javascript:void(0)" 
                class="scroll-top" 
                onclick="scrollDiv('items', 15)" 
                onmouseover="scrollDiv('items', 3)" 
                onmouseout="clearTimeout(timer1)">
                <i class="fa fa-angle-up"></i>
            </a>
            <div class="items" id="items" sort='asc'>

                <Mail   
                    name="No reply" 
                    title="I'm your new English teacher"   
                    content="Lorem ipsum dolor sit amet consectetur."
                    time="3 min ago"
                    is_active="true"
                        />
                <Mail  
                    name="No reply" 
                    title="Confirm your mail 1"   
                    content="Lorem ipsum dolor down up in this."
                    time="3 min ago"
                        />
                        
                <Mail  
                    name="No reply" 
                    title="Confirm your mail 1"   
                    content="Lorem ipsum dolor down up in this."
                    time="3 min ago"
                        />
                
                <div class="item active">
                    <div class="item-profil">
                        <span class="avatar primary">N</span>
                    </div>
                    <div class="itme-content">
                        <span class="name">No Reply</span>
                        <span class="bullet warning"></span>
                        <div class="item-title">
                            <h4> I'm your new English teacher. </h4>
                        </div>
                        <div class="item-intro">
                             Lorem ipsum dolor sit amet consectetur,
                        </div>
                    </div>
                    <div class="item-time">3 min ago</div>
                </div>

            </div>
            <a href="javascript:void(0)" class="scroll-bottom" 
                onclick="scrollDiv('items', -15)" 
                onmouseover="scrollDiv('items', -3)" 
                onmouseout="clearTimeout(timer1)">
                <i class="fa fa-angle-down"></i>
            </a>
        </div>
    
    )
  }

}
