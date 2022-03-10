import './HomePage.css';
import { Link } from 'react-router-dom';



export default function HomePage() {
	return (
		<main className="HomePage">
			<div>
				<h1 className='title'>AURA</h1>
				<p className='place'>Your next dining adventure awaits..</p>
				<Link to="/create" className="button btm-sm createbtn">Create Experience</Link>
			<div>
					<img src="https://i.imgur.com/W4ska4Z.jpg" alt='img' width={300} className='rectangle-23' />
			</div>
			</div>
		</main>


	);
}
