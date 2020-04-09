import React from 'react';
import style from './index.module.scss';

function Text() {
	const ipsum = `Bring to the table win-win survival strategies to ensure proactive
	domination. At the end of the day, going forward, a new normal that
	has evolved from generation X is on the runway heading towards a
	streamlined cloud solution. User generated content in real-time will
	have multiple touchpoints for offshoring.`;

	return (
		<div className={`${style.text} p-5`}>
			<h1>Text</h1>
			<p>
				Documentation and examples for common text utilities to control
				alignment, wrapping, weight, and more.
			</p>

			<header>Text Alignment</header>
			<div>Easily align text component with text alignment utility.</div>

			<div className={`${style.codeContainer} p-1 mt-4`}>
				<div className="bg-white p-4 text-justify">{ipsum}</div>

				<div className="d-flex justify-content-between align-self-center p-4">
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textJustify`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark d-block ml-4">{`${ipsum}`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div className="text-right font-weight-normal text-secondary small">
						<span className={`${style.copy} p-2 rounded`}>Copy</span>
					</div>
				</div>
			</div>

			<div className={`${style.codeContainer} p-1 mt-4`}>
				<div className="bg-white p-4 text-left">
					<div>textLeft</div>
					<div className="text-center">textCenter</div>
					<div className="text-right">textRight</div>
				</div>

				<div className="p-4">
					<div className="d-flex justify-content-between align-self-center">
						<div>
							<code className="text-info">{`<Text `}</code>
							<code className="text-primary">{`style={`}</code>
							<code className="text-danger">{`textLeft`}</code>
							<code className="text-primary">{`}>`}</code>
							<code className="text-dark">{`textLeft`}</code>
							<code className="text-info">{`</Text>`}</code>
						</div>
						<div className="text-right font-weight-normal text-secondary small">
							<span className={`${style.copy} p-2 rounded`}>Copy</span>
						</div>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textCenter`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`textCenter`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textRight`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`textRight`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
				</div>
			</div>

			<header className="mt-5">Text Transform</header>
			<div>Transform text in components with text capitalization utility.</div>

			<div className={`${style.codeContainer} p-1 mt-4`}>
				<div className="bg-white p-4 text-left">
					<div className="text-lowercase">textLowerCase</div>
					<div className="text-uppercase my-4">textUpperCase</div>
					<div className="text-capitalize">textCapitalize</div>
				</div>

				<div className="p-4">
					<div className="d-flex justify-content-between align-self-center">
						<div>
							<code className="text-info">{`<Text `}</code>
							<code className="text-primary">{`style={`}</code>
							<code className="text-danger">{`textLowercase`}</code>
							<code className="text-primary">{`}>`}</code>
							<code className="text-dark">{`textLowercase`}</code>
							<code className="text-info">{`</Text>`}</code>
						</div>
						<div className="text-right font-weight-normal text-secondary small">
							<span className={`${style.copy} p-2 rounded`}>Copy</span>
						</div>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textUppercase`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`textUppercase`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textCapitalize`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`textCapitalize`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
				</div>
			</div>

			<header className="mt-5">Font weight and italics</header>
			<div>Quickly change the weight (boldness) of text or italicize text.</div>

			<div className={`${style.codeContainer} p-1 mt-3`}>
				<div className="bg-white p-4 text-left">
					<div className="font-weight-bold mb-3">fontWeightBold</div>
					<div className="font-weight-bolder mb-3">fontWeightBolder</div>
					<div className="font-weight-normal mb-3">fontWeightNormal</div>
					<div className="font-weight-light mb-3">fontWeightLight</div>
					<div className="font-weight-lighter mb-3">fontWeightLighter</div>
					<div className="font-italic">fontItalic</div>
				</div>

				<div className="p-4">
					<div className="d-flex justify-content-between align-self-center">
						<div>
							<code className="text-info">{`<Text `}</code>
							<code className="text-primary">{`style={`}</code>
							<code className="text-danger">{`fontWeightBold`}</code>
							<code className="text-primary">{`}>`}</code>
							<code className="text-dark">{`fontWeightBold`}</code>
							<code className="text-info">{`</Text>`}</code>
						</div>
						<div className="text-right font-weight-normal text-secondary small">
							<span className={`${style.copy} p-2 rounded`}>Copy</span>
						</div>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`fontWeightBolder`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`fontWeightBolder`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`fontWeightNormal`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`fontWeightNormal`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`fontWeightLight`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`fontWeightLight`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`fontWeightLighter`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`fontWeightLighter`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`fontItalic`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`fontItalic`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
				</div>
			</div>

			<header className="mt-5">Text decoration</header>
			<div>Remove text underline by using Text decoration utility.</div>

			<div className={`${style.codeContainer} p-1 mt-3`}>
				<div className="bg-white p-4 text-left">
					<div>textDecorationNone</div>
				</div>
				<div className="d-flex justify-content-between align-self-center p-4">
					<div>
						<code className="text-info">{`<Text `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`textDecorationNone`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-dark">{`textDecorationNone`}</code>
						<code className="text-info">{`</Text>`}</code>
					</div>
					<div className="text-right font-weight-normal text-secondary small">
						<span className={`${style.copy} p-2 rounded`}>Copy</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Text;
