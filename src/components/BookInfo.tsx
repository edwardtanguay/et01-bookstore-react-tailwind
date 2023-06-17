import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useParams } from 'react-router-dom';

const BookInfo = () => {
	const { getBook } = useContext(AppContext);
	const params = useParams();
	const bookId = params.bookId ? parseInt(params.bookId) : 0;
	const book = getBook(bookId);

	return (
		<div className="flex flex-col items-center py-6 container px-8 gap-4">
			{book !== undefined ? (
				<>
					<img className="rounded-xl" src={book.imgUrl} alt="" />
					<ul className="bg-COMMENT w-full rounded-lg text-center md:text-left">
						<li className="list-style text-BACKGROUND text-center text-3xl">
							{book.name}
						</li>
						<li className="list-style">{book.due}</li>
						<li className="list-style text-YELLOW text-xl">
							{book.amount}
						</li>
						<li className=" list-style text-BACKGROUND text-xl text-justify px-3">
							{book.desc}
						</li>
					</ul>
				</>
      ) : (
          <>
          Book with id {bookId} not found.
          </>
      )}
		</div>
	);
};

export default BookInfo;
