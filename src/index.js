import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import auth from './reducers/auth';

import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';

const store = createStore(
	combineReducers({ auth, form: formReducer }),
	{
		auth: {
			authenticated: localStorage.getItem('token'),
		},
	},
	applyMiddleware(reduxThunk)
);

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/signin" component={Signin} />
				<Route path="/signout" component={Signout} />
				<Route path="/feature" component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
