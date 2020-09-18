import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div
			className={`
    ${style.sidebar} p-3
  `}
		>
			<li className={`${style.module} font-weight-normal`}>
				<Link to="/docs/utilities/getting-started">Getting Started</Link>
			</li>
			<li className={`${style.module} py-1 font-weight-normal`}>
				<Link to={{ pathname: '' }}>Utilities</Link>
			</li>

			<li className="py-1">
				<Link to="/docs/utilities/borders">Borders</Link>
			</li>

			<li className="py-1">
				<Link to="/docs/utilities/colors">Colors</Link>
			</li>

			<li className="py-1">
				<Link to="/docs/utilities/display">Display</Link>
			</li>

			{/* <li className="py-1">
				<Link to="/docs/utilities/flex">Flex</Link>
			</li> */}

			<li className="py-1">
				<Link to="/docs/utilities/position">Position</Link>
			</li>

			{/* <li className="py-1">
				<Link to="/docs/utilities/sizing">Sizing</Link>
			</li> */}

			{/* <li className="py-1">
				<Link to="/docs/utilities/spacing">Spacing</Link>
			</li> */}

			<li className="py-1">
				<Link to="/docs/utilities/text">Text</Link>
			</li>

			<li className="py-1">
				<Link to="/docs/utilities/visibility">Visibility</Link>
			</li>
		</div>
	);
}
