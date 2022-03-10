import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function ExperienceForm({createExperience}) {
	const [formData, setFormData] = useState({
		restaurant: "",
		location: "",
		website: "",
		experience: "",
		
	}) 


	function handleChange(evt) {
	setFormData({...formData, [evt.target.name]: evt.target.value})
}
	
	function handleSubmit(evt) {
		evt.preventDefault();
		createExperience(formData)
	}
	
	
	
	return (
		<div>
			<div>
				<h1>Create Experience</h1>
				<form className='form-container' onSubmit={handleSubmit}>
					<label>Restaurant</label>
					<input type="text" name="restaurant" onChange={(evt) => handleChange(evt)} />
					<label>Location</label>
					<input type="text" name="location" onChange={(evt) => handleChange(evt)} />
					<label>Website</label>
					<input type="text" name="website" onChange={(evt) => handleChange(evt)} />
					<label>Experience</label>
					<input type="text" name="experience" onChange={(evt) => handleChange(evt)} />
					<label>Upload Photos</label>
					<input type="file" name="file" onChange={(evt) => handleChange(evt)} />
					<button type="submit" className="button btn-sm">Create</button>
				</form>
			</div>
		</div>
	);
}