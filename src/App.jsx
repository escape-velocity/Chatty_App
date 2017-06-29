import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';

const users = {
  currentUser: {name: "Bob"},
  // messages: [
  //   {
  //     username: "Bob",
  //     content: "Has anyone seen my marbles?",
  //     id:"01"
  //   },
  //   {
  //     username: "Anonymous",
  //     content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
  //     id:"02"
  //   }
  // ]
  messages:[]
};



class App extends Component {

  constructor(props){
    super(props);
    this.state = users;
  }
broadcastMessage(message) {
    this.socket.send(message);
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      const newMessages = this.state.messages.concat(newMessage);
      this.setState({ messages: newMessages
      });
    });
  }

  makeNewMessage = (message) => {
      console.log(message.message, message.username);
      const newMessage = {
        username: message.username,
        content: message.message
      };
      this.state.messages.concat(newMessage);
      //this.setState({messages: messages})
      this.broadcastMessage(JSON.stringify(newMessage))
  }

  render() {
    console.log('rendering App')
    return (
      <div>
        <Navbar />
        <MessageList messageList={this.state.messages} />
        <Chatbar
          currentUser={this.state.currentUser.name}
          makeNewMessage={this.makeNewMessage}/>
      </div>
    );
  }
}
export default App;