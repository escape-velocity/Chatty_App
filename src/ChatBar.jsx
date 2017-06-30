import React, {Component} from 'react';



class Chatbar extends Component {

  constructor(props){
    super(props);
    //this.state = {username: this.props.currentUser,
    //              message: ''}
  }

  handleMessageChange = (event) => {
    if(event.key == 'Enter') {
      this.props.handleMessage(event.target.value);
      event.target.value = '';
    }
  }
  handleUsernameChange = (event) => {
    if(event.key == 'Enter') {
      this.props.newUserName(event.target.value);
    }
  }
  onPressEnter = (event) => {
    if(event.key == 'Enter'){
      this.props.makeNewMessage(this.state);
      event.target.value = '';
    }
  }

  render() {
    console.log('rendering Chatbar')
    return (
     <footer className="chatbar">
       <input className="chatbar-username" defaultValue={this.props.username} onKeyPress={this.handleUsernameChange.bind(this)} />
       <input className="chatbar-message" placeholder="Type a message and hit  ENTER" name="message" onKeyPress={this.handleMessageChange.bind(this)}/>
    </footer>
    );
  }
}
export default Chatbar;