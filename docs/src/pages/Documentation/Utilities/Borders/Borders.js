import React from 'react';
import style from './index.module.scss';

function Borders() {
	return (
		<div className="p-5">
			<h1 className={style.header}>Borders</h1>
			<span className={style.paragraph}>
				Use border utilities to quickly style the border and border-radius of an
				component
			</span>
			<div className="mt-4">
				<h1 className={style.subheader}>Border</h1>
				<span className={style.paragraph}>
					Use border utilities to add or remove an component borders. Choose
					form all border or one a time
				</span>
			</div>
			<div className="mt-4">
				<h1 className={style.subheader}>Additive</h1>
			</div>
			<div className={style.bdUtilites}>
				<div className=" p-4 mx-0 mt-2">
					<span className={`${style.borderType} border`}></span>
					<span className={`${style.borderType} border-top ml-4`}></span>
					<span className={`${style.borderType} border-right ml-4`}></span>
					<span className={`${style.borderType} border-bottom ml-4`}></span>
					<span className={`${style.borderType} border-left ml-4`}></span>
				</div>
			</div>
			<div>
				<div className={`${style.copy} mr-4 small mt-4 p-2 rounded`}>Copy</div>
			</div>

			<div className={style.bdClipboard}>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`border`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderTop`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderRight`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderBottom`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<code className="text-info">{`<View `}</code>
				<code className="text-primary">{`style={`}</code>
				<code className="text-danger">{`borderLeft`}</code>
				<code className="text-primary">{`}>`}</code>
				<code className="text-info">{`</View>`}</code>
			</div>

			<div className="mt-4">
				<h1 className={style.subheader}>Subtractive</h1>
			</div>
			<div className={style.bdUtilites}>
				<div className=" p-4 mx-0 mt-2">
					<span className={`${style.borderSubtractive} border border-0`}></span>
					<span
						className={`${style.borderSubtractive} border border-top-0 ml-4`}
					></span>
					<span
						className={`${style.borderSubtractive} border border-right-0 ml-4`}
					></span>
					<span
						className={`${style.borderSubtractive} border border-bottom-0 ml-4`}
					></span>
					<span
						className={`${style.borderSubtractive} border border-left-0 ml-4`}
					></span>
				</div>
			</div>
			<div>
				<div className={`${style.copy} mr-4 small mt-4 p-2 rounded`}>Copy</div>
			</div>

			<div className={style.bdClipboard}>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`border0`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderTop0`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderRight0`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`borderBottom0`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<code className="text-info">{`<View `}</code>
				<code className="text-primary">{`style={`}</code>
				<code className="text-danger">{`borderLeft0`}</code>
				<code className="text-primary">{`}>`}</code>
				<code className="text-info">{`</View>`}</code>
			</div>

			<div className="mt-4">
				<h1 className={style.subheader}>Border Color</h1>
				<p>
					Change the border color using utilities built on our theme colors.
				</p>
			</div>

			<div className={style.bdUtilites}>
				<div className=" p-4 mx-0 mt-2 d-flex">
					<span className={`${style.borderType} border border-primary`}></span>
					<span
						className={`${style.borderType} border border-secondary ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-success ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-danger ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-warning ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-info ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-light ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-dark ml-4`}
					></span>
					<span
						className={`${style.borderType} border border-white ml-4`}
					></span>
				</div>

				<div>
					<div className={`${style.copy} mr-4 small mt-4 p-2 rounded`}>
						Copy
					</div>
				</div>

				<div className={style.bdClipboard}>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderPrimary]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderSecondary]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderSuccess]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderDanger]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderWarning]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderInfo]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderLight]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderDark]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
					<div>
						<code className="text-info">{`<View `}</code>
						<code className="text-primary">{`style={`}</code>
						<code className="text-danger">{`[border, borderWarning]`}</code>
						<code className="text-primary">{`}>`}</code>
						<code className="text-info">{`</View>`}</code>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<h1 className={style.subheader}>Border Radius</h1>
				<p>Modify border corners easily by adding.</p>
			</div>
			<div className={style.bdUtilites}>
				<div className="p-4 mx-0 mt-2">
					<span className={`${style.borderType} rounded`}></span>
					<span className={`${style.borderType} rounded-top ml-4`}></span>
					<span className={`${style.borderType} rounded-right ml-4`}></span>
					<span className={`${style.borderType} rounded-left ml-4`}></span>
					<span className={`${style.borderType} rounded-bottom ml-4`}></span>
					<span className={`${style.borderType} rounded-circle ml-4`}></span>
					<span className={`${style.borderType} rounded-0 ml-4`}></span>
				</div>
			</div>
			<div>
				<div className={`${style.copy} mr-4 small mt-4 p-2 rounded`}>Copy</div>
			</div>

			<div className={style.bdClipboard}>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`rounded`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedTop`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedRight`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedBottom`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedLeft`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedCircle`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`rounded0`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
			</div>
			<div className="mt-4">
				<h1 className={style.subheader}>Sizes</h1>
				<p>Use roundedLg or roundedSm for larger or smaller border radius.</p>
			</div>
			<div className={style.bdUtilites}>
				<div className="p-4 mx-0 mt-2">
					<span className={`${style.borderType} rounded-sm`}></span>
					<span className={`${style.borderType} rounded-lg ml-4`}></span>
				</div>
			</div>
			<div>
				<div className={`${style.copy} mr-4 small mt-4 p-2 rounded`}>Copy</div>
			</div>

			<div className={style.bdClipboard}>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedSm`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
				<div>
					<code className="text-info">{`<View `}</code>
					<code className="text-primary">{`style={`}</code>
					<code className="text-danger">{`roundedLg`}</code>
					<code className="text-primary">{`}>`}</code>
					<code className="text-info">{`</View>`}</code>
				</div>
			</div>
		</div>
	);
}

export default Borders;
