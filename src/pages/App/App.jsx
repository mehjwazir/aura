import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

//Added photos useState

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  // const [photos, setPhotos] = useState([]);


  async function createPost(formData) {
    console.log(formData);
    const post = await postsAPI.create(formData)
    setPosts(...posts, post)
  }
  
  useEffect(function () {
    async function getAllPosts() {
      const allPosts = await postsAPI.getAll()
      setPosts(allPosts);
    }
    getAllPosts();
  }, []);

//Added photos prop

  return (
    <main className="App">
    { user ?
      <>
      <NavBar user={user} setUser={setUser} />
          <Routes className="NavBar">
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aura/about" element={<About />} />
            <Route path="/experience" element={<PostsPage
              posts={posts}
              // photos={photos}
            />} />
            <Route path="/create" element={<PostForm
            createPost={createPost}
            />} />
            <Route path="/aura/discover" element={<DiscoverPage />} />
            <Route path="/aura/login" element={<AuthPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
