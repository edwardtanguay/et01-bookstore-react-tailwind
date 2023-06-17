import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Books from '../components/Books';
import SearchBox from '../components/SearchBox';
import { useParams } from 'react-router-dom';
import { Book } from '../components/Book';
import { BookNotFound } from '../components/BookNotFound';

export const PageBooks = () => {
	const { getBook } = useContext(AppContext);
	const params = useParams();
	const bookId = params.bookId ? parseInt(params.bookId) : 0;
	const book = getBook(bookId);

	console.log(bookId, book);

	return (
		<div className="flex items-center flex-col container px-8">
			{bookId === 0 && (
				<section className="flex justify-center">
					<SearchBox />
				</section>
			)}
			{bookId === 0 ? (
				<Books />
			) : (
				<>
					{book !== undefined ? (
						<>
							<Book book={book} />
						</>
					) : (
						<BookNotFound/>
					)}
				</>
			)}
		</div>
	);
};
