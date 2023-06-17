import { useContext } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SearchContext } from '../context/AppContext';

const SearchBooks: React.FC = () => {
	const { searchParams, setSearchParams } = useContext(SearchContext);
	return (
		<div className="my-8 bg-CURRENT_LINE rounded-3xl flex gap-4 py-1 items-center px-1 justify-between border border-PURPLE w-[80%]">
			<input
				className="rounded-3xl py-2 px-4  outline-none placeholder:text-BACKGROUND text-BACKGROUND w-[100%]"
				type="text"
				placeholder="Buchsuche"
				value={searchParams.get('filter') || ''}
				onChange={(event) => {
					const filter = event.target.value;
					if (filter) {
						searchParams.set('filter', filter);
					} else {
						searchParams.delete('filter');
					}
					setSearchParams(
						new URLSearchParams(searchParams.toString())
					);
				}}
			/>
			<BiSearchAlt2 className="text-2xl cursor-pointer text-PURPLE mr-3" />
		</div>
	);
};

export default SearchBooks;
