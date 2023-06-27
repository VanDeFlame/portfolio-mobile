import './LoadingScreen.scss';

function LoadingScreen () {
	return (
		<div className="LoadingScreen">
			<div className="LoadingScreen-spinner">
				<div className="spinner-circle circle_1"></div>
				<div className="spinner-circle circle_2"></div>
				<div className="spinner-circle circle_3"></div>

				{[0, 1, 2, 3].map((i) => (
					<div id={`spinner_orbit${i}`} key={`spinner_orbit${i}`}>
						<div id={`spinner_pos${i}`} key={`spinner_pos${i}`}>
							<div id={`spinner_dot${i}`} key={`spinner_dot${i}`}></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { LoadingScreen };
