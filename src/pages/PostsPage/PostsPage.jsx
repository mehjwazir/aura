import { Link } from 'react-router-dom';
import "./PostsPage.css";
import PostCard from '../../components/PostCard/PostCard';




export default function PostsPage({ posts }) {
  
  

  return (
    <main>
      <h1>Experiences Page</h1>
      <Link to="/create" className="button btn-sm">Create Experience</Link>
    
    <div className="container">
      {posts && posts.map((post, idx) => {
        
          return <PostCard post={post} key={idx} />;
      })}
      </div>
    </main>
  );
}