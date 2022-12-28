import { Link } from 'react-router-dom';
import "./PostsPage.css";
import PostCard from '../../components/PostCard/PostCard';
import * as postsAPI from '../../utilities/posts-api';
import { useEffect } from 'react';





export default function PostsPage({ setUserPosts, userPosts }) {
 
  useEffect(function () {
    async function getAllUsersPosts() {
      const userPosts = await postsAPI.getUsersPost()
      setUserPosts(userPosts);
    }
    getAllUsersPosts();

  }, []);






  return (
    <main>
      <h1>Experience</h1>
      <Link to="/create" className="button btn-sm">Create Experience</Link>
    
    <div className="container">
      {userPosts && userPosts.map((post, idx) => {
        
          return <PostCard post={post} key={idx} />;
      })}
      </div>
    </main>
  );
}