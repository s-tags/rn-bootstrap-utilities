import React from 'react';
import style from './index.module.scss';

function Display() {
	return (
		<div className={`${style.display} p-5`}>
			<h1>Display</h1>
			<p>
				Easily modify display property of your layout by using display utiliy.
			</p>

			<div className={`${style.codeContainer} p-4 mt-4`}>
				<div className="d-flex justify-content-between align-self-center">
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`dFlex`}</code>
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
					<code className="text-danger">{`dNone`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-dark">{` ... `}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
			</div>
		</div>
	);
}

export default Display;