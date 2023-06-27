import { PdaSelector } from "../PdaSelector";
import logo from '../../assets/images/logo.webp';

function ProfileEn () {
	return (
		<section className='Profile'>
			<h2 className='Profile-title'>
				Alexis Jauge
			</h2>
			<h3 className='Profile-subtitle'>
				Web Developer
			</h3>
			<div className='Profile-info'>
				<figure>
					<img src={logo} alt="VanDeFlame's Logo" />
				</figure>

				<ul>
					<li className='Profile-info-item'>
						<PdaSelector text='20 years old'/>
					</li>
					<li className='Profile-info-item'>
						<PdaSelector text='August 27'/>
					</li>
					<li className='Profile-info-item'>
						<PdaSelector text='Male'/>
					</li>
					
				</ul>
			</div>

			<div>
				<h3>Skills</h3>
				<ul>
					<li>Frontend: React, TypeScript, HTML, CSS</li>
					<li>Backend: Java, NodeJS, Springboot, Express</li>
					<li>Databases: SQL</li>
				</ul>
			</div>

			<div>
				<h3>Language Proficiency</h3>
				<ul>
					<li>Native Spanish speaker</li>
					<li>B1 level in English</li>
					<li>Currently learning Portuguese</li>
				</ul>
			</div>

			<div>
				<h3>Interests</h3>
				<p>Exploring various fields of knowledge, including design, physics, mathematics, history, and other subjects</p>
			</div>
		</section>
	);
}

export default ProfileEn;