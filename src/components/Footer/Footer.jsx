import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
	return (
	
		<footer className="footer">
			
			<div className="social-icons">
				<p>SOCIAL</p>
				<ul className='ul-social'>
					<li><a href='https://aura.up.railway.app/'><FaInstagram className="icon" /></a>Instagram</li>
					<li><a href='https://aura.up.railway.app/'><FaYoutube className="icon" /></a>Youtube</li>
					<li><a href='https://aura.up.railway.app/'><FaTiktok className="icon" /></a>Tiktok</li>
				</ul>
			</div>
			<form className="subscribe-form">
				<input type="email" placeholder="Enter your email" className="subscribe-input" />
				<button type="submit" className="subscribe-button">Subscribe</button>
			</form>
			<div>
				<p className="copyright">Copyright © AURA 2023</p>
			</div>
		</footer>
	);
};

export default Footer;