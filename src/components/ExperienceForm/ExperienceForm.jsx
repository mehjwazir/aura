import { useState } from 'react';
import './ExperienceForm.css';


export default function ExperienceForm({createExperience}) {
	const [formData, setFormData] = useState({
		restaurant: "",
		Date: "",
		location: "",
		website: "",
		experience: "",
		// Added this for image
		photo: ""
		
	}) 


	function handleChange(evt) {
	setFormData({...formData, [evt.target.name]: evt.target.value})
}
	
	function handleSubmit(evt) {
		evt.preventDefault();
		createExperience(formData)
		//Added this for image
		// form.append('photo', fileInputRef.current.files[0]);
	}
	
	
	//Added fileinputref for image
	return (
		<div>
			<div>
				<h1>Create Experience</h1>
				<form className='form-container' onSubmit={handleSubmit}>
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
					<input type="file" name="file"  onChange={(evt) => handleChange(evt)} />
					<button type="submit" className="button btn-sm">Create</button>
				</form>
			</div>
		</div>
	);
}
//to add in input for photos
// ref = { fileInputRef }