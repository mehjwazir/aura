import './PostCard.css'

export default function PostCard({post}) {


	


	return (
		<div className='postcard'>
			
			{post.restaurant}
			<button >
				restaurant detail
			</button>
		</div>
	
		
	);
}














{/* <article className="PhotoCard">
	<img src={photo.url} alt={photo.title} />
	<div>{photo.title}</div>
</article> */}