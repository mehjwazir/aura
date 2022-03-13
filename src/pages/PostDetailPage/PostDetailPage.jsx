import "./PostDetailPage.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';




export default function PostDetailPage({posts, setPosts}) {
	const { id } = useParams();
	// const navigate = useNavigate();
	const post = posts.find((p) => p._id === id);

	// function handleDelete(id) {
	// 	deletePost(id);
	// 	navigate('/');
	// }

	async function deletePost(id) {
		const deletePost = await postsAPI.deletePost(id);
		const updatedPosts = posts.filter(post => post._id !== deletePost._id);
		setPosts(updatedPosts);
	}  


	function handleDelete(id) {
		deletePost(id);
	}

	return (
		<div>
		
			 <div>
				<img src={post.photos} alt="img" />
				<h1>{post.restaurant}</h1>
				<h6>{post.date}</h6>
				<h4>{post.location}</h4>
				<h5>{post.webiste}</h5>
				<h6>{post.experience}</h6>
				<h2> Created By: {post.user.name}  </h2> 
				<button type="submit" onClick={() => deletePost(post._id)} id="detaildelete"> Delete </button>
			</div>
			
		</div>

	);
}