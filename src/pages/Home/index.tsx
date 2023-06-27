import React from 'react';
import { Settings } from '../../interfaces/Settings';
import { Profile } from '../../components/Profile';

interface Props {
	settings: Settings;
	handleTotalPages: (pages: number) => void;
}

function Home ({ settings, handleTotalPages }: Props) {

	React.useEffect(() => {
		handleTotalPages(1)
	}, []);
	
	return (
		<div>
			<Profile lang={settings.lang} />
		</div>
	);
}

export default Home;