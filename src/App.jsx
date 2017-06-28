import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


const users = {
  currentUser: {name: "Bob"},
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
      id:"01"
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id:"02"
    }
  ]
};


class App extends Component {

  constructor(props){
    super(props);
    this.state = users;
  }

  makeNewMessage = (message) => {
      console.log(message.message, message.username);
      const newMessage = {id: Date.now(),
        username: message.username,
        content: message.message};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
  }

  render() {
    console.log('rendering App')
    return (
      <div>
        <Navbar />
        <MessageList messageList={this.state.messages}/>
        <Chatbar
          currentUser={this.state.currentUser.name}
          makeNewMessage={this.makeNewMessage}/>
      </div>
    );
  }
}
export default App;