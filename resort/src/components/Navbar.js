import React, { Component } from 'react'
import logo from '../images/logo.svg' // Accessing the icon from the images folder.
import { FaAlignRight } from 'react-icons/fa' // Accessing the Fa Align Right from the icons package.
import { Link } from 'react-router-dom' // This is going to be used to actually direct the user to the pages.

export default class Navbar extends Component {
  // Makes it so that by default Navbar will not be open
  state = {
    isOpen: false
  }
  // This method handles the state of the Navbar
  // When called it will either open the NavBar or close the Navbar
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' />
            </Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
