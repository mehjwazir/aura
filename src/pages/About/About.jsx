import './About.css';


export default function About() {
	return (
		<main>
			<h1 className='about'>ABOUT</h1>
			<img src="https://i.imgur.com/2ntu0fr.jpg" alt="img" className="img-class"
				width={300}/>
			
			<h3 className='h3aura'>REST <span className='aura'>AURA</span> NT</h3>
			<p className="Text"> is a personal experience website that allows you to save your adventures in one place.</p>

			<img src="https://i.imgur.com/mUCpU2K.jpg" alt="img" className='gray-img'
				width={300} />

		</main>
	);
}