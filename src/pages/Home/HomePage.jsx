import './HomePage.css';
import { Link } from 'react-router-dom';



export default function HomePage({ user }) {
	return (
		<main className="HomePage">
				<div className="img-div">
					<img className="home-img" src="https://i.imgur.com/v9S4EnC.gif" alt='img' />
				</div>
				<div className="home-text">
				<h2 className='home-h2'>Your next dining adventure awaits..</h2>
				<Link to="/create" className="create-link btn btn-sm btn-xs">Create Experience</Link>
			</div>	
		</main>
	);
}
