import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import MyList from './routes/MyList';
import Movies from './routes/Movies';
import Results from './routes/Results';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/mylist',
		element: <MyList />,
	},
	{
		path: 'movies/:id',
		element: <Movies />,
	},
	{
		path: 'search-results',
		element: <Results />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
