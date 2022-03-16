import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className="nav-links" to="/">Home</Link>
      <Link className="nav-links" to="/aura/about">About</Link>
      <Link className="nav-links" to="/experience">Experiences</Link>
      <Link className="nav-links" to="/discover">Discover</Link>
      <span>Welcome, {user.name}</span>
      <Link className="nav-links" to="/aura/login">Login</Link>
      <Link className="nav-links" onClick={handleLogOut} to="">Log Out</Link>
      </nav>
  );
}