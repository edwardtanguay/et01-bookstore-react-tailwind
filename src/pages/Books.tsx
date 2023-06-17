import Book from '../components/Book';
import SearchBooks from '../components/SearchBox';

const Books = () => {
	return (
			<div className="flex items-center flex-col container px-8">
				<section className="flex justify-center">
					<SearchBooks />
				</section>
				<Book />
			</div>
	);
};

export default Books;
