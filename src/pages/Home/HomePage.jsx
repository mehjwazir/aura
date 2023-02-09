import './HomePage.css';
import { Link } from 'react-router-dom';


export default function HomePage({ user, }) {

	return (
		<main className="HomePage">
			<div className='img-div'>
				<img className="home-img" src="Aura2.png" alt="" />
				<div className='create-link link-container'>
					<Link className="create-link1" to="/create">
						Create Experience</Link></div>
			</div>

			{/* <div className='home-text'>	
				<div className='create-link'>
					<Link className="create-link" to="/create">Create Experience</Link>
				</div>
			</div> */}


			{/* <div className='featured-div'>
				<h3>This weeks featured cafes and restaurants</h3>
				<ul>
					<li>Maru Coffee</li>
					<li>Great White</li>
					<li>Destroyer</li>
					<li>Tea At Shiloh</li>
					<li>Laurel Hardware</li>
				</ul>
			</div> */}


			<div className="scrolling-wrapper">
				<div className="card133">
					<div>
						<a href="https://www.marucoffee.com/" rel="noreferrer" target="_blank"><img className="card-image" src="https://i.imgur.com/HmtGZxF.png" alt="maru coffee" /></a>
					</div>
				</div>
				<div className="card133">
					<div>
						<a href="https://www.greatwhite.cafe/" rel="noreferrer" target="_blank">
							<img className="card-image" src="https://i.imgur.com/SL6xnZw.png" alt="great white cafe" /></a>
					</div>
				</div>
				<div className="card133">
					<div>
						<a href="http://destroyer.la/" rel="noreferrer" target="_blank">
							<img className="card-image" src="https://i.imgur.com/ofYFN9L.png" alt="destroyer cafe" /></a>
					</div>
				</div>
				<div className="card133">
					<div>
						<a href="https://teaatshiloh.com/" rel="noreferrer" target="_blank">
							<img className="card-image" src="https://i.imgur.com/j3rUpNk.png" alt="tea at shiiloh" /></a>
					</div>
				</div>
				<div className="card133">
					<div>
						<a href="https://www.laurelhardware.com/" rel="noreferrer" target="_blank">
							<img className="card-image" src="https://i.imgur.com/Oic5PMO.png" alt="Laurel Hardware" /></a>
					</div>
				</div>
				<div className="card133">
					<div>
						<a href="https://canyoncoffee.co/" rel="noreferrer" target="_blank">
							<img className="card-image" src="https://i.imgur.com/zIxMGND.png" alt="canyon coffee" /></a>
					</div>
				</div>
			</div>

			<div>
				<img src="cm.webp" alt="" className='fruit-pic' />
			</div>
			<div>
				<img src="Aura.jpg" alt="" className='aura-orchid' />
			</div>
			<div>
				<img src="aura-food.jpg" alt="" className='aura-food'/>
			</div>
		

			<div>
				<img src="aura-footer.jpg" alt="aura-footer" className='aura-footer' />
			
			</div>
			<div>
				<marquee className="marquee" behavior="scroll" direction="left">Your scrolling text goes here</marquee>
			</div>
			
{/* 
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
			</div> */}
		</main>
	);
}
