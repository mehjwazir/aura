import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/aura/about">About</Link>
      &nbsp; | &nbsp;
      <Link to="/aura/experience">Experience</Link>
      &nbsp; | &nbsp;
      <Link to="/aura/favorites">Favorites</Link>
      &nbsp; | &nbsp;
      <Link to="/aura/discover">Discover</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}