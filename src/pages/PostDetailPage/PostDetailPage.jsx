import "./PostDetailPage.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';




export default function PostDetailPage({ posts, setPosts, user, setUserPosts, userPosts }) {
	const { id } = useParams();
	const post = posts.find((p) => p._id === id);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState(post);
	const [showDelete, setShowDelete] = useState(false);

	async function editPost(id) {
		console.log('whattt');
		console.log(id);
		console.log(formData);
		const update = await postsAPI.edit(id, formData);
		const updatedPosts = posts.map((post) => post._id === update._id ? update : post);
		const updatedUserPosts = userPosts.map((post) => post._id === update._id ? update : post);
		setPosts(updatedPosts);
		setUserPosts(updatedUserPosts);
	
	}



	async function deletePost(id) {
		const deletePost = await postsAPI.deletePost(id);
		const updatedPosts = posts.filter(post => post._id !== deletePost._id);
		setPosts(updatedPosts);
	}  

	function handleChange(evt) {
		const newFormData = { ...formData, [evt.target.name]: evt.target.value };
		setFormData(newFormData);
	}

	// function handleSubmit(evt) {
	// 	evt.preventDefault();
	// 	editPost(post._id);

	// }


	function handleDelete(id) {
		deletePost(id);
	}

	useEffect(() => {
		console.log(post);
		if (post.user === user._id)
			setShowDelete(true);

	},[]);




	return (
		<div>
		
			 <div>
				<img src={post.photo} alt="img" />
				<h1>{post.restaurant}</h1>
				<h6>{post.date}</h6>
				<h4>{post.location}</h4>
				<h5>{post.webiste}</h5>
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
					<input type="file" name="file" onChange={(evt) => handleChange(evt)} />
					</form>
					<button onClick={() => editPost(post._id)} id="edit" >Subit Changes</button>
				</div>
			}
		</div>

	);
}