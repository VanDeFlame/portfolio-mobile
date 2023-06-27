import { useState } from 'react';
import './Header.scss';
import { Lang } from '../../interfaces/Languages';
import { Link, NavLink } from 'react-router-dom';

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
					</div>
				</nav>

			</div>
		</header>
	);
}

export { Header };
