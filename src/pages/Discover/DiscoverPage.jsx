import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';


export default function DiscoverPage({posts}) {
	console.log(posts);

	return (
		<main>
			<h1>Discover Page</h1>
			

			<div className="container">
				{posts && posts.map((post, idx) => {

					return <PostCard post={post} key={idx} />;
				})}
			</div>
		</main>
	);
}