import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Home/HomePage'
import About from '../About/About';
import PostForm from '../../components/PostForm/PostForm';
import PostsPage from '../PostsPage/PostsPage';
import DiscoverPage from '../Discover/DiscoverPage';
import { getUser } from '../../utilities/users-service';
import * as postsAPI from '../../utilities/posts-api';
import PostDetailPage from '../PostDetailPage/PostDetailPage';


//Added photos useState

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  // const navigate = useNavigate();
  // const [photos, setPhotos] = useState([]);
 

 
  
  useEffect(function () {
    async function getAllPosts() {
      const allPosts = await postsAPI.getAll()
      setPosts(allPosts);
    }
    getAllPosts();
    async function getAllUsersPost() {
      const allPosts = await postsAPI.getUsersPost()
      setUserPosts(allPosts);
    }
    getAllUsersPost();
  }, []);



// Added photos prop

  return (
    <main className="App">
    { user ?
      <>
      <NavBar user={user} setUser={setUser} />
          <Routes className="NavBar">
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aura/about" element={<About />} />
            <Route path="/experience" element={<PostsPage userPosts={userPosts} setUserPosts={setUserPosts} />} />
            <Route path="/:id" element={<PostDetailPage posts={posts} setPosts={setPosts} user={user} setUserPosts={setUserPosts} userPosts = {userPosts} />} />
            <Route path="/create" element={<PostForm userPosts={userPosts} setUserPosts={setUserPosts} posts={posts} setPosts={setPosts} />} />
            <Route path="/discover" element={<DiscoverPage posts={posts} />} />
            <Route path="/aura/login" element={<AuthPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

// photos={photos}