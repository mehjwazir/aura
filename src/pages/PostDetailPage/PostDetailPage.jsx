import "./PostDetailPage.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import * as postsAPI from '../../utilities/posts-api';






export default function PostDetailPage({ posts, setPosts, user, setUserPosts, userPosts }) {
	const { id } = useParams();
	const post = posts.find((p) => p._id === id);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState(post);
	const [showDelete, setShowDelete] = useState(false);
	const fileInputRef = useRef();
	const navigate = useNavigate();
	

	async function editPost(id) {
		const update = await postsAPI.edit(id, formData);
		const updatedPosts = posts.map((post) => post._id === update._id ? update : post);
		const updatedUserPosts = userPosts.map((post) => post._id === update._id ? update : post);
		setPosts(updatedPosts);
		setUserPosts(updatedUserPosts);
		fileInputRef.current.value = '';
	
	}

	function handleChange(evt) {
		const newFormData = { ...formData, [evt.target.name]: evt.target.value };
		setFormData(newFormData);
	}


	async function deletePost(id) {
		const deletePost = await postsAPI.deletePost(id);
		const updatedPosts = posts.filter(post => post._id !== deletePost._id);
		setPosts(updatedPosts);	
	}  

	
	function handleDelete(id) {
		deletePost(id);
		navigate('/experience');
	}



	useEffect(() => {
		if (post.user._id === user._id)
			setShowDelete(true);

	},[]);



	return (
		<div>
		
			 <div>
				<img className="detail-img" src={post.photo} alt="img" />
				<h1>{post.restaurant}</h1>
				<h6>{post.date}</h6>
				<h4>{post.location}</h4>
				<h5>{post.website}</h5>
				<h6>{post.experience}</h6>
				<h2> Created By: {post.user.name}  </h2> 
				{showDelete &&
					<>
					<button type="submit" onClick={() => handleDelete(post._id)} id="detailDelete"> Delete </button>
					<button onClick={() => setShowForm(true)}>Edit</button>
				</>
				
				}
				
				
			</div>
			{showForm &&
			<div>
				<h1>Edit Post</h1>
					<form >
					<label>Restaurant</label>
					<input type="text" name="restaurant" onChange={(evt) => handleChange(evt)} />
					<label>Date</label>
					<input type="text" name="date" onChange={(evt) => handleChange(evt)} />
					<label>Location</label>
					<input type="text" name="location" onChange={(evt) => handleChange(evt)} />
					<label>Website</label>
					<input type="text" name="website" onChange={(evt) => handleChange(evt)} />
					<label>Experience</label>
					<input type="text" name="experience" onChange={(evt) => handleChange(evt)} />
					<label>Upload Photos</label>
						<input type="file" ref={fileInputRef} name="photo"  onChange={(evt) => handleChange(evt)} /> 
						<button onClick={() => editPost(post._id)} id="edit" >Submit Changes</button>
					</form>
					
				</div>
			}
		</div>

	);
}