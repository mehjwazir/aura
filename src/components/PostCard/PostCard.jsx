import './PostCard.css'
import { Link } from "react-router-dom";

export default function PostCard({ post }) {

	return (
		<>

			<Link to={`/${post._id}`} >
				<ul>
					<li className='card-container'>
						<div className='card-container--content'>
					<div className='card_body'>
						<img src={post.photo} alt="img" className="card-img"  />
						<h2 className="card-header--title">{post.restaurant}</h2>
								<span className="card-date">{post.date}</span>
					</div>
							<button type="submit" className="card-button">details</button>
						</div>
					</li>
				</ul>
			</Link>
		</>
	);
}
