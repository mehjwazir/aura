import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Home/HomePage'
import About from '../About/About';
import PostForm from '../../components/PostForm/PostForm';
import PostsPage from '../PostsPage/PostsPage';
import DiscoverPage from '../Discover/DiscoverPage';
import { getUser } from '../../utilities/users-service';
import * as postsAPI from '../../utilities/posts-api';
import PostDetailPage from '../PostDetailPage/PostDetailPage';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);





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





  return (
    <>
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes className="NavBar">
            {/* Route components in here */}
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/aura/about" element={<About user={user} />} />
            <Route path="/experience" element={<PostsPage user={user} userPosts={userPosts} setUserPosts={setUserPosts} />} />
            <Route path="/:id" element={<PostDetailPage user={user} posts={posts} setPosts={setPosts}  setUserPosts={setUserPosts} userPosts={userPosts} />} />
            <Route path="/create" element={<PostForm user={user} userPosts={userPosts} setUserPosts={setUserPosts} posts={posts} setPosts={setPosts} />} />
            <Route path="/discover" user={user} element={<DiscoverPage posts={posts} setPosts={setPosts} />} />

          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} />
      }
      </main>
    </>
  );
}

