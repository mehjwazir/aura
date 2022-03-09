import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Home/HomePage'
import About from '../About/About';
import ExperiencePage from '../Experience/ExperiencePage';
import FavoritesPage from '../Favorites/FavoritesPage';
import DiscoverPage from '../Discover/DiscoverPage';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aura/about" element={<About />} />
            <Route path="/aura/experience" element={<ExperiencePage />} />
            <Route path="/aura/favorites" element={<FavoritesPage />} />
            <Route path="/aura/discover" element={<DiscoverPage />} />
            <Route path="/aura/login" element={<AuthPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
