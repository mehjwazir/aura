import { Link } from 'react-router-dom';


export default function ExperienceForm() {
	return (
		<div>
			<div>
				<h1>Create Experience</h1>
				<form className='form-container'>
					<label>Restaurant</label>
					<input type="text" name="restaurant" />
					<label>Location</label>
					<input type="text" name="location" />
					<label>Website</label>
					<input type="text" name="website" />
					<label>Experience</label>
					<input type="text" name="experiencet" />
					<label>Upload Photos</label>
					<input type="file" name="file" />
					<Link to="/aura/experience" className="button btn-sm">Create</Link>
				</form>
			</div>
		</div>
	);
}