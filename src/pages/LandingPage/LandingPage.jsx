import './LandingPage.css';
import { Link } from 'react-router-dom';



export default function LandingPage() {
	return (
		<main className='landing-page'>
			
		    <img className='welcome-image' src="https://i.imgur.com/IiRn6BH.png" alt="img" />
		
			<div className='welcome-title'>
				<h1>Welcome to AURA!</h1>
				<h2 className='welcome-line'>Turn moments into memories you can experience. </h2>
				<Link className="button btm-sm createbtn" to="/aura/login">Get Started</Link>
			</div>
		</main>
	);
}