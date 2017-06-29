import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Mr Fluffyface"},
      messages: []
    };


  this.makeNewMessage = this.makeNewMessage.bind(this);
  this.newUserName = this.newUserName.bind(this);


  }
  makeNewMessage(message) {
      //console.log(message.message, message.username);
      const newMessage = {
        type: 'incomingMessage',
        username: message.username,
        content: message.message
      };
      //const messages = this.state.messages.concat(newMessage);
      this.state.messages.concat(newMessage);
      //this.setState({messages: messages})
      this.broadcastMessage(JSON.stringify(newMessage))
  }

  newUserName (username) {
    let previousName = this.state.currentUser.name;
    this.setState({ currentUser: { name: username } });

    const notification = {
      type: 'incomingNotification',
      content: '${previousName} changed their name to ${username}'
    };

    this.socket.send(JSON.stringify(notification));
    console.log(notification);
  }

  broadcastMessage(message) {
    this.socket.send(message);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      const newMessages = this.state.messages.concat(newMessage);
      this.setState({
        messages: newMessages
      });
    });
  }


  render() {
    console.log('rendering App')
    return (
      <div>
        <Navbar />
        <MessageList messageList={this.state.messages}/>
        <ChatBar
          username={this.state.currentUser.name}
          makeNewMessage={this.makeNewMessage}
          newUserName={this.newUserName}
        />
      </div>
    );
  }
}
export default App;