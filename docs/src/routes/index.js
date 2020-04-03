import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../pages/Homepage/HomePage';
import Borders from '../pages/Documentation/Utilities/Borders/Borders';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact component={Homepage} path="/" />
				<Layout>
					<Route path="/docs/utilities/borders" component={Borders} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
