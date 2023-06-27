import React from 'react';
import { useJsonReader } from '../../hooks/useJsonReader';
import { JobData } from '../../interfaces/JobData';
import { Settings } from '../../interfaces/Settings';
import './Jobs.scss';

interface Props {
	settings: Settings;
	handleTotalPages: (pages: number) => void;
}

function Jobs ({ settings, handleTotalPages }: Props) {
	const [data, setData] = React.useState<JobData[]>([]);
	const jsonReader = useJsonReader();
	const { lang, currentPage } = settings;

	React.useEffect(() => {
		jsonReader<JobData[]>('jobs')
			.then(resp => {
				setData(resp)
				handleTotalPages(resp.length)
			})
			.catch(err => console.error(err));
	}, []);

	const currentJobPage = data[currentPage];
	const currentJobInfo = data[currentPage]?.info[lang];
	
	return (
		<article className='Job'>
			{	currentJobPage && <>
				<h2 className="Job-company">{currentJobPage.company}</h2>
				<h3 className="Job-position">{currentJobPage.position}</h3>
				<p>
					{currentJobPage.startDate} - {currentJobPage.endDate}
				</p>
				<p className="Job-description">{currentJobInfo.description}</p>

				<div>
					<h3>{(lang === 'en') ? 'Responsibilities' : 'Responsabilidades'}</h3>
					<p>{currentJobInfo.responsibilities}</p>
				</div>

				<div>
					<h3>{(lang === 'en') ? 'Team' : 'Equipo'}</h3>
					<p>{currentJobInfo.team}</p>
				</div>

				{
					currentJobInfo.extraInformation &&
					<div>
						<h3>{(lang === 'en') ? 'Extra Information' : 'Información Extra'}</h3>
						<p>{currentJobInfo.extraInformation}</p>
					</div>
				}

				<div>
					<h3>{(lang === 'en') ? 'Technologies' : 'Tecnologías'}</h3>
					<p>{currentJobPage.technologies}</p>
				</div>
			</>	}
		</article>
	);
}

export default Jobs;
