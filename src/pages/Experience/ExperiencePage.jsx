import { Link } from 'react-router-dom';



export default function ExperiencePage() {
  return (
    <main>
      <h1>Experience Page</h1>
      <Link to="/aura/experience/create" className="button btn-sm">Create Experience</Link>
    </main>
    

  );
}