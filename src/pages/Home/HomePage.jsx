import './HomePage.css';
import { Link } from 'react-router-dom';


export default function HomePage({ user, }) {

	return (
		<main className="HomePage">
			<div className='img-div'>
				<img className="home-img" src="https://i.imgur.com/v9S4EnC.gif" alt="" />
			</div>
			<div className='home-text'>
				<h1>AURA</h1>
				<h3>Your next adventure awaits..</h3>
				<p>Turn moments into memories </p>		
				<div className='create-link'>
					<Link className="create-link" to="/create">Create Experience</Link>
				</div>
			</div>
			<div>
				<h2>Introducing: Aura</h2>
			</div>
			<div className='txt-p'>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim cupiditate dignissimos itaque! Architecto repellendus voluptate aperiam aut cumque harum quis assumenda dolores consequuntur. Quisquam laboriosam eum facere maiores odio ullam!
				</p>
			</div>
			<div className='txt-p'>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim cupiditate dignissimos itaque! Architecto repellendus voluptate aperiam aut cumque harum quis assumenda dolores consequuntur. Quisquam laboriosam eum facere maiores odio ullam!
				</p>
			</div>

			<div>
				<p className='alt-font mb8'>
					"LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. ENIM CUPIDITATE DIGNISSIMOS ITAQUE."
				</p>
				<span className='sub'>- Alek Chattman</span>
			</div>

			<div>
				<p className='alt-font mb8'>
					"LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. ENIM CUPIDITATE DIGNISSIMOS ITAQUE."
				</p>
				<span className='sub'>- Alek Chattman</span>
			</div>




			<div className='featured-div'>
				<h3>This weeks featured new restaurants and cafes</h3>
				<ul>
					<li>Lavo</li>
					<li>Mother tongue</li>
					<li>Maru coffe</li>
					<li>Bravo Toast</li>
				</ul>
				<div>
					
				</div>
			</div>

		</main>
	);
}
