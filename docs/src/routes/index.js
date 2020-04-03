import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../pages/Homepage/HomePage';
import Borders from '../pages/Documentation/Utilities/Borders/Borders';
import Colors from '../pages/Documentation/Utilities/Colors';
import Visibility from '../pages/Documentation/Utilities/Visibility';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact component={Homepage} path="/" />
				<Layout>
					<Route path="/docs/utilities/borders" component={Borders} />
					<Route path="/docs/utilities/colors" component={Colors} />
					<Route path="/docs/utilities/visibility" component={Visibility} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
