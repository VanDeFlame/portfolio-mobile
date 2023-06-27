import React from 'react';
import { useJsonReader } from '../../hooks/useJsonReader';
import { JobData } from '../../interfaces/JobData';
import { Settings } from '../../interfaces/Settings';
import './Jobs.scss';
import { LoadingScreen } from '../../components/LoadingScreen';

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

	const job = data[currentPage];
	const jobInfo = data[currentPage]?.info[lang];

	if (!job) return <LoadingScreen />;	
	return (
		<article className='Job'>
			<div>
				<h2 className="Job-company">{job.company}</h2>
				<h3 className="Job-position">{job.position}</h3>
				<p>
					{job.startDate} - {job.endDate}
				</p>
			</div>

			<p className="Job-description">{jobInfo.description}</p>

			<div>
				<h3>{(lang === 'en') ? 'Responsibilities' : 'Responsabilidades'}</h3>
				<p>{jobInfo.responsibilities}</p>
			</div>

			<div>
				<h3>{(lang === 'en') ? 'Team' : 'Equipo'}</h3>
				<p>{jobInfo.team}</p>
			</div>

			{
				jobInfo.extraInformation &&
				<div>
					<h3>{(lang === 'en') ? 'Extra Information' : 'Información Extra'}</h3>
					<p>{jobInfo.extraInformation}</p>
				</div>
			}

			<div>
				<h3>{(lang === 'en') ? 'Technologies' : 'Tecnologías'}</h3>
				<p>{job.technologies}</p>
			</div>
		</article>
	);
}

export default Jobs;
