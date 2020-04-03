import React from 'react';
import style from './index.module.scss';

function Visibility() {
	return (
		<div className={`${style.visibility} p-5`}>
			<h1>Visibility</h1>
			<p>
				Control the visibility without modifying the display of components with
				visibility utilities.
			</p>

			<div>
				Set the visibility of components with our visibility utilities. These
				utility do not modify the display value at all and do not affect layout
				– <code>invisible</code> elements still take up space in the page.
			</div>

			<div className={`${style.codeContainer} p-4 mt-4`}>
				<div className="d-flex justify-content-between align-self-center">
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`visible`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{` ... `}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div className="text-right font-weight-normal text-secondary small">
						<span className={`${style.copy} p-2 rounded`}>Copy</span>
					</div>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`invisible`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-dark">{` ... `}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
			</div>
		</div>
	);
}

export default Visibility;
