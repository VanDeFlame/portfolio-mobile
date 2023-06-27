import './PdaSelector.scss';

interface Props {
	text: string;
}

function PdaSelector ({ text }: Props) {
	return (
		<div className='PdaSelector'>
			<p>{text}</p>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 650 100"
					className='PdaSelector-svg'
				>
					<path d="m 11.323284,74.838788 c 0.02704,3.649802 1.556393,7.265999 4.15631,9.827682 2.599917,2.561682 6.238374,4.037301 9.888176,4.010266 3.649801,-0.02704 7.265999,-1.556394 9.827681,-4.15631 2.561683,-2.599917 4.037302,-6.238374 4.010266,-9.888176 -0.02704,-3.649802 -1.556393,-7.265999 -4.15631,-9.827682 -2.599917,-2.561682 -6.238374,-4.037301 -9.888176,-4.010266 -3.649801,0.02704 -7.265999,1.556394 -9.827681,4.15631 -2.561683,2.599917 -4.037302,6.238374 -4.010266,9.888176 z" />
					<path d="M 36.998716,66.740761 148.21034,5.6220928 h 503.78949" />
				</svg>
			</span>
		</div>
	);
}

export { PdaSelector }