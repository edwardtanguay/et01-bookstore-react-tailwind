import { useContext } from 'react';
import { AppContext } from './AppContext';
import { Navbar } from './components/Navbar';
import { Router } from './Router';

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
			<header className="py-2 shadow-2xl">
				<Navbar />
			</header>
			<main className="flex justify-center">
				<Router />
			</main>
		</div>
	);
};

export default App;
