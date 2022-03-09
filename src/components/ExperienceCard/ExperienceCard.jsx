import { Link } from "react-router-dom";

export default function ExperienceCard(props) {
	return (
		<>
			<Link to='/aura/experience' className="experience-link">
				<div
					style={{
						background: `url(${props.experience.photos}) no repeat center center`,
						backgroundSize: "cover",
					}}
					className="item-card"
				>
					<div className="title">
						<h1>{props.experience.restaurant}</h1>
					</div>
				</div>
			</Link>
		</>
	);
}