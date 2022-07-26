import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import './index.css';
import gtag, { install } from 'ga-gtag';
import { getCLS, getFID, getLCP } from 'web-vitals';
// import reportWebVitals from './reportWebVitals';
import App from './App';
import { StateProvider } from './store/StateProvider';
import reducer, { initialState } from './store/reducer';
import ContactUs from './components/ContactUs';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Listing = lazy(() => import('./components/Listing'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

const root = ReactDOM.createRoot(document.getElementById('root'));
install('G-53G5HMEJ1X');
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StateProvider initialState={initialState} reducer={reducer}>
				<Suspense
					fallback={
						<div>
							<Grid placeItems="center" height="100vh">
								<Spinner />
							</Grid>
						</div>
					}
				>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<Home />} />
							<Route path="posts" element={<Listing />} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<ContactUs />} />
							<Route path="*" element={<PageNotFound />} />
						</Route>
					</Routes>
				</Suspense>
			</StateProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function sendToGoogleAnalytics({ name, delta, value, id }) {
	// Assumes the global `gtag()` function exists, see:
	// https://developers.google.com/analytics/devguides/collection/ga4
	gtag('event', name, {
		// Built-in params:
		value: delta, // Use `delta` so the value can be summed.
		// Custom params:
		metric_id: id, // Needed to aggregate events.
		metric_value: value, // Optional.
		metric_delta: delta, // Optional.
	});
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);
