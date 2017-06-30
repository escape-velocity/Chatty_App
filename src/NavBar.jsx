import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    console.log('rendering Navbar');
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
       <h4 className="userCount">Online Users: {this.props.userCount}</h4>
    </nav>
    );
  }
}
export default Navbar;