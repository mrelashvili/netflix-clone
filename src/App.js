import {BrowserRouter as Router, Switch} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signup from "./pages/signup";
import Sign from "./pages/signin";

import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import {useAuthListener} from './hooks';

function App() {

	const {user} = useAuthListener();

	return (
		<Router>
			<Switch>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
					<Sign/>
				</IsUserRedirect>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
					<Signup/>
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse/>
				</ProtectedRoute>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
					<Home/>
				</IsUserRedirect>
			</Switch>
		</Router>
	)
		;
}

export default App;
