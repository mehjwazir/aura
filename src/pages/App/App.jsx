import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../Home/HomePage'
import AuthPage from '../AuthPage/AuthPage';
import FavoritesPage from '../Favorites/FavoritesPage';
import ExperiencePage from '../Experience/ExperiencePage';
import About from '../About/About';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aura/about" element={<About />} />
            <Route path="/aura/experience" element={<ExperiencePage />} />
            <Route path="/aura/favorites" element={<FavoritesPage />} />
           
              
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
