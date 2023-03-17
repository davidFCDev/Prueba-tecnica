import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import './styles/index.css';

const Home = lazy(() => import('./routes/Home'));
const ErrorPage = lazy(() => import('./routes/ErrorPage'));
const MyList = lazy(() => import('./routes/MyListPage'));
const Movies = lazy(() => import('./routes/MoviePage'));
const Results = lazy(() => import('./routes/ResultsPage'));

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<></>}>
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
