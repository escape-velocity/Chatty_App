import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Mr Fluffyface"},
      userCount: 0,
      messages: []
    };
    this.makeNewMessage = this.makeNewMessage.bind(this);
    this.newUserName = this.newUserName.bind(this);
  }
  
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.onmessage = (event) => {
      
      const newMessage = JSON.parse(event.data);

      if (newMessage.type === 'incomingMessage' || newMessage.type === 'incomingNotification') {
        const newMessages = this.state.messages.concat(newMessage);

        console.log(newMessages)
        this.setState({
          messages: newMessages
        });
      }
      if (newMessage.type === 'updateUserCount') {
        this.setState({userCount: newMessage.userCount})
      }
    }
  }


  makeNewMessage(message) {
      const newMessage = {
        type: 'postMessage',
        username: this.state.currentUser.name,
        content: message
      };
      this.broadcastMessage(JSON.stringify(newMessage));
  }

  newUserName (username) {
    let previousName = this.state.currentUser.name;
    this.setState({ currentUser: { name: username } });

    const notification = {
      type: 'postNotification',
      username: null,
      content: `${previousName} changed their name to ${username}`
    };

    this.broadcastMessage(JSON.stringify(notification));
    console.log(notification);
  }

  // countUsers(count) {
  //   const userCount = {
  //   type: "countNotification"
  //   }  this.setState({userCount: incomingMessage.userCount})
  // }

  broadcastMessage(message) {
    this.socket.send(message);
  }



  render() {
    // console.log('rendering App')
    return (
      <div>
        <Navbar userCount={this.state.userCount}/>
        <MessageList messageList={this.state.messages}/>
        <ChatBar
          username={this.state.currentUser.name}
          handleMessage={this.makeNewMessage}
          newUserName={this.newUserName}
        />
      </div>
    );
  }
}
export default App;