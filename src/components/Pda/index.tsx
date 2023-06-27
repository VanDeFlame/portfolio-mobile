import { ReactNode } from 'react';
import './Pda.scss';
import { Settings } from '../../interfaces/Settings';

interface Props {
	settings: Settings;
	handlePrevPage: () => void;
	handleNextPage: () => void;
	children: ReactNode;
}

function Pda ({ settings, handleNextPage, handlePrevPage, children }: Props) {
	const { currentPage, totalPages } = settings;
	return (
		<div className={(settings.totalPages > 1) ? 'Pda Pda_pb' : 'Pda'}>
			<div className='Pda-overlay' />
			<div className='Pda-bg' />

			<div className='Pda-screen'>
				<div className='Pda-content'>
					{	children }
				</div>
			</div>

			{
				(settings.totalPages > 1) && <>
				<div className='Pda-buttons'>
					<button
						className='Pda-button'
						disabled={currentPage === 0}
						onClick={handlePrevPage}
					>{'<'}</button>
					<button
						className='Pda-button'
						disabled={currentPage === totalPages - 1}
						onClick={handleNextPage}
					>{'>'}</button>
				</div>

				<div className='Pda-points'>
					{	Array.from({ length: totalPages }).map((_, i) => (
						<i
							className={`Pda-point ${(currentPage === i) && 'active'}`}
							key={`pda-point-${i}`}
						/>
					))}
				</div>

				{/* Hexagon used in the buttons */}
				<svg width="0" height="0">
					<defs>
						<clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
							<path d="M0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0, 0.25z" />
						</clipPath>
					</defs>
				</svg>
			</>	}
		</div>
	);
}

export { Pda };
