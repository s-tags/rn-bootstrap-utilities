import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route path="/home">Content</Route>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
