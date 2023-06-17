import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

const Book = () => {
	const { filter, books } = useContext(AppContext);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{books.filter(m => m.name.toLowerCase().includes(filter.toLowerCase())).map((book) => (
				<NavLink
					to={`/book/${book.id}`}
					key={book.id}
				>
					<div className="flex items-center gap-4 justify-start md:w-80 lg:w-96 bg-CURRENT_LINE py-2 px-4 rounded-lg border border-PURPLE shadow-inner shadow-COMMENT cursor-pointer ">
						<img
							className="w-24 md:w-16 lg:w-24 rounded-lg"
							src={book.imgUrl}
							alt=""
						/>
						<ul className=" bg-COMMENT w-full rounded-lg font-bold">
							<li className="list-style">{book.name}</li>
							<li className="list-style">{book.due}</li>
							<li className="list-style">{book.amount}</li>
						</ul>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Book;
