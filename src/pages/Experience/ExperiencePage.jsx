import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function ExperiencePage({user, setUser}) {
  /*--- State --- */
  const [experience, setExperience] = useState([])
  
  
  
  
  
  
  
  
  
  
  return (
    <main>
      <h1>Experience Page</h1>
      <Link to="/aura/experience/create" className="button btn-sm">Create Experience</Link>
    </main>
    

  );
}