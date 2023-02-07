// import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';
import * as postsAPI from '../../utilities/posts-api';
import { useEffect } from 'react';


export default function DiscoverPage({ posts, setPosts }) {

	useEffect(function () {
		async function getAllPosts() {
			const allPosts = await postsAPI.getAll()
			setPosts(allPosts);
		}
		getAllPosts();

	}, []);


	return (
		<main>
			<h1 className='posts-h1'>Discover</h1>
			<div className="container">
				{posts && posts.map((post, idx) => {
					return <PostCard post={post} key={idx} />;
				})}
			</div>
		</main>
	);
}