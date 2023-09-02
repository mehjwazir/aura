import './HomePage.css';
import { Link } from 'react-router-dom';


export default function HomePage({ user, }) {

	return (
	<>
		<main className="HomePage">
			<div className='img-div'>
				<img className="home-img" src="Aura2.png" alt="" />
				<div className='create-link link-container'>
					<Link className="create-link1" to="/create">
						Create Experience</Link></div>
			</div>
			
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
				<img src="cm.webp" alt="" className='restaurant-pic' />
			</div>
			<div>
				<img src="7.jpg" alt="" className='aura-orchid' />
			</div>
			<div>
				<img src="8.jpg" alt="" className='aura-slogan'/>
			</div>
			<div>
				<img src="aura-footer.jpg" alt="aura-footer" className='aura-footer' />
			</div>
			</main>
		</>
	
	);
}
