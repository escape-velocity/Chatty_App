import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('rendering messagelist')
    const allMessages = this.props.messageList.map((message) =>
           <Message messageContent={message.content}
                 username={message.username}
                 key={message.id}/>
     );
    return (
    <main className="messages">
        {allMessages}
    </main>
    );
  }
}
export default MessageList;