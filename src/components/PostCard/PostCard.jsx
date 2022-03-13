import './PostCard.css'
import { Link } from "react-router-dom";

export default function PostCard({post}) {

	return (
		<>
		
			<Link to={`/${post._id}`} >
				<div className='postcard'>
				<div className='card-body'>
				<img src={post.photo} alt="img" />
				<h2 className='card-title'>{post.restaurant}</h2>
				<p className="card-description">{ post.experience }</p>
			</div>
			<button type="submit" className="button btn-sm">details</button>
				</div>
			</Link>
		</>
	);
}
