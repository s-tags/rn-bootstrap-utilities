import React from 'react';
import style from './index.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar';
import { node, oneOfType, arrayOf } from 'prop-types';

const Layout = ({ children }) => {
	return (
		<div className={`${style.layout} d-lg-flex flex-column d-none`}>
			<nav className={`flex-shrink-0 ${style.navLayout}`}>
				<Navbar />
			</nav>
			<div className="flex-grow-1 d-flex">
				<aside className={`flex-shrink-0 ${style.leftSidebar}`}>
					<Sidebar />
				</aside>
				<div className="d-flex flex-grow-1">
					<section className={`${style.content} flex-grow-1`}>
						{children}
					</section>
					<aside className={`flex-shrink-0 ${style.rightSidebar}`}></aside>
				</div>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: oneOfType([node, arrayOf(node)])
};

export default Layout;
