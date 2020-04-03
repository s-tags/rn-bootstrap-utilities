import React from 'react';
import style from './index.module.scss';

function Borders() {
	return (
		<div className="p-5">
			<h1 className={style.header}>Borders</h1>
			<span className={style.sample}>
				Use module css as posible. <br />
				Checkout the source code and check how className is created.
			</span>
		</div>
	);
}

export default Borders;
