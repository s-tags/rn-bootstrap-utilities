import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../pages/Homepage/HomePage';
import Borders from '../pages/Documentation/Utilities/Borders/Borders';
import Colors from '../pages/Documentation/Utilities/Colors';
import Visibility from '../pages/Documentation/Utilities/Visibility';
import Position from '../pages/Documentation/Utilities/Position';
import Display from '../pages/Documentation/Utilities/Display';
import Text from '../pages/Documentation/Utilities/Text';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact component={Homepage} path="/" />
				<Layout>
					<Route path="/docs/utilities/borders" component={Borders} />
					<Route path="/docs/utilities/colors" component={Colors} />
					<Route path="/docs/utilities/visibility" component={Visibility} />
					<Route path="/docs/utilities/position" component={Position} />
					<Route path="/docs/utilities/display" component={Display} />
					<Route path="/docs/utilities/text" component={Text} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
