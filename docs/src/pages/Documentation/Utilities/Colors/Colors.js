import React from 'react';
import Phone from '../../../../components/Phone/Phone';
import style from './index.module.scss';

function Colors() {
	let colorsCode = null;
	let bgCode = null;

	const colors = [
		'textPrimary',
		'textSecondary',
		'textSuccess',
		'textDanger',
		'textWarning',
		'textInfo',
		'textLight',
		'textDark',
		'textBody',
		'textMuted',
		'textWhite',
		'textBlack50',
		'textWhite50',
	];

	const bg = [
		'bgPrimary',
		'bgSecondary',
		'bgSuccess',
		'bgDanger',
		'bgWarning',
		'bgInfo',
		'bgLight',
		'bgDark',
		'bgBody',
		'bgMuted',
		'bgWhite',
		'bgBlack50',
		'bgWhite50',
	];

	colorsCode = colors.map((item) => {
		return (
			<div>
				<code className="text-info">{`<Text `}</code>
				<code className="text-primary">{`style={`}</code>
				<code className="text-danger">{item}</code>
				<code className="text-primary">{`}>`}</code>
				<code className="text-dark">{item}</code>
				<code className="text-info">{`</Text>`}</code>
			</div>
		);
	});

	bgCode = bg.map((item) => {
		return (
			<div>
				<code className="text-info">{`<View `}</code>
				<code className="text-primary">{`style={`}</code>
				<code className="text-danger">{item}</code>
				<code className="text-primary">{`}>`}</code>
				<code className="text-dark">{item}</code>
				<code className="text-info">{`</View>`}</code>
			</div>
		);
	});

	return (
		<div className={`${style.colors} p-5`}>
			<h1>Colors</h1>
			<p>
				Convey meaning through color with a handful of color utility classes.{' '}
				<br />
				Includes support for styling links with hover states, too.
				<div className="font-weight-normal">Note: Update this.</div>
			</p>

			<header>Color</header>
			<div
				className={`mt-2 border w-100 p-4 d-flex justify-content-center ${style.sampleContainer}`}
			>
				<Phone>
					<div className="w-100">
						<div className="text-primary mb-2">textPrimary</div>
						<div className="text-secondary my-2">textSecondary</div>
						<div className="text-success my-2">textSuccess</div>
						<div className="text-danger my-2">textDanger</div>
						<div className="text-warning my-2">textWarning</div>
						<div className="text-info my-2">textInfo</div>
						<div className="text-light bg-dark my-2">textLight</div>
						<div className="text-dark my-2">textDark</div>
						<div className="text-body my-2">textBody</div>
						<div className="text-muted my-2">textMuted</div>
						<div className="text-white bg-dark my-2">textWhite</div>
						<div className="text-black-50 my-2">textBlack50</div>
						<div className="text-white-50 bg-dark my-2">textWhite50</div>
					</div>
				</Phone>
			</div>
			<div className={`${style.codeContainer} p-4`}>
				<div className="text-right font-weight-normal text-secondary small">
					<span className={`${style.copy} p-2 rounded`}>Copy</span>
				</div>

				{colorsCode}
			</div>

			<header className="mt-3">Background color</header>
			<div
				className={`mt-2 border w-100 p-4 d-flex justify-content-center	 ${style.sampleContainer}`}
			>
				<Phone>
					<div className="w-100">
						<div className="bg-primary p-1 mb-2 text-light">bgPrimary</div>
						<div className="bg-secondary text-light p-1 my-2">bgSecondary</div>
						<div className="bg-success text-light p-1 my-2">bgSuccess</div>
						<div className="bg-danger text-light p-1 my-2">bgDanger</div>
						<div className="bg-warning text-light p-1 my-2">bgWarning</div>
						<div className="bg-info text-light p-1 my-2">bgInfo</div>
						<div className="bg-light text-dark p-1 my-2">bgLight</div>
						<div className="bg-dark text-white p-1 my-2">bgDark</div>
						<div className="bg-white text-dark p-1 my-2">bgWhite</div>
						<div
							style={{ backgroundColor: '#00000073' }}
							className="bg-black-50 text-dark p-1 my-2"
						>
							bgBlack50
						</div>
						<div className="bg-transparent text-dark p-1 my-2">bgWhite50</div>
					</div>
				</Phone>
			</div>

			<div className={`${style.codeContainer} p-4`}>
				<div className="text-right font-weight-normal text-secondary small">
					<span className={`${style.copy} p-2 rounded`}>Copy</span>
				</div>
				{bgCode}
			</div>
		</div>
	);
}

export default Colors;
