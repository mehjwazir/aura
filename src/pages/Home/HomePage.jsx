import './HomePage.css';
import { Link } from 'react-router-dom';



export default function HomePage() {
	return (
		<main className="HomePage">
			<div>
				<h1>Home</h1>
				<p>Your next dining adventure awaits..</p>
				<Link to="/aura/experience/create" className="button btm-sm">Create Experience</Link>
			</div>
		</main>


	);
}
