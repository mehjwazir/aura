import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Home/HomePage'
import About from '../About/About';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import ExperiencePage from '../Experience/ExperiencePage';
import DiscoverPage from '../Discover/DiscoverPage';
import { getUser } from '../../utilities/users-service';
import * as experienceAPI from '../../utilities/experience-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [experiences, setExperiences] = useState([]);


  async function createExperience(formData) {
    console.log(formData);
    const experience = await experienceAPI.create(formData)
    setExperiences(...experiences, experience)
  }
  
  useEffect(function () {
    async function getAllExperience() {
      const allExperiences = await experienceAPI.getAll()
      setExperiences(allExperiences);
    }
    getAllExperience();
  }, []);

console.log(experiences)
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aura/about" element={<About />} />
            <Route path="/experiences" element={<ExperiencePage
              experiences={experiences}
            />} />
            <Route path="/create" element={<ExperienceForm
            createExperience={createExperience}
            />} />
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
