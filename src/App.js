import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signup from "./pages/signup";
import Signin from "./pages/sigin";

function App() {
	return (
		<Router>
			<Route path={ROUTES.HOME} exact>
				<Home/>
			</Route>
			<Route path={ROUTES.SIGN_UP}>
				<Signup/>
			</Route>
			<Route path={ROUTES.SIGN_IN}>
				<Signin/>
			</Route>
			<Route path={ROUTES.BROWSE}>
				<Browse/>
			</Route>
		</Router>
	)
		;
}

export default App;
