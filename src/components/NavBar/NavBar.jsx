import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/aura/about">About</Link>
     <Link to="/experience">Experiences</Link>
     <Link to="/discover">Discover</Link>
     <span>Welcome, {user.name}</span>
     <Link to="/aura/login">Login</Link>
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}