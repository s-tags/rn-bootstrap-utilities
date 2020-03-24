import React from 'react';
import style from './index.module.scss';

export default function Sidebar() {
	return (
		<div
			className={`
    ${style.sidebar} p-3
  `}
		>
			<li>Getting Started</li>
			<li className="py-1">Borders</li>
			<li className="py-1">Colors</li>
			<li className="py-1">Display</li>
			<li className="py-1">Flex</li>
			<li className="py-1">Image Replacement</li>
			<li className="py-1">Overflow</li>
			<li className="py-1">Position</li>
			<li className="py-1">Screen Readers</li>
			<li className="py-1">Shadows</li>
			<li className="py-1">Sizing</li>
			<li className="py-1">Spacing</li>
			<li className="py-1">Stretched link</li>
			<li className="py-1">Text</li>
			<li className="py-1">Visibility</li>
		</div>
	);
}
