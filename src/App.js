import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Outlet, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

const App = () => {
	const queryClient = new QueryClient();
	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<nav className="header-nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>

						<li>
							<Link to="/posts">All Posts</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact us</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ChakraProvider>
	);
};

export default App;
