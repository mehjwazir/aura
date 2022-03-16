import { useState, useRef } from 'react';
import './PostForm.css';
import { useNavigate } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';



export default function PostForm({ setUserPosts, setPosts, userPosts, posts }) {
	const [formData, setFormData] = useState({
		restaurant: "",
		date: "",
		location: "",
		website: "",
		experience: "",
	});
	const navigate = useNavigate();
	const fileInputRef = useRef();



	async function handleSubmit(evt) {
		evt.preventDefault();
		const form = new FormData();
		form.append('restaurant', formData.restaurant);
		form.append('date', formData.date);
		form.append('location', formData.location);
		form.append('website', formData.website);
		form.append('experience', formData.experience);
		form.append('photo', fileInputRef.current.files[0]);
		const post = await postsAPI.create(form);
		setPosts([...posts, post]);
		setUserPosts([...userPosts, post]);
		fileInputRef.current.value = '';
		navigate('/experience');
	}



	function handleChange(evt) {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}


	return (
		<div>
			<div>
				<h1>Create Experience</h1>
				<form className='form-container' onSubmit={handleSubmit} >
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
					<input type="file" ref={fileInputRef} />

				</form>
				<button type="submit" className="button btn-sm">Create</button>
			</div>

		</div>
	);
}






