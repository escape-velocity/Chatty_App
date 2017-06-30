import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props); 
    this.classname = 'message';
    if(this.props.type === 'incomingNotification'){
      this.classname += ' system'
    }
  }
  render() {
    // console.log('rendering message');
    return (
      <div className={this.classname}>
        <span className='message-username'>{this.props.username}</span>
        <span className='message-content'>{this.props.messageContent}</span>
      </div>
    );
  }
}
export default Message;
