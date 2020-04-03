import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../pages/Homepage/HomePage';
import Borders from '../pages/Documentation/Utilities/Borders/Borders';
import Colors from '../pages/Documentation/Utilities/Colors';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact component={Homepage} path="/" />
				<Layout>
					<Route path="/docs/utilities/borders" component={Borders} />
					<Route path="/docs/utilities/colors" component={Colors} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
