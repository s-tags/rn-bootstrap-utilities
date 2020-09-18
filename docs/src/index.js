import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import { Initializer } from '@buoyant/react';
import { initialState, whitelist } from './config/buoyant.config';

ReactDOM.render(
	<React.StrictMode>
		<Initializer retain whitelist={whitelist} value={initialState}>
			<Routes />
		</Initializer>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
