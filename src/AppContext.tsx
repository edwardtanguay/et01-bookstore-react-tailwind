import React, { createContext, useState } from 'react';
import _books from './data/books.json';
import { IBook } from './interface';

export interface IActive {
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	filter: string;
	setFilter: (filter: string) => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
	getBook: (id: number) => IBook | undefined;
}

export interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IActive>({} as IActive);

export const ActiveContextProvider: React.FC<IAppProvider> = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [filter, setFilter] = useState('');
	const [books, setBooks] = useState<IBook[]>(_books);

	const getBook = (id: number): IBook | undefined => {
		return books.find((book) => book.id === id);
	};

	return (
		<AppContext.Provider
			value={{
				isActive,
				setIsActive,
				filter,
				setFilter,
				books,
				setBooks,
				getBook
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
