import { lazy, Suspense, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import Loader from './components/Loader';
import './index.css';

const Home = lazy(() => import('./routes/Home'));
const ErrorPage = lazy(() => import('./routes/ErrorPage'));
const MyList = lazy(() => import('./routes/MyList'));
const Movies = lazy(() => import('./routes/Movies'));
const Results = lazy(() => import('./routes/Results'));

const App = () => {
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowLoader(true);
		}, 500);
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense
					fallback={
						<div
							style={{
								opacity: showLoader ? 1 : 0,
								transition: 'opacity 0.3s ease-in-out 0.5s',
							}}
						>
							<Loader />
						</div>
					}
				>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/mylist' element={<MyList />} />
						<Route path='/movies/:id' element={<Movies />} />
						<Route path='/search-results' element={<Results />} />
						<Route path='*' element={<ErrorPage />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
};

createRoot(document.getElementById('root')).render(<App />);
