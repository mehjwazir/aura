import { Link } from 'react-router-dom';


export default function ExperienceForm() {
	return (
		<div>
			<div>
				<h1>Create</h1>
				<form>
					<label>Restaurant Name</label>
					<input type="text" name="restaurant" />
					<label>test</label>
					<input type="text" name="test" />
					<Link to="/aura/experience" className="button btn-sm">Create</Link>
				</form>
			</div>
		</div>
	);
}