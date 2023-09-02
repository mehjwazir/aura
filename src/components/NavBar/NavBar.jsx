import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }


  const [show, setShow] = useState(false)

  function showSwitch() {
    return setShow(!show)
  }


  return <>
    <div className='navbar'>
      <div className='nav-logo' >AURA</div>
      <div className={show ? 'nav-links active' : 'nav-links'}>
        <Link onClick={() => showSwitch()} show={show} to="/">Home</Link>
        <Link onClick={() => showSwitch()} to="/experience">Experience</Link>
        <Link onClick={() => showSwitch()} to="/aura/about">About</Link>
        <Link onClick={() => showSwitch()} to="/discover">Discover</Link>
        {/* <Link className="nav-links" to="/aura/login">Login</Link> */}
        <Link onClick={handleLogOut} to="">Log Out</Link>
        <span>Welcome, {user.name}</span>
      </div>
      <div onClick={() => showSwitch()} className={show ? 'bars-button active' : 'bars-button '}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </>
}

