import React from 'react';
import style from './index.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar';

const Layout = () => {
	return (
		<div className={style.layout}>
			<div
				className={`
        d-lg-flex flex-column d-none
        ${style.desktop}
      `}
			>
				<nav className="flex-shrink-0">
					<Navbar />
				</nav>
				<div className="flex-grow-1 d-flex">
					<aside className="flex-shrink-0">
						<Sidebar />
					</aside>
					<div className="d-flex flex-grow-1">
						<section className={`${style.content} flex-grow-1`}>
							Main Content
						</section>
						<aside className="flex-shrink-0">Aside Right</aside>
					</div>
				</div>
			</div>

			<div className={`${style.mobile} d-block d-lg-none`}>
				<nav>Navbar</nav>
				<aside>
					<Sidebar />
				</aside>
				<section className={style.content}>Main Content</section>
			</div>
		</div>
	);
};

export default Layout;
