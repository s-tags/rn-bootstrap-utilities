import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../pages/Homepage/HomePage';


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
			<Route exact component={Homepage} path="/" />
				<Layout>
				<Route path="/home">Content</Route>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
