import React, { lazy, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { LoadingScreen } from '../components/LoadingScreen';
import { Header } from '../components/Header';
import { Pda } from '../components/Pda';
import { Settings } from '../interfaces/Settings';

// Lazy-loaded components
const Home 			= lazy(() => import('../pages/Home'));
const Jobs 			= lazy(() => import('../pages/Jobs'));
const Projects 	= lazy(() => import('../pages/Projects'));

function App () {
	const [settings, setSettings] = useState<Settings>({
		totalPages: 1,
		currentPage: 0,
		lang: 'en'
	});

	const handleNextPage = () => {
		setSettings(prev => {
			if (prev.currentPage < prev.totalPages - 1) {
				return {
				...prev,
				currentPage: prev.currentPage + 1,
			}} else return prev;
		});
	}

	const handlePrevPage = () => {
		setSettings(prev => {
			if (prev.currentPage > 0) {
				return {
				...prev,
				currentPage: prev.currentPage - 1,
			}} else return prev;
		});
	}

	const handleTotalPages = (totalPages: number) => {
		setSettings(prev => ({
			...prev,
			totalPages,
			currentPage: 0,
		}));
	}

	const handleLang = () => {
		setSettings(prev => ({
			...prev,
			lang: (prev.lang === 'en') ? 'es' : 'en'
		}))
	}

  return (
    <Router>
			<Header
				lang={settings.lang}
				handleLang={handleLang}
			/>
				
			<main>
				<Pda 
					settings={settings}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				>
					<React.Suspense fallback={<LoadingScreen/>}>
						<Routes>
							<Route index path="/" element={
								<Home 
									settings={settings}
									handleTotalPages={handleTotalPages} />
							} />
							<Route path="/jobs" element={
								<Jobs 
									settings={settings}
									handleTotalPages={handleTotalPages}
								/>
							} />
							<Route path="/projects" element={
								<Projects
									settings={settings}
									handleTotalPages={handleTotalPages}
								/>
							} />
						</Routes>
					</React.Suspense>
				</Pda>
			</main>
    </Router>
  );
};

export default App;
