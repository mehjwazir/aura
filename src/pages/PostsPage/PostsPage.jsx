import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import "./PostsPage.css";
import PostCard from '../../components/PostCard/PostCard';




export default function PostsPage({posts}) {
  

  console.log(posts);
  return (
    <main>
      <h1>Experiences Page</h1>
      <Link to="/create" className="button btn-sm">Create Experience</Link>
    
    <div className="container">
      {posts && posts.map((post) => {
        // if (post.length)
          return <PostCard key={post.restaurant} post={post} />;
      })}
      </div>
    </main>
  );
}