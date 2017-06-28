import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    console.log('rendering Navbar');
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
    );
  }
}
export default Navbar;