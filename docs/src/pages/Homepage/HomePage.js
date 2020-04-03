import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Logo from './logo.png';
import './index.css';
import { Link, Redirect } from 'react-router-dom';

const Homepage = () => {
	const [redirectToDocs, setRedirectToDocs] = useState(false);

	if (redirectToDocs)
		return <Redirect push to="/docs/utilities/getting-started" />;

	return (
		<div>
			<div className="my-NavBar">
				<Navbar />
			</div>

			<div className="flex-container">
				<div>
					<h1 className="home-h1">Bootstrap Native</h1>
					<p>
						Bringing the world's most popular front-end library to the native
						world.
					</p>
					<p>
						Bootstrap Native is an open source toolkit for developing native
						application using web's bootstrap inspired components and utilities.
						Quickly prototype your ideas or develop native application using
						cross-platform components.
					</p>
					<div>
						<button
							onClick={() => setRedirectToDocs(true)}
							className="btn-started"
						>
							Get Started
						</button>
					</div>
				</div>
				<div>
					<img className="home-img" src={Logo} alt="Bootstrap" />
				</div>
			</div>

			<div className="container-fluid no-gutter second-home ">
				<div className="row h-100 ">
					<div className="col-4 m-0 p-0 d-flex  h-100 align-items-center">
						<div className="px-5">
							<i className="icon fas fa-cube"></i>
							<h2>Installation</h2>
							<p>
								Open your CLI, go to your project directory, and hit npm
								install.
							</p>
							<code>$ npm install rn-bootstrap-utilities</code>
							<div className="mt-4">
								<Link className="btn btn-outline-primary" to={{ pathname: '' }}>
									Read Installation
								</Link>
							</div>
						</div>
					</div>

					<div className="col-4">
						<div className="docu h-100 d-flex align-items-center px-5">
							<div>
								<i className="icon far fa-file-alt"></i>
								<h2> Documentation</h2>
								<p>
									Developers guide on how to use bootstrap native on their
									application.
								</p>
								<div>
									<Link
										className="btn btn-outline-primary"
										to={{ pathname: '/docs/utilities/getting-started' }}
									>
										Read Documentation
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-4 m-0 p-0 d-flex  h-100 align-items-center">
						<div className="px-5">
							<i className="icon fas fa-external-link-alt"></i>
							<h2>Bootstrap</h2>
							<p>
								Build responsive mobile-first projects on the web with the
								worlds most popular front-end component library.
							</p>
							<div>
								<a
									className="btn btn-outline-primary"
									href="https://getbootstrap.com/"
								>
									Check out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="page-footer p-5 mt-1">
				<div>
					<a
						className=" font-weight-bold"
						href="https://github.com/s-tags/rn-bootstrap-utilities"
					>
						GitHub
					</a>
					<Link className=" font-weight-bold ml-3" to={{ pathname: '' }}>
						About
					</Link>
					<p>
						Inspired by bootstrap team and contributors. Built and maintain by{' '}
						<a className="maintainer" href="https://github.com/s-tags">
							s-tags
						</a>
						.
						<br />
						Many thanks to{' '}
						<a className="maintainer" href="https://github.com/goni002">
							goni002
						</a>{' '}
						for contributing to the documentation.
					</p>
					<p>Code Licensed MIT.</p>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
