import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShipList from '../components/Shiplist';
import ShipSingle from '../components/ShipSingle';
import { ShipProvider } from '../contexts/ShipContext';

const Routes = () => {
	return (
		<BrowserRouter>
			<ShipProvider>
				<Switch>
					<Route exact path="/">
						<ShipList />
					</Route>
					<Route path="/:id" component={ShipSingle} />
				</Switch>
			</ShipProvider>
		</BrowserRouter>
	);
};

export default Routes;
