import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import "./ExperiencePage.css";
// import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';



export default function ExperiencePage() {
  // const [experience, setExperience] = useState([])

  // useEffect(function () {
  //   async function getExperience() {
  //     const experience = await experience.getAllExperience()
  //     setExperience(experience);
  //   }
  //   getExperience();
  // }, []);
  
  return (
    <main>
      <h1>Experience Page</h1>
      <Link to="/create" className="button btn-sm">Create Experience</Link>
    
    {/* <div className="container">
      {experience && experience.map((experience) => {
        if (experience.photos.length)
          return <ExperienceCard key={experience.restaurant} experience={experience} />;
      })}
      </div> */}
    </main>
  );
}