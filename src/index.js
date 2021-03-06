import React from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
// import App from './App';
import Home from './components/Home';
import About from './components/About';
// import Layout from './components/Layout';
import Listing from './components/Listing';
import PageNotFound from './components/PageNotFound';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="posts" element={<Listing />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
