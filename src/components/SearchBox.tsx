import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBooks: React.FC = () => {
	const { filter, setFilter } = useContext(AppContext);

	return (
		<div className="my-8 bg-CURRENT_LINE rounded-3xl flex gap-4 py-1 items-center px-1 justify-between border border-PURPLE w-[80%]">
			<input
				className="rounded-3xl py-2 px-4  outline-none placeholder:text-slate-300 text-BACKGROUND w-[100%]"
				type="text"
				placeholder="Search here"
				value={filter}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setFilter(e.target.value)
				}
			/>
			<BiSearchAlt2 className="text-2xl cursor-pointer text-PURPLE mr-3" />
		</div>
	);
};

export default SearchBooks;
