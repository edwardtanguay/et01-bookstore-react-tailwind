import { Navigate, Route, Routes } from 'react-router-dom';
import { PageBooks } from './pages/PageBooks';
import { PageAbout } from './pages/PageAbout';

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="/books" />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/books/:bookId" element={<PageBooks />} />
				<Route path="/about" element={<PageAbout />} />
			</Routes>
		</div>
	);
};

export default Router;
