import React from 'react';
import { ProjectData } from '../../interfaces/ProjectData';
import { useJsonReader } from '../../hooks/useJsonReader';
import { Settings } from '../../interfaces/Settings';
import './Projects.scss';

interface Props {
	settings: Settings;
	handleTotalPages: (pages: number) => void;
}

function Projects ({ settings, handleTotalPages }: Props) {
	const [data, setData] = React.useState<ProjectData[]>([]);
	const jsonReader = useJsonReader();
	const { lang, currentPage } = settings;

	React.useEffect(() => {
		jsonReader<ProjectData[]>('projects')
			.then(resp => {
				setData(resp)
				handleTotalPages(resp.length)
			})
			.catch(err => console.error(err));
	}, []);

	const project = data[currentPage];

	return (
		<article className='Project'>
			{	project && <>
				<h2 className='Project-title'>{project.title}</h2>
				<p className='Project-description'
				>{project.description[lang]}</p>
				
				<div>
					<h3>{(lang === 'en') ? 'Technologies' : 'Tecnologías'}</h3>
					<p>{project.technologies}</p>
				</div>

				<div className='Project-buttons'>
					{
						project.implementation &&
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={project.implementation}
						>{(lang === 'en') ? 'View' : 'Ver'}</a>
					}
					{
						project.repository &&
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={project.repository}
						>{(lang === 'en') ? 'Repository' : 'Repositorio'}</a>
					}
				</div>
			</>	}
		</article>
	);
}

export default Projects;
