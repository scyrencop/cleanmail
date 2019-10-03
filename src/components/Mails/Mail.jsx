import React, {Component} from 'react';

export default class Mail extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return ( 
      <div class={this.props.is_active == "true" ? "item active" : 'item' }>
            <div class="item-profil">
          <span class="avatar primary">{ this.props.name.charAt(0) }</span>
            </div>
            <div class="itme-content">
                <span class="name"> { this.props.name} </span>
                <span class="bullet warning"></span>
                <div class="item-title">
                    <h4> { this.props.title } </h4>
                </div>
                <div class="item-intro">
                  {this.props.content }
                </div>
            </div>
            <div class="item-time">{ this.props.time }</div>
        </div>
    )
  }

}
