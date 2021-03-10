import React from 'react';
import style from './index.module.scss';
import Phone from '../../../../components/Phone';

function Borders() {
	return (
		<div className="p-5">
			<h1 className={style.header}>Spacing</h1>
			<span className={style.paragraph}>
				Bootstrap includes a wide range of shorthand responsive margin and
				padding utility classes to modify an element’s appearance.
			</span>
			<div className="mt-4">
				<div className="mt-4">
					<h1 className={style.subheader}>Notation</h1>
				</div>
				In web class names uses <i>kebab-case</i> format{' '}
				<code>
					{'{property}'}
					{'{sides}'}-{'{size}'}
				</code>
				. However, it is react-native so we decided to implment same format but
				instead of <i>kebab-case</i> we use <strong>camelCase</strong>.
				<p className="mt-4">Where property is one of:</p>
				<li>
					<code>m</code> - for classes that set <code>margin</code>
				</li>
				<li>
					<code>p</code> - for classes that set <code>padding</code>
				</li>
			</div>
		</div>
	);
}

export default Borders;
