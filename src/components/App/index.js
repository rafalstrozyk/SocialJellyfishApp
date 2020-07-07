import React, { useContext } from 'react';
import {
	createMuiTheme,
	MuiThemeProvider,
	ThemeProvider
} from '@material-ui/core/styles';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firebaseAuth } from '../../provider/AuthProvider';

import Login from '../Login/index';
import Register from '../Register/index';
import Dashboard from '../Dashboard/index';
import HomePage from '../HomePage/index';
const theme = createMuiTheme();

export default function App() {
	const { handleSignup } = useContext(firebaseAuth);
	console.log(handleSignup);

	return (
		<MuiThemeProvider theme={theme}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/dashboard' component={Dashboard} />
					</Switch>
				</Router>
			</ThemeProvider>
		</MuiThemeProvider>
	);
}
