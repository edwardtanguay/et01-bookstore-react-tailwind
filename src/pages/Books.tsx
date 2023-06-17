import Book from '../components/Book';
import SearchBooks from '../components/SearchBox';
import { SearchContextProvider } from '../context/AppContext';

const Books = () => {
	return (
		<SearchContextProvider>
			<div className="flex items-center flex-col container px-8">
				<section className="flex justify-center">
					<SearchBooks />
				</section>
				<Book />
			</div>
		</SearchContextProvider>
	);
};

export default Books;
