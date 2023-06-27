import { useState } from 'react';
import './Header.scss';
import { Lang } from '../../interfaces/Languages';
import { Link, NavLink } from 'react-router-dom';

import iconDiscord from '../../assets/icons/discord.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';
import iconGithub from '../../assets/icons/github.svg';

interface Props {
	lang: Lang;
	handleLang: () => void;
}

function Header ({ lang, handleLang }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

	return (
		<header className='Header'>
			<div>
				<Link to={'/'}>
					<h1>Van de Flame</h1>
				</Link>
				
				<nav className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
					<button
					 	aria-label="Toggle navigation menu"
						className="Navbar-toggle"
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<div className="Navbar-bg" onClick={() => setIsMenuOpen(false)}>
						<ul className="Navbar-links">

							<li>
								<NavLink to='/'>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/jobs'>
									Jobs
								</NavLink>
							</li>
							<li>
								<NavLink to='/projects'>
									Projects
								</NavLink>
							</li>
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://vandeflame.github.io/curriculum/'
								>
									Curriculum Vitae
								</a>
							</li>
							<li>
								<button onClick={handleLang}>
									{(lang === 'en') ? 'Language: english' : 'Idioma: español'}
								</button>
							</li>

						</ul>

						<ul className="Navbar-socialMedia">
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://discordapp.com/users/205191947810373632'
								>
									<img className="icon" src={iconDiscord} alt="Discord" />
								</a>
							</li>
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://twitter.com/VanDeFlame'
								>
									<img className="icon" src={iconTwitter} alt="Twitter" />
								</a>
							</li>
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.instagram.com/vandeflame/'
								>
									<img className="icon" src={iconInstagram} alt="Instagram" />
								</a>
							</li>
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.linkedin.com/in/vandeflame/'
								>
									<img className="icon" src={iconLinkedin} alt="LinkedIn" />
								</a>
							</li>
							<li>
								<a 
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/VanDeFlame'
								>
									<img className="icon" src={iconGithub} alt="Github" />
								</a>
							</li>

						</ul>
					</div>
				</nav>

			</div>
		</header>
	);
}

export { Header };
