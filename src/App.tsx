import { useContext } from 'react';
import Navbar from './components/Navbar';
import { AppContext } from './context/AppContext';
import Routes from './Router';

const App = () => {
	const { isActive } = useContext(AppContext);

	return (
		<div
			className={`w-full min-h-screen ${
				isActive
					? 'bg-BACKGROUND text-FOREGROUND'
					: 'bg-FOREGROUND text-BACKGROUND'
			}`}
		>
			<header className="py-8 shadow-lg">
				<Navbar />
			</header>
			<main className="flex justify-center">
				<Routes />
			</main>
		</div>
	);
};

export default App;
