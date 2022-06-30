import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Conocenos from '@pages/Conocenos';
import Registro from '@pages/Registro';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Registro" component={Registro} />
						<Route exact path="/Conocenos" component={Conocenos} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
